import { MantineSize, ModalBaseSettings } from '@mantine/core';
import React from 'react';

type ModalSize = { size?: MantineSize };

type PickedModalBaseProps = Pick<
  ModalBaseSettings,
  'children' | 'styles' | 'opened' | 'onClose' | 'lockScroll' | 'classNames'
> &
  ModalSize;

export interface ModalProps extends React.PropsWithChildren, PickedModalBaseProps {
  title: string;
  disableBackgoundGradient?: boolean;
}
