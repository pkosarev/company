import React from "react";
import styled from '@emotion/styled';

type Props = {
    children: string;
    href: string;
    active?: boolean;
}

const StyledLink = styled.a<{ isActive?: boolean }> `
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--white);
    &:hover {text-decoration: underline;}
    opacity: ${({ isActive }) => isActive ? 1 : 0.4};
`

const NavLink = (props: Props): JSX.Element => {
    return (<>
        <StyledLink isActive={props.active} href={props.href}>{props.children}</StyledLink>
        </>
    )
}

export default NavLink;