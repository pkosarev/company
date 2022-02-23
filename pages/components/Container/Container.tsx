import React, { PropsWithChildren } from "react";
import styled from "@emotion/styled";
import { onTableWidth } from "../../../styles/breakpoint.css";

type Props = {};

const StyledContainer = styled.div `
    max-width: 1920px;
    padding: 0 80px;
    margin: 0 auto;
    width: 100%;

    ${onTableWidth} {
        padding: 0;
    }
`

const Container = (props: PropsWithChildren<Props>): JSX.Element => {
    return (<StyledContainer>
        {props.children}
    </StyledContainer>)
}

export default Container;