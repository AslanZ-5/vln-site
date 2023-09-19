import { ReactNode } from "react";
import { Header } from "@/widgets/header";

import { Wrapper, StyledHeader, Content, FooterWrapper, FooterCards, StyledFooter } from "./layout.styles";


export function Layout({ children }: { children: ReactNode }) {
  return (
    <Wrapper>
      <StyledHeader>
        <Header />
      </StyledHeader>
      <Content>{children}</Content>
      <FooterWrapper>
        <FooterCards>footerCards</FooterCards>
        <StyledFooter>footer</StyledFooter>        
      </FooterWrapper>
    </Wrapper>
  );
}
