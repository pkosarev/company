import React from "react";
import styled from '@emotion/styled';

type Props = {
    children: string;
    href: string;
}

const UnActiveLink = styled.a `
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--white);
    opacity: 0.4;
    &:hover {text-decoration: underline;}
`

const NavLink = (props: Props): JSX.Element => {
    return (
        <UnActiveLink href={props.href}>{props.children}</UnActiveLink>
    )
}

export default NavLink;