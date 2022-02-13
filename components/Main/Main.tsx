import React from "react";
import styled from 'styled-components';
import Image from "next/image";
import bg from '../../public/tanks2.jpg';

const StyledTitle = styled.h1 `
    margin-top: 20px;
    margin-left: 80px;
    padding-bottom: 195px;
    font-weight: 500;
    font-size: 84px;
    line-height: 100%;
    color: var(--white);
`
const StyledMainBlock = styled.div `
    position: relative;
`

const StyledBreadcrumbs = styled.div `
    display: flex;
    margin-left: 86px;
    margin-top: 117px;
`

const StyleBreadcrumbsLink = styled.a `
    margin-right: 10px;
    font-weight: 300;
    font-size: 14px;
    line-height: 160%;
    color: var(--white);
    opacity: 0.5;
    &:hover {text-decoration: underline; cursor: pointer;}
`
const StyledArrow = styled.div `
    margin-right: 10px;
`
const Border = styled.div `
    border-bottom: 1px solid var(--gray);
`

const StyledMainBlockBody = styled.div `
    padding: 140px 0 0 0;
    position: relative;
    left: -80px;

    z-index: 2;
    max-width: 880px;
    height: 800px;

    background: var(--blue);
`

const StyledMainBlockText = styled.div `
    margin-top: 48px;
    margin-left: 80px;
    padding-bottom: 78px;
    font-weight: 300;
    font-size: 25px;
    line-height: 160%;

    color: var(--white);
`

const StyledBg = styled.div `
    position: relative;
    top: -825.5px;
    left: 880px;
    width: 960px;
    height: 800px;
    filter: brightness(60%);
`

const Main = (): JSX.Element => {
  return (
      <StyledMainBlock>
          <StyledMainBlockBody>
              <Border>
                <StyledBreadcrumbs>
                    <StyleBreadcrumbsLink>Главная</StyleBreadcrumbsLink>
                    <StyledArrow><Image src='/arrow.svg' width={6.36} height={11.31} alt='стрелка'/></StyledArrow>
                    <StyleBreadcrumbsLink>Компания</StyleBreadcrumbsLink>
                </StyledBreadcrumbs>
                <StyledTitle>Компания</StyledTitle>
              </Border>
            <StyledMainBlockText>Основная сфера деятельности «ПензГидромаш» — <br/> создание систем для нефтяной, газовой, химической<br/> и нефтехимической сфер промышленности.</StyledMainBlockText>
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
          </StyledMainBlockBody>
      </StyledMainBlock>
  )
}

export default Main;