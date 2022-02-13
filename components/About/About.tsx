import React from "react";
import Image from "next/image";
import styled from "styled-components";

const StyledAboutContainer = styled.div `
    display: flex;
    align-items: flex-start;
`

const StyledAboutTitle = styled.h2 `
    margin-top: 136px;
    flex: 0 0 30%;
    position: relative;
    font-weight: 300;
    font-size: 47px;
    line-height: 150%;
    color: var(--primary);
`
const StyledAboutText = styled.div `
    margin-top: 158px;
    font-weight: 300;
    font-size: 25px;
    line-height: 160%;
    color: var(--primary);

`
const StyledAboutBlock = styled.div `
    display: flex;
    justify-content: space-between;
    margin-top: 125px;
    margin-left: -80px;
`

const StyledParagraph = styled.div `
    font-weight: normal;
    font-size: 18px;
    line-height: 180%;
    color: var(--light-black);

    flex: 0 0 40%;
`

const About = (): JSX.Element => {
    return (
        <>
        <StyledAboutContainer>
            <StyledAboutTitle>О нас</StyledAboutTitle>
            <StyledAboutText>Наша цель — взаимовыгодное сотрудничество на основе долгосрочных контрактов.<br /> Мы представлены на рынке с 2006 года и не перестаем развиваться, совершенствовать качество<br /> своих услуг, оптимизировать затраты для снижения стоимости продукции.</StyledAboutText>
        </StyledAboutContainer>
        <StyledAboutBlock>
            <Image src='/pipes.jpg' width={800} height={580} alt='трубопровод'/>
            <StyledParagraph>
                Выполняем все работы по проектированию систем, закупке необходимых материалов, производству, установке, наладке, гарантийному и внегарантийному обслуживанию. Уникальный парк оборудования позволяет находить решения для любых производственных задач клиентов.
            </StyledParagraph>
        </StyledAboutBlock>
        </>
    )
}

export default About;