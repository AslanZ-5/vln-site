import styled from "@emotion/styled";
import { volnaTheme as theme } from '../../constants/theme';
import clearIcon from './clearIcon.svg';
import errorClearIcon from './errorclearIcon.svg';

export const Container = styled.div<{ $containerWidth?: string }>`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: ${props => props.$containerWidth};
`;

export const InputWrapper = styled.div<{
  $isError?: boolean;
  $withBorder?: boolean;
  $backgroundColor?: string;
}>`
  display: flex;
  box-sizing: border-box;
  height: 48px;
  padding: 16px 20px 16px 24px;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  border-radius: var(--other-input, 12px);
  background: ${props =>
    props.$backgroundColor || (props.$withBorder ? theme.colors.base[0] : theme.colors.base[100])};
  border: ${props =>
    props.$isError
      ? `1px solid ${theme.colors.error.fire}`
      : props.$withBorder
      ? `1px solid ${theme.colors.base[400]}`
      : 'none'};
`;

export const Input = styled.input<{
  $isError?: boolean;
  $disabled?: boolean;
}>`
  color: ${props => (props.$disabled ? theme.colors.base[400] : theme.colors.base[900])};
  /* Label/L4 [m] */
  display: block;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px; /* 100% */
  letter-spacing: -0.14px;
  flex: 1 0 0;
  border: none;
  outline: none;
  background-color: transparent;

  &::-webkit-search-cancel-button {
    margin: 0;
    margin-left: 16px;
    appearance: none;
    height: 20px;
    width: 20px;
    //background: url(${props => (props.$isError ? errorClearIcon : clearIcon)}) no-repeat 50% 50%;
  }

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }

  &::placeholder {
    color: ${props => (props.$disabled ? theme.colors.base[400] : theme.colors.base[700])};
  }
`;
export const Label = styled.label<{ $disabled?: boolean }>`
  color: ${props => (props.$disabled ? theme.colors.base[400] : theme.colors.base[900])};

  /* Label/L5 */
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px; /* 100% */
  align-self: stretch;
`;
export const List = styled.div<{
  $withBorder?: boolean;
  $backgroundColor?: string;
}>`
  display: flex;
  width: 100%;
  max-height: 290px;
  overflow: scroll;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: var(--other-input, 12px);
  border: ${props => (props.$withBorder ? `1px solid ${theme.colors.base[400]}` : 'none')};
  background: ${props =>
    props.$backgroundColor || (props.$withBorder ? theme.colors.base[0] : theme.colors.base[100])};
`;
export const Item = styled.div`
  display: flex;
  padding: 16px 12px 16px 60px;
  align-items: center;
  gap: 10px;
  align-self: stretch;

  color: ${props => theme.colors.base[900]};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px; /* 100% */
  letter-spacing: -0.14px;

  &:hover {
    background: ${props => theme.colors.base[300]};
  }
  &:active {
    color: ${props => theme.colors.primary[500]};
  }
`;
export const Error = styled.div`
  position: relative;
  top: -4px;
  color: ${props => theme.colors.error.fire};
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px; /* 100% */
  letter-spacing: -0.06px;
`;
