import styled from '@emotion/styled';

export const Container = styled.div<{ $containerWidth?: string }>`
  display: flex;
  width: ${props => props.$containerWidth || '100%'};
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
`;
export const Label = styled.label<{ $disabled?: boolean }>`
  color: ${props => (props.$disabled ? 'var(--base-400, #BCC3D2)' : 'var(--base-stone-900, #282D3C)')};
  font-family: 'Roboto';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  align-self: stretch;
`;
export const Wrapper = styled.div<{
  $withBorder?: boolean;
  $isError?: boolean;
  $textareaHeight?: string;
  $backgroundColor?: string;
}>`
  display: flex;
  padding: 20px 24px;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: var(--other-input, 12px);
  background: ${props =>
    props.$backgroundColor || (props.$withBorder ? 'var(--base-0-cloud, #FFF)' : 'var(--base-100, #F4F6FB)')};
  border: ${props =>
    props.$isError
      ? '1px solid var(--additional-error-fire, #ED584E)'
      : props.$withBorder
      ? '1px solid var(--base-400, #BCC3D2)'
      : 'none'};
  height: ${props => props.$textareaHeight || '104px'};
`;

export const StyledTextarea = styled.textarea<{ $disabled?: boolean }>`
  background-color: transparent;
  color: var(--base-stone-900, #282d3c);
  font-family: 'Roboto';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: -0.14px;
  flex: 1 0 0;
  resize: none;
  width: 100%;
  &::placeholder {
    color: ${props => (props.$disabled ? 'var(--base-400, #BCC3D2)' : '(--base-700, #515B73)')};
  }
`;
export const Error = styled.div`
  align-self: stretch;
  color: var(--additional-error-fire, #ed584e);
  font-family: 'Roboto';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
`;
