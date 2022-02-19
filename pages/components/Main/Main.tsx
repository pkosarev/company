import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import { onTableWidth } from "../../../styles/breakpoint.css";
import bg from '../../../public/tanks2.jpg';
import Container from "../Container/Container";

const StyledTitle = styled.h1 `
    margin-top: 20px;
    margin-bottom: 244px;
    font-weight: 500;
    font-size: 84px;
    line-height: 100%;
    color: var(--white);

    ${onTableWidth} {
        font-weight: 300;
        font-size: 40px;
        line-height: 120%;

        padding-bottom: 30px;
    }
`

const Wrap = styled.div `

`
const StyledMainBlock = styled.div `
    display:flex;
    height: 800px;
    align-items: top;
    background: var(--blue);

    ${onTableWidth} {
        flex-direction: column;
    }
`

const StyledBreadcrumbs = styled.div `
    display: flex;
    margin-top: 236px;

    ${onTableWidth} {
        margin-top: 67px;
    }
`

const StyleBreadcrumbsLink = styled.a `
    margin-right: 10px;
    font-weight: 300;
    font-size: 14px;
    line-height: 160%;
    color: var(--white);
    opacity: 0.5;
    &:hover {text-decoration: underline; cursor: pointer;}

    ${onTableWidth} {
        font-weight: 300;
        font-size: 12px;
        line-height: 160%;
    }
`
const StyledArrow = styled.div `
    margin-right: 10px;
`

const StyledMainBlockText = styled.div `
    margin-top: 48px;

    font-weight: 300;
    font-size: 25px;
    line-height: 160%;

    color: var(--white);

    ${onTableWidth} {
        margin-top: 0px;

        font-size: 16px;
        line-height: 160%;
    }
`

const StyledBorder = styled.div `
    border-top: 1px solid var(--white);
`

const StyledBg = styled.div`
    filter: brightness(60%);
    flex: 1 0 55%;

    & > * {
      height: 100% !important;
      width: 100% !important;
    }

    ${onTableWidth} {
        height: 250px;
        filter: none;
    }
`

const Main = (): JSX.Element => {
  return (
      <StyledMainBlock>
          <Wrap>
              <Container>
                <StyledBreadcrumbs>
                    <StyleBreadcrumbsLink>Главная</StyleBreadcrumbsLink>
                    <StyledArrow><Image src='/arrow.svg' width={6.36} height={11.31} alt='стрелка'/></StyledArrow>
                    <StyleBreadcrumbsLink>Компания</StyleBreadcrumbsLink>
                </StyledBreadcrumbs>
                <StyledTitle>Компания</StyledTitle>
                </Container>
                <StyledBorder/>
                <Container>
            <StyledMainBlockText>Основная сфера деятельности «ПензГидромаш» — <br/> создание систем для нефтяной, газовой, химической<br/> и нефтехимической сфер промышленности.</StyledMainBlockText>
            </Container>
            </Wrap>
            <StyledBg>
                <Image
                    src={bg}
                    alt='цистерны'
                    width={960}
                    height={800}
                    objectFit="cover"
                    quality={100}
                />
            </StyledBg>
      </StyledMainBlock>
  )
}

export default Main;