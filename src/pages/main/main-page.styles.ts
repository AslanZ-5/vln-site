import styled from "@emotion/styled";
import { mq } from "@/shared/constants/mediaQueries";

const br = 'border: 1px solid lightgray;';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 64px;
  margin-bottom: 64px;
  width: 100%;
  ${mq[0]} {
    gap: 48px;
    margin-bottom: 48px;
  };
  ${mq[1]} {
    gap: 32px;
    margin-bottom: 32px;
  };
`;

export const CarouselWrapper = styled.div`
  ${br}
  width: 100%;
  ${mq[0]} {
    width: calc(100% + 40px);
  };
`;

export const Tariffs = styled.div`
  ${br}
  width: 100%;
`;

export const Banners = styled.div`
  ${br}
  width: 100%;
`;

export const News = styled.div`
  ${br}
  width: calc(100% + 140px);
  ${mq[0]} {
    width: calc(100% + 40px);
  };
`;
