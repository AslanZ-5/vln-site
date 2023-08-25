import { Text } from '@mantine/core'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin', 'cyrillic'],
})

type PropMap = Record<string, number | string>

type Weight = 'regular' | 'medium'

const weights: PropMap = {
  regular: 400,
  medium: 500,
}

type Size = '1' | '2' | '3' | '4' | '5' | '6'

const sizes: PropMap = {
  '1': '50px',
  '2': '32px',
  '3': '26px',
  '4': '22px',
  '5': '18px',
  '6': '15px',
}

function Heading({
  children,
  weight = 'medium',
  size = '1',
}: {
  children: React.ReactNode
  weight?: Weight
  size?: Size
}) {
  return (
    <Text
      className={roboto.className}
      sx={{
        fontWeight: weights[weight as keyof PropMap] as number,
        fontSize: sizes[size as keyof PropMap] as string,
      }}
    >
      {children}
    </Text>
  )
}

export default Heading
