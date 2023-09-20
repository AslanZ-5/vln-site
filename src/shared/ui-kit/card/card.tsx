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
      <MantineCard.Section component="a" href="https://mantine.dev/">
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={300}
          alt="picture"
        />
      </MantineCard.Section>

      <Group mt="md" mb="xs">
        <Text fw={500}>Norway Fjord Adventures</Text>
        <Badge color="pink" variant="light">
          Бейдж
        </Badge>
      </Group>

      <Text size="sm" c="dimmed">
        Текст!
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Кнопка!
      </Button>
    </MantineCard>
  );
}

export default Card;
