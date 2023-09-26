import { ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './tooltip';
import { Button } from '../button/button';
import { Container, VariantsContainer } from './constants';
import { Position, Side } from './tooltip.types';

const meta = {
  title: 'Example/Tooltip',
  component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({
    text = 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    width = '273px',
    ...args
  }) => {
    return (
      <Container>
        <Tooltip text={text} width={width} {...args}>
          <Button>Lorem</Button>
        </Tooltip>
      </Container>
    );
  },
};

const positionVariants: Array<Position> = ['top', 'bottom', 'side'];
const sideVariants: Array<Side> = ['left', 'right'];

export const Varints = () => {
  const primary: Array<ReactNode> = [];
  const inverted: Array<ReactNode> = [];
  positionVariants.forEach(position => {
    sideVariants.forEach(side => {
      primary.push(
        <Tooltip position={position} side={side} text={`${position} ${side}`}>
          <Button>
            {position} {side}
          </Button>
        </Tooltip>,
      );
      inverted.push(
        <Tooltip position={position} side={side} text={`${position} ${side}`} inverted>
          <Button>
            {position} {side}
          </Button>
        </Tooltip>,
      );
    });
  });
  return (
    <>
      <VariantsContainer>{primary}</VariantsContainer>
      <VariantsContainer>{inverted}</VariantsContainer>
    </>
  );
};
