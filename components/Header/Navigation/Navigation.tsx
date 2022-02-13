import React from "react";
import styled from "styled-components";
import NavLink from "./Link/NavLink";

const StyledHeaderMenu = styled.nav `
    margin: 0 0 0 691px;
`
const StyledMenu = styled(StyledHeaderMenu) `
    padding: 5px 0;
`

const StyledMenuList = styled.ul `
    display: flex;
    flex-wrap: wrap;
`

const StyledMenuItem = styled.li `
    &:not(:last-child) {margin: 0 80px 0 0;}
`

const Navigation = (): JSX.Element => {
    return (
        <StyledMenu>
        <StyledMenuList>
            <StyledMenuItem>
                <NavLink href={'/'}>Главная</NavLink>
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