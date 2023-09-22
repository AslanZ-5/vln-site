import styled from "@emotion/styled";
import { mq } from "@/shared/constants/mediaQueries";

const br = 'border: 1px solid lightgray;';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 64px;
  margin-bottom: 64px;
  width: 1440px;
  ${mq[0]} {
    width: 768px;
    gap: 48px;
    margin-bottom: 48px;
  };
  ${mq[1]} {
    width: 375px;
    gap: 32px;
    margin-bottom: 32px;
  };
`;

export const CarouselWrapper = styled.div`
  ${br}
  width: 100%;
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
  width: 100%;
  height: 420px;
  ${mq[1]} {
    height: 528px;
  }
`;

export const Banners = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  ${br}
  width: 1440px;
  ${mq[0]} {
    width: 768px; 
  };
  ${mq[1]} {
    width: 375px;
    flex-direction: column;
  };
`;

export const News = styled.div`
  ${br}
  width: 100%;
  height: 536px;
  ${mq[0]} {
    height: 588px;
  };
  ${mq[1]} {
    height: 524px;
  }
`;
