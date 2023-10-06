// @ts-nocheck
import { FC, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { ButtonProps } from './button.types';
import { Typography } from '../typography/typography';
import {
  buttonColors,
  buttonColorsInverted,
  buttonTextColors,
  buttonTextColorsInverted,
} from './colors';
import { volnaTheme as theme } from '../../constants/theme';
import './button.module.scss';

const StyledSpinner = styled.svg<{
  color: string;
}>`
  animation: rotate 2s linear infinite;
  width: 16px;
  height: 16px;
  position: absolute;

  & .path {
    stroke: ${({ color }) => color};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

const Spinner = ({ color }: { color: string }) => (
  <StyledSpinner viewBox="0 0 50 50" color={color}>
    <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
  </StyledSpinner>
);

export const Button: FC<ButtonProps> = ({
  size = 'm',
  type = 'default',
  state = 'enabled',
  purpose = 'primary',
  icon,
  onClick,
  children,
}) => {
  const [color, setColor] = useState(null);
  const [textColor, setTextColor] = useState(null);

  useEffect(() => {
    const color =
      type === 'inverted' ? buttonColorsInverted[state] : buttonColors[purpose]?.[state];
    const textColor =
      type === 'inverted' ? buttonTextColorsInverted[state] : buttonTextColors[purpose]?.[state];
    color && setColor(theme.colors[color[0]][color[1]]);
    textColor && setTextColor(theme.colors[textColor[0]][textColor[1]]);
  }, [type, purpose, state]);

  return (
    <button
      style={{
        backgroundColor: purpose === 'outlane' ? 'transparent' : color || 'inherit',
        border: purpose === 'outlane' ? `1px solid ${color}` : 'none',
        borderRadius: type === 'icon' ? '50%' : '12px',
      }}
      className={[`storybook-button--${type}-${size}`].join(' ')}
      onClick={onClick}>
      {
        <>
          {(type === 'with_icon' || 'icon') && icon}
          <span
            style={{
              display: type === 'icon' ? 'none' : 'inline-block',
              visibility: state === 'load' ? 'hidden' : 'visible',
            }}>
            <Typography
              lable={true}
              weight={'medium'}
              size={size === 'xs' ? 5 : 4}
              color={textColor || 'inherit'}>
              {children}
            </Typography>
          </span>
          {state === 'load' && <Spinner color={textColor || 'inherit'} />}
        </>
      }
    </button>
  );
};

export default Button;
