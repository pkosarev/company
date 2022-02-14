import React from "react";
import styled from 'styled-components';
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
    flex: 0 0 40%;
    display: flex;
    flex-direction: column;
`

const AutotransportSection = styled.div `
    padding-top: 90px;
    margin-left: -132px;
    padding-left: 132px;
    height: 310px;
    width: 960px;
    cursor: pointer;

    &:hover{background-color: #E5E5E5;}
`

const AutotransportList = styled.ul `
    margin-top: 19px;
`

const AutoTransportItem = styled.li `
    font-weight: 300;
    font-size: 18px;
    line-height: 180%;
`

const StyledTitle = styled.h3 `
    font-weight: 300;
    font-size: 25px;
    line-height: 160%;
`

const TrainSection = styled.div `
    cursor: pointer;
    margin-left: -132px;
    padding-left: 132px;
    padding-top: 90px;
    height: 310px;
    width: 960px;

    &:hover{background-color: #E5E5E5;}
`

const TrainText = styled.div `
    margin-top: 19px;
    font-weight: 300;
    font-size: 18px;
    line-height: 180%;
`


const Transport = (): JSX.Element => {
    return (
        <>
        <StyledTransportTitle>Транспорт</StyledTransportTitle>

        <StyledTransportContainer>
            <Image src='/truck.jpg' width={880} height={620} alt='грузовик'/>
            <StyledWrapper>
            <AutotransportSection>
                <StyledTitle>Автотранспорт</StyledTitle>
                <AutotransportList>
                    <AutoTransportItem>— Собственная автотранспортная компания</AutoTransportItem>
                    <AutoTransportItem>— Перевозка негабаритных и тяжеловесных грузов</AutoTransportItem>
                    <AutoTransportItem>— Доставка в любую точку России</AutoTransportItem>
                </AutotransportList>
            </AutotransportSection>
            <TrainSection>
                <StyledTitle>Железнодорожный<br/> транспорт</StyledTitle>
                <TrainText>На заводе имеется ж/д ветка, заходящая в производственное здание</TrainText>
            </TrainSection>
            </StyledWrapper>
        </StyledTransportContainer>
        </>
    )
}

export default Transport;