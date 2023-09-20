import styled from "@emotion/styled";
import { mq } from "@/shared/constants/mediaQueries";

export const Wrapper = styled.div`
  width: 100%;
  height: 84px;
  display: flex;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  ${mq[0]} {
    height: 44px;
  };
`;
export const Navigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  flex: 1 0 0;

  color: #000;

  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; 
  letter-spacing: -0.16px;
  ${mq[1]} {
    display: none;
  }
`;
export const RightSide = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
`;
export const Personal = styled.button`
  display: flex;
  padding: 16px 24px;
  justify-content: center;
  gap: 10px;
  color: #184bff;
  background-color: #f4f6fb;
  border-radius: 12px;
  border: none;
  outline: none;
  ${mq[0]} {
    display: none;
  };
`;
export const Search = styled.div`
  display: inline-flex;
  ${mq[1]} {
    display: none;
  }
`;
export const User = styled.div`
  display: none;
  ${mq[0]} {
    display: inline-flex;
  };
`;
export const Logo = styled.div`
  display: inline-flex;
`;
