import React from "react";
import styled from "@emotion/styled";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Transport from "./components/Transport/Transport";
import SideMenu from "./components/SideMenu/SideMenu";

const StyledWrapper = styled.div `
  position: relative;
  min-height: 100%;
  overflow: hidden;
  display: flex;
`

export default function Home(): JSX.Element {
  return (
    <StyledWrapper>
      <div>
          <Header />
          <Main />
          <About />
          <Transport/>
          </div>
          <SideMenu/>
      </StyledWrapper>
  );
}
