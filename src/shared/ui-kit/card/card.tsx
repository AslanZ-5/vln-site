import { Card as MantineCard, Image, Text, Badge, Button, Group } from '@mantine/core';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin', 'cyrillic'],
})

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
