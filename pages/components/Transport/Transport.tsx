import React, { useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import { onTableWidth } from "../../../styles/breakpoint.css";
import Container from "../Container/Container";

const StyledTransportTitle = styled.h2 `
    margin-top: 136px;
    margin-bottom: 48px;
    flex: 0 0 30%;
    position: relative;
    font-weight: 300;
    font-size: 47px;
    line-height: 150%;
    color: var(--primary);

    ${onTableWidth} {
        font-size: 25px;
        line-height: 160%;
        margin-left: 31px;
    }
`

const StyledTransportContainer = styled.div `
    display: flex;
    justify-content: space-between;
`

const StyledWrapper = styled.div `
    display: flex;
    flex-direction: column;
`

const TransportInfo = styled.div `
    padding-top: 80px;
    margin-left: -132px;
    padding-left: 132px;
    height: 310px;
    width: 960px;
    cursor: pointer;

    &:hover{background-color: #E5E5E5;}

    ${onTableWidth} {
        margin-left: 0px;
    }
`

const StyledTitle = styled.h3 `
    font-weight: 300;
    font-size: 25px;
    line-height: 160%;

    ${onTableWidth} {
        font-weight: normal;
        font-size: 16px;
    }
`

const StyledText = styled.div `
    margin-top: 19px;
    font-weight: 300;
    font-size: 18px;
    line-height: 180%;

    ${onTableWidth} {
        font-size: 14px;
    }
`

const AutoImage = () => {
return <Image
    src='/truck.jpg'
    width={880}
    height={620}
    alt='грузовик'
    objectFit="cover"
    quality={100}/>
}

const TrainImage = () => {
    return <Image
    src='/tanks.jpg'
    width={880}
    height={620}
    alt='грузовик'
    objectFit="cover"
    quality={100}/>
}


const Transport = (): JSX.Element => {
    const [imageType, setImageType] = useState('auto')
    const images: {[key: string]: () => JSX.Element} = {
        auto: AutoImage,
        train: TrainImage
    }
    const TransportImage = images[imageType];

    const hoverHandler = (type: string) => {
      setImageType(type);
    }

    return (
        <>
        <Container>
            <StyledTransportTitle>Транспорт</StyledTransportTitle>
        </Container>
        <StyledTransportContainer>
            <TransportImage/>
            <StyledWrapper>
                <TransportInfo onMouseEnter={() => hoverHandler('auto')}>
                    <StyledTitle>Автотранспорт</StyledTitle>
                        <StyledText>— Собственная автотранспортная компания</StyledText>
                        <StyledText>— Перевозка негабаритных и тяжеловесных грузов</StyledText>
                        <StyledText>— Доставка в любую точку России</StyledText>
                </TransportInfo>
                <TransportInfo onMouseEnter={() => hoverHandler('train')}>
                    <StyledTitle>Железнодорожный<br/> транспорт</StyledTitle>
                    <StyledText>На заводе имеется ж/д ветка, заходящая в производственное здание</StyledText>
                </TransportInfo>
            </StyledWrapper>
        </StyledTransportContainer>
        </>
    )
}

export default Transport;