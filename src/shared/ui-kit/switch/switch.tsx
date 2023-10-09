import styled from '@emotion/styled';
import { SwitchProps, SwitchSize } from './switch.types';

type SizeStyles = {
  width: string;
  height: string;
  beforeWidth: string;
  beforeHeight: string;
  beforeTranslate: string;
};

type SwitchStylesProps = {
  sizeStyles: SizeStyles;
};

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 10px;
  letter-spacing: -0.14px;
`;

const SwitchStyles = styled.div<SwitchStylesProps>`
  position: relative;
  background: #bcc3d2;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;
  width: ${({ sizeStyles }) => sizeStyles.width};
  height: ${({ sizeStyles }) => sizeStyles.height};

  &:before {
    transition: 300ms all;
    content: '';
    position: absolute;
    border-radius: 35px;
    top: 50%;
    left: 2px;
    background: #fff;
    transform: translate(0, -50%);
    width: ${({ sizeStyles }) => sizeStyles.beforeWidth};
    height: ${({ sizeStyles }) => sizeStyles.beforeHeight};
  }
`;

const Input = styled.input<SwitchStylesProps>`
  opacity: 0;
  position: absolute;

  &:checked + ${SwitchStyles} {
    background: #eb008c;

    &:before {
      transform: translate(${({ sizeStyles }) => sizeStyles.beforeTranslate}, -50%);
    }
  }
`;

export const Switch = ({ disabled, label, size, onChange, checked }: SwitchProps) => {
  const getSizeStyles = (size: SwitchSize = SwitchSize.DEFAULT) => {
    switch (size) {
      case SwitchSize.MEDIUM:
        return {
          width: '50px',
          height: '24px',
          beforeWidth: '18px',
          beforeHeight: '18px',
          beforeTranslate: '28px',
        };
      case SwitchSize.LARGE:
        return {
          width: '50px',
          height: '30px',
          beforeWidth: '27px',
          beforeHeight: '27px',
          beforeTranslate: '20px',
        };
      default:
        return {
          width: '35px',
          height: '16px',
          beforeWidth: '12px',
          beforeHeight: '12px',
          beforeTranslate: '18px',
        };
    }
  };

  return (
    <Label>
      <Input
        checked={checked}
        type="checkbox"
        disabled={disabled}
        onChange={onChange}
        sizeStyles={getSizeStyles(size)}
      />
      <SwitchStyles sizeStyles={getSizeStyles(size)} />
      {label}
    </Label>
  );
};
