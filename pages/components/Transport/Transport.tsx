import React, { useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";

const StyledTransportTitle = styled.h2 `
    margin-top: 136px;
    margin-bottom: 48px;
    flex: 0 0 30%;
    position: relative;
    font-weight: 300;
    font-size: 47px;
    line-height: 150%;
    color: var(--primary);
`

const StyledTransportContainer = styled.div `
    display: flex;
    justify-content: space-between;
    margin-left: -80px;
`

const StyledWrapper = styled.div `
    display: flex;
    flex-direction: column;
`

const TransportInfo = styled.div `
    padding-top: 90px;
    margin-left: -132px;
    padding-left: 132px;
    height: 310px;
    width: 960px;
    cursor: pointer;

    &:hover{background-color: #E5E5E5;}
`

const StyledTitle = styled.h3 `
    font-weight: 300;
    font-size: 25px;
    line-height: 160%;
`

const StyledText = styled.div `
    margin-top: 19px;
    font-weight: 300;
    font-size: 18px;
    line-height: 180%;
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
        <StyledTransportTitle>Транспорт</StyledTransportTitle>

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