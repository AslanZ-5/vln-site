import styled from '@emotion/styled';
import { Position, Side } from './tooltip.types';
import { volnaTheme as theme } from '../../constants/theme';

export const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const TooltipWrapper = styled.div<{
  $width?: string;
  $backgroundColor?: string;
  $isOpen?: boolean;
  $position?: Position;
  $side?: Side;
  $inverted?: boolean;
}>`
  display: ${props => (!props.$isOpen && 'none') || 'block'};
  position: absolute;
  z-index: 10;
  padding: 12px 16px;
  border-radius: 8px;
  background: ${props =>
    props.$backgroundColor || (props.$inverted ? theme.colors.base[900] : theme.colors.primary[500])};
  width: ${props => props.$width || 'auto'};
  margin: 0;
  margin-${props =>
    (props.$position === 'top' && 'bottom') ||
    (props.$position === 'bottom' && 'top') ||
    (props.$side === 'left' && 'right') ||
    (props.$side === 'right' && 'left')}: 4px;
  left: ${props => props.$side === 'right' && (props.$position === 'side' ? 'calc(100%)' : '0')};
  right: ${props => props.$side === 'left' && (props.$position === 'side' ? 'calc(100%)' : '0')};
  bottom: ${props => props.$position === 'top' && 'calc(100%)'};
  top: ${props => props.$position === 'side' && '0'};
`;

export const Corner = styled.div<{
  $backgroundColor?: string;
  $side?: Side;
  $position?: Position;
  $inverted?: boolean;
}>`
  padding: 0.7px;
  background: transparent;
  border: 4px solid transparent;
  border-${props => (props.$position === 'side' ? props.$side : props.$position)}: 4px solid
    ${props =>
      props.$backgroundColor || (props.$inverted ? theme.colors.base[900] : theme.colors.primary[500])};
  position: absolute;
  top: ${props => (props.$position === 'bottom' && '-8px') || (props.$position === 'side' && '20px')};
  left: ${props =>
    props.$side === 'right' && props.$position === 'side' ? '-8px' : props.$side === 'right' && '16px'};
  right: ${props => (props.$side === 'left' && props.$position === 'side' ? '-8px' : props.$side === 'left' && '16px')};
  bottom: ${props => props.$position === 'top' && '-8px'};
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
`;

export const VariantsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 30px;
`;
