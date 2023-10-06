import { useMediaQuery } from "@mantine/hooks";
import { onlyMobile, tablet, tabletOnly, desktop } from "../constants/mediaQueries";

export const useMobile = () => {
  const isMobile = useMediaQuery(onlyMobile);
  const isTablet = useMediaQuery(`(min-width: ${tablet}px) and (max-width: ${tabletOnly}px)`);
  const isDesktop = useMediaQuery(desktop);

  return { isMobile, isTablet, isDesktop };
}
