import styled from '@emotion/styled';
import { mq } from '@/shared/constants/mediaQueries';

export const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  padding-left: 70px;
  padding-right: 70px;
  display: flex;
  flex-direction: column;
  ${mq[0]} {
    padding-left: 20px;
    padding-right: 20px;
  };
  ${mq[1]} {
    padding-top: 44px;
    padding-bottom: 96px;
  };
`;
export const StyledHeader = styled.div`
  height: 84px;
  ${mq[0]} {
    height: 44px;
    padding-left: 32px;
  }
  ${mq[1]} {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #fff;
  };
`;
export const Content = styled.div`
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  margin-top: auto;
  ${mq[0]} {
    gap: 48px;
  };
  ${mq[1]} {
    gap: 24px;
  };
`
export const FooterCards = styled.div`
  height: 204px;
  border: 1px solid gray;
  ${mq[0]} {
    height: 428px;
  };
  ${mq[1]} {
    height: 630px;
  }
`;
export const StyledFooter = styled.div`
  border: 1px solid grey;
  border-top: 1px solid #E5E8EB;
  height: 82px;
  ${mq[0]} {
    height: 76px;
  };
  ${mq[1]} {
    height: 86px;
  };
`;
