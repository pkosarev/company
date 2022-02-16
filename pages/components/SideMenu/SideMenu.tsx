import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";

const SideNav = styled.div `
    position: absolute;
    top:0;
    left: 1840px;
    height: 2658px;
    max-width: 80px;
    background-color: var(--gray);
    padding-top: 20px;
`
const Menu = styled.div `
    font-size: 14px;
    line-height: 16px;
    text-align: right;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #1C1C1C;

    transform: rotate(90deg);
`

const StyledWrapper = styled.div `
    text-align: center;
    margin-top: 45px;
    margin-bottom: 20px;
`

const SideBarContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`

const ScrollDown = styled.div `
    margin-top: 709px;
    width: 143px;

    font-size: 14px;
    line-height: 16px;

    letter-spacing: 0.1em;
    text-transform: uppercase;

    color: #1C1C1C;

    transform: rotate(90deg);

    &::after {content:''}
`
const ArrowUpContainer = styled.div `
    margin-top: 1630px;
`

const ArrowDownContainer = styled.div `
    margin-top: 70px;
    transform: rotate(180deg);
`

const SideMenu = (): JSX.Element => {
    return (
        <>
        <SideNav>
            <StyledWrapper>
                <Image src="/Union.svg" width={30} height={12} alt='меню'/>
            </StyledWrapper>
            <SideBarContainer>
                <Menu>Меню</Menu>
                <ScrollDown>Листайте вниз</ScrollDown>
                <ArrowDownContainer>
                    <Image src='/arrow-up.svg' width={48.81} height={48.71} alt='стрелка'/>
                </ArrowDownContainer>
                <ArrowUpContainer>
                    <Image src='/arrow-up.svg' width={48.81} height={48.71} alt='стрелка'/>
                </ArrowUpContainer>
            </SideBarContainer>
        </SideNav>
        </>
    )
}

export default SideMenu;