import React from "react";
import styled from "styled-components";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Transport from "./components/Transport/Transport";
import SideMenu from "./components/SideMenu/SideMenu";

const StyledContainer = styled.div `
  max-width: 1760px;
  padding: 0 15px;
  margin: 0 auto;
  box-sizing: content-box;
`

const StyledWrapper = styled.div `
  min-height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

export default function Home(): JSX.Element {
  return (
    <StyledWrapper>
        <StyledContainer>
          <Header />
          <Main />
          <About />
          <Transport/>
          <SideMenu/>
        </StyledContainer>
      </StyledWrapper>
  );
}
