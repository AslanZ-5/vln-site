import { FC } from 'react';
import { LinkProps } from './link.types';
import NextLink from 'next/link'
import { Typography } from '../typography/typography';
import styled from '@emotion/styled';
import { volnaTheme as theme } from '../../constants/theme';

const StyledTitleLight = styled.div<{ disabled: boolean }>`
  color: ${({ disabled }) =>
    disabled ? theme.colors.base[400] : theme.colors ? theme.colors.primary[500] : '#184BFF'};

  &:hover {
    color: ${({ disabled }) =>
      disabled ? theme.colors.base[400] : theme.colors ? theme.colors.primary[300] : '#7499FF'};
  }
  &:active {
    color: ${({ disabled }) =>
      disabled ? theme.colors.base[400] : theme.colors ? theme.colors.primary[200] : '#A2BDFF'};
  }
  &:disabled {
    color: ${() => (theme.colors ? theme.colors.base[400] : '#BCC3D2')};
  }
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const StyledTitleDark = styled.div<{ disabled: boolean }>`
  background: ${() => (theme.colors ? theme.colors.base[900] : '#282D3C')};

  color: ${({ disabled }) =>
    disabled ? theme.colors.base[100] : theme.colors ? theme.colors.primary[200] : '#A2BDFF'};

  &:hover {
    color: ${({ disabled }) =>
      disabled ? theme.colors.base[100] : theme.colors ? theme.colors.primary[300] : '#7499FF'};
  }
  &:active {
    color: ${({ disabled }) =>
      disabled ? theme.colors.base[100] : theme.colors ? theme.colors.base[900] : '#282D3C'};
  }
  &:disabled {
    color: ${() => (theme.colors ? theme.colors.base[400] : '#BCC3D2')};
  }
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

export const Link: FC<LinkProps> = ({
  light = false,
  dark = false,
  href,
  title,
  disabled = false,
  style,
  onClick,
}) => {
  const handleClick = () => {
    onClick?.();
  };

  return (
    <NextLink href={href} style={{ color: 'transparent' }} onClick={handleClick}>
      <Typography paragraph size={3} style={style ? { ...style } : {}}>
        {light && !dark && <StyledTitleLight disabled={disabled}>{title}</StyledTitleLight>}
        {dark && !light && <StyledTitleDark disabled={!!disabled}>{title}</StyledTitleDark>}
      </Typography>
    </NextLink>
  );
};
