import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";

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
const TextContainer = styled.div `
    display: flex;
    flex-direction: column;
    flex: 0 0 50%;
    padding-left: 70px;
`

const StyledParagraph = styled.div `
    margin-bottom: 20px;
    font-weight: normal;
    font-size: 18px;
    line-height: 180%;
    color: var(--light-black);

`
const StyledText = styled.div `

    font-weight: 300;
    font-size: 18px;
    line-height: 180%;
`

const About = (): JSX.Element => {
    return (
        <>
        <StyledAboutContainer>
            <StyledAboutTitle>О нас</StyledAboutTitle>
            <StyledAboutText>
            Наша цель — взаимовыгодное сотрудничество на основе долгосрочных контрактов.<br /> Мы представлены на рынке с 2006 года и не перестаем развиваться, совершенствовать качество<br /> своих услуг, оптимизировать затраты для снижения стоимости продукции.
                </StyledAboutText>
        </StyledAboutContainer>
        <StyledAboutBlock>
            <Image src='/pipes.jpg' width={880} height={580} alt='трубопровод'/>
            <TextContainer>
                <StyledParagraph>
                    Выполняем все работы по проектированию систем, закупке необходимых материалов,<br/> производству, установке, наладке, гарантийному и внегарантийному обслуживанию.<br/> Уникальный парк оборудования позволяет находить решения для любых производственных задач клиентов.
                </StyledParagraph>
                <StyledText>
                Также мы берем на себя все сложности, связанные с сертификацией нестандартного<br/>
                оборудования. В этом процессе принимают участие инженеры и юристы с многолетним<br/>
                опытом работы. Клиенты получают все нужные документы для того, чтобы использование оборудования было полностью законным.<br/>
                <br/>
                Выпускаемая нашей компанией продукция разрешена к применению Ростехнадзором.<br/>
                На производстве внедрен жесткий менеджмент качества — по международному стандарту<br/> ГОСТ Р ИСО 9001.
                </StyledText>
            </TextContainer>
        </StyledAboutBlock>
        </>
    )
}

export default About;