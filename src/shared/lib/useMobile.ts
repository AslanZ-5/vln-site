import { useMediaQuery } from "@mantine/hooks"
import { TABLET, TABLET_SM, DESKTOP } from "../constants/mediaQueries"

export const useMobile = () => {
  const isMobile = useMediaQuery(`(max-width: ${TABLET - 1}px)`)
  const isTablet = useMediaQuery(`(min-width: ${TABLET}px) and (max-width: ${TABLET_SM}px)`)

  return { isMobile, isTablet };
}
