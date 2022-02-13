import React from "react";
import styled from "styled-components";
import About from "../components/About/About";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";

const StyledWrapper = styled.div `
  max-width: 1760px;
  padding: 0 15px;
  margin: 0 auto;
  box-sizing: content-box;
`

export default function Home(): JSX.Element {
  return (
      <StyledWrapper>
        <Header />
        <Main />
        <About />
      </StyledWrapper>
  );
}
