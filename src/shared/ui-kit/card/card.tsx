import { Card as MantineCard } from '@mantine/core';

type Weight = 'regular' | 'medium'

function Card({
  children,
}: {
  children: React.ReactNode
  weight?: Weight
}) {
  return (
    <MantineCard shadow="sm" padding="lg" radius="md" withBorder>
      {children}
    </MantineCard>
  );
}

export default Card;
