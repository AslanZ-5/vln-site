import { Card as MantineCard, BackgroundImage } from '@mantine/core';
import { MantineNumberSize, MantineShadow } from '@mantine/styles';
import { Typography } from '@/shared/ui-kit/typography/typography';

type Weight = 'regular' | 'medium';

interface CardProps {
  header?: string
  children: React.ReactNode;
  backgroundImage?: string
  className?: string;
  weight?: Weight;
  withBorder?: boolean;
  shadow?: MantineShadow;
  padding?: MantineNumberSize;
  radius?: MantineNumberSize;
}

function Card({
  header,
  children,
  backgroundImage,
  className,
  shadow,
  padding,
  radius,
  withBorder,
}: CardProps) {
  return (
    <MantineCard
      shadow={shadow}
      padding={padding}
      radius={radius}
      className={className}
      withBorder={withBorder}
    >
      <BackgroundImage
        src={ backgroundImage || '#F0F0F0' }
      >
        <Typography
          heading={true}
          weight={'medium'}
          size={4}
        >
          { header }
        </Typography>
        { children }
      </BackgroundImage>
    </MantineCard>
  );
}

export default Card;
