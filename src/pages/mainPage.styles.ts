import styled from "@emotion/styled";
import { mq } from "@/shared/constants/mediaQueries";

const br = 'border: 1px solid grey;';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  margin-bottom: 64px;
  ${mq[0]} {
    gap: 48px;
    margin-bottom: 48px;
  };
  ${mq[1]} {
    gap: 32px;
    margin-bottom: 32px;
  }
`;
export const CarouselWrapper = styled.div`
  ${br}
  height: 356px;
  ${mq[0]} {
    height: 258px;
    width: calc(100% + 40px);
    position: relative;
    left: -20px;
  };
  ${mq[1]} {
    height: 494px;
  }
`;
export const Tariffs = styled.div`
  ${br}
  height: 420px;
  ${mq[1]} {
    height: 528px;
  }
`;
export const Banners = styled.div`
  ${br}
  height: 692px;
  ${mq[0]} {
    height: 1260px;
  };
  ${mq[1]} {
    height: 1675px;
  };
`;
export const News = styled.div`
  ${br}
  height: 536px;
  ${mq[0]} {
    height: 588px;
  };
  ${mq[1]} {
    height: 524px;
  }
`;
