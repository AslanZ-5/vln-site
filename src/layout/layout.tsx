import { ReactNode } from "react";
import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";

import { Wrapper, StyledHeader, Content, FooterWrapper, FooterCards, StyledFooter } from "./layout.styles";


export function Layout({ children }: { children: ReactNode }) {
  return (
    <Wrapper>
      <StyledHeader>
        <Sidebar />
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
