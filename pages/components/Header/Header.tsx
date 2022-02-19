import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Navigation from "./Navigation/Navigation";
import Container from "../Container/Container";

const StyledHeader = styled.header `
    position: absolute;
    width: 100%;
    top: 0;
    z-index: 50;
`
const StyledHeaderContainer = styled.div `
    display: flex;
    margin-top: 45px;
    align-items: center;
`

const StyledName = styled.a `
    margin-left: 20px;

    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0.1em;
    text-transform: uppercase;

    color: var(--white);
`

const StyledImage = styled(Image) `
    flex: 0 0;
`

const Header = (): JSX.Element => {
    return (
            <StyledHeader>
        <Container>
                <StyledHeaderContainer>
                    <StyledImage src='/logo.png' width={39} height={38} alt="Логотип" />
                    <StyledName>
                        ПензГидроМаш
                    </StyledName>
                    <Navigation/>
                </StyledHeaderContainer>
        </Container>
    </StyledHeader>
    );
}

export default Header;