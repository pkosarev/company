import React from "react";
import styled from "@emotion/styled";
import NavLink from "./Link/NavLink";
import { onSDesctopWidth } from "../../../../styles/breakpoint.css";

const StyledHeaderMenu = styled.nav `
    margin: 0 0 0 auto;

`
const StyledMenu = styled(StyledHeaderMenu) `
    padding: 5px 0;

    ${onSDesctopWidth} {
        display: none;
    }
`

const StyledMenuList = styled.ul `
    display: flex;
    flex-wrap: wrap;
`

const StyledMenuItem = styled.li `
    margin: 0 80px 0 0;

    ${onSDesctopWidth} {
        margin: 0 10px 0 0;
    }
`

const Navigation = (): JSX.Element => {
    return (
        <StyledMenu>
        <StyledMenuList>
            <StyledMenuItem>
                <NavLink active={true} href={'/'}>Главная</NavLink>
            </StyledMenuItem>
            <StyledMenuItem>
                <NavLink href={'/'}>Продукты и Услуги</NavLink>
            </StyledMenuItem>
            <StyledMenuItem>
                <NavLink href={'/'}>Проекты</NavLink>
            </StyledMenuItem>
            <StyledMenuItem>
                <NavLink href={'/'}>Новости</NavLink>
            </StyledMenuItem>
            <StyledMenuItem>
                <NavLink href={'/'}>Контакты</NavLink>
            </StyledMenuItem>
        </StyledMenuList>
    </StyledMenu>
    )
}

export default Navigation;