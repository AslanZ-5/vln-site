import { useState } from 'react';
import { PaginationProps } from './pagination.types';
import { css } from '@emotion/css'
import styled from '@emotion/styled';
import { volnaTheme as theme } from '../../constants/theme';
import chevronLeft from './chevron-left.svg';
import chevronRight from './chevron-right.svg';
import dots from './dots.svg';

const itemStyles = css`
  display: flex;
  width: 32px;
  height: 32px;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 8px;

  cursor: pointer;
`;

const StyledDots = styled.div`
  ${itemStyles}
`;

const StyledContainer = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 8px;
`;

const StyledItem = styled.div<{
  active: boolean;
}>`
  ${itemStyles}
  background: ${({ active }) => (active ? (theme.colors ? theme.colors.primary[500] : '#184BFF') : 'inherit')};
  color: ${({ active }) => (active ? '#fff' : '#000')};
  border: ${({ active }) =>
    active ? 'none' : `1px solid ${theme.colors ? theme.colors.base[300] : '#E2E7F3'};`};
`;

const StyledLabel = styled.div`
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 100% */
  letter-spacing: -0.16px;
`;

const Dots = () => (
  <StyledDots>
    <img src={dots} alt='' />
  </StyledDots>
);

const Item = ({
  children,
  active = false,
  page,
  setActive,
}: {
  children: React.ReactNode;
  active: boolean;
  page: number;
  setActive: (index: number) => void;
}) => {
  return (
    <StyledItem active={active} onClick={() => setActive(page)}>
      <StyledLabel>{children}</StyledLabel>
    </StyledItem>
  );
};

export const Pagination = ({ index = 1, onIndexChange, pages = 10 }: PaginationProps) => {
  const [selected, setSelected] = useState(index);

  const setActive = (n: number) => {
    onIndexChange(n);
    setSelected(n);
  };

  return (
    <StyledContainer>
      <Item page={selected - 1} setActive={() => setActive(selected > 1 ? selected - 1 : 1)} active={false}>
        <img src={chevronLeft} alt='' />
      </Item>

      <Item active={selected === 1} page={1} setActive={() => setActive(1)}>
        {1}
      </Item>

      {pages < 8 ? (
        [...Array(pages)]
          .map((_, k) => k++)
          .slice(1, pages - 1)
          .map((k, index) => (
            <Item key={index} active={k + 1 === selected} page={k + 1} setActive={() => setActive(k + 1)}>
              {k + 1}
            </Item>
          ))
      ) : (
        <>
          {selected < 5 ? (
            [2, 3, 4, 5].map((k, index) => (
              <Item key={index} active={selected === k} page={k} setActive={() => setActive(k)}>
                {k}
              </Item>
            ))
          ) : (
            <Dots />
          )}

          {selected >= 5 &&
            selected <= pages - 4 &&
            [...Array(pages)]
              .map((_, k) => k++)
              .slice(selected - 2, selected + 1)
              .map((k, index) => (
                <Item key={index} active={k + 1 === selected} page={k + 1} setActive={() => setActive(k + 1)}>
                  {k + 1}
                </Item>
              ))}

          {selected > pages - 4 ? (
            [pages - 4, pages - 3, pages - 2, pages - 1].map((k, index) => (
              <Item key={index} active={selected === k} page={k} setActive={() => setActive(k)}>
                {k}
              </Item>
            ))
          ) : (
            <Dots />
          )}
        </>
      )}

      <Item active={selected === pages} page={pages} setActive={() => setActive(pages)}>
        {pages}
      </Item>

      <Item page={selected + 1} setActive={() => setActive(selected < pages ? selected + 1 : pages)} active={false}>
        <img src={chevronRight} alt='' />
      </Item>
    </StyledContainer>
  );
};
