import { ReactNode } from "react";
import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";
import { Footer } from "@/widgets/footer/footer";
import { FooterCardsBlock } from "@/widgets/footer-cards/footer-cards";

import {
  Wrapper,
  StyledHeader,
  Content,
  FooterWrapper,
  FooterCards,
  StyledFooter,
} from "./layout.styles";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <Wrapper>
      <Sidebar />
      <StyledHeader>
        <Header />
      </StyledHeader>
      <Content>{children}</Content>
      <FooterWrapper>
        <FooterCards>< FooterCardsBlock /></FooterCards>
        <StyledFooter><Footer /></StyledFooter>        
      </FooterWrapper>
    </Wrapper>
  );
}
