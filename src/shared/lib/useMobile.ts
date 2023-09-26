import { useMediaQuery } from "@mantine/hooks"
import { breakpoints } from "../constants/mediaQueries"

export const useMobile = () => {
  const isMobile = useMediaQuery(`(max-width: ${breakpoints[1]}px)`)

  return {isMobile}
}
