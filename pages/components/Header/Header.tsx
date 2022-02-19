import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Navigation from "./Navigation/Navigation";

const StyledHeader = styled.header `
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 50;
`
const StyledHeaderContainer = styled.div `
    display: flex;
    margin-left: 80px;
    margin-top: 45px;
    min-height: 58px;
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

const Header = (): JSX.Element => {
    return (
            <StyledHeader>
            <StyledHeaderContainer>
                <Image src='/logo.png' width={39} height={38} alt="Логотип" />
                <StyledName>
                    ПензГидроМаш
                </StyledName>
                <Navigation/>
            </StyledHeaderContainer>
        </StyledHeader>
    );
}

export default Header;