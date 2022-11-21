import React from "react";
import styled from "@emotion/styled";
import ArrowUp from '../../../public/arrow-up.svg';
import Hamburger from '../../../public/Union.svg';
import { onSDesktopWidth } from "../../../styles/breakpoint.css";

const SideNav = styled.div `
    width: 80px;
    background-color: var(--gray);
    padding-top: 20px;

    ${onSDesktopWidth} {
        display: none;
    }
`
const Menu = styled.div `
    margin-top: 20px;
    font-size: 14px;
    line-height: 16px;
    text-align: right;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #1C1C1C;

    transform: rotate(90deg);
`

const StyledWrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 44px;
`

const StyledHamburger = styled(Hamburger) `
    margin-bottom: 20px;
`

const SideBarContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
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
`

const StyledArrowDown = styled(ArrowUp) `
    display: block;
    margin-top: 70px;
    transform: rotate(180deg);
`

const StyledArrowUp = styled(ArrowUp)`
    display: block;
    margin-top: auto;
    margin-bottom: 10px;
`

const SideMenu = (): JSX.Element => {
    return (
        <SideNav>
            <SideBarContainer>
                <StyledWrapper>
                    <StyledHamburger/>
                    <Menu>Меню</Menu>
                </StyledWrapper>
                <ScrollDown>Листайте вниз</ScrollDown>
                    <StyledArrowDown/>
                    <StyledArrowUp/>
            </SideBarContainer>
        </SideNav>
    )
}

export default SideMenu;
