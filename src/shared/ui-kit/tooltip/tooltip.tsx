import { FC, useState } from 'react';
import { Typography } from '../typography/typography';
import { TooltipProps } from './tooltip.types';
import { TooltipWrapper, TooltipContainer, Corner } from './constants';

export const Tooltip: FC<TooltipProps> = ({
  text,
  textColor,
  width,
  backgroundColor,
  side = 'right',
  position = 'side',
  isOpen,
  component,
  children,
  inverted,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <TooltipContainer>
      <div onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)}>
        {children}
      </div>
      <TooltipWrapper
        $width={width}
        $backgroundColor={backgroundColor}
        $isOpen={isOpen || open}
        $position={position}
        $side={side}
        $inverted={inverted}
      >
        <Typography style={{ width: '100%' }} color={textColor || '#fff'} paragraph={true} size={5}>
          {text}
        </Typography>
        {component}
        <Corner $backgroundColor={backgroundColor} $side={side} $position={position} $inverted={inverted} />
      </TooltipWrapper>
    </TooltipContainer>
  );
};
