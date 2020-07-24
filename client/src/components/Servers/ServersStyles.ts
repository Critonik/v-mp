import styled, { keyframes, StyledComponent } from 'styled-components';
import { defaultTheme, scrollStyles } from '../../defaultTheme';
import { device } from '../../GlobalStyles/mediaBreakpoints';


interface IHeaderProps {
    img: string;
    iconWidth: string;
    iconHeight: string;
}
const blockHeight = document.documentElement.clientHeight;

export const ServerSectionWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: relative;
    max-width: 1520px;
    margin: 0 auto;
    ${scrollStyles};
    padding-top: 48px;
    box-sizing: border-box;
    
    @media ${device.laptop} {
        height: ${blockHeight}px;
        max-height: ${blockHeight}px;
    }
`;


export const ServerHeader = styled.h2`
    font: ${defaultTheme.font.linkText};
    color: ${defaultTheme.black_color};
    text-align: center;
    position: relative;
    margin: 0 auto 30px;
    max-width: 730px;
    font-size: 21px;
    line-height: 24px;
    &:before {
        position: absolute;
        content: 'Список серверов';
        top: -12px;
        left: 0px;
        width: 100%;
        height: 100%;
        -webkit-text-stroke: 0.5px  #AD58F9;
        opacity: 0.3;
        color: transparent;
    }
    &:after {
      position: absolute;
      content: '';
      height: 7px;
      bottom: -2px;
      left: 0;
      width: 30%;
      background-color: #AD58F9;
    }
    @media ${device.tabletM} {
        font-size: 72px;
        line-height: 88px;
    }
`;

export const ServersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-height: 376px;
    
    @media ${device.laptop} {
        height: 100%;
    }
    @media ${device.desktop} {
        flex-direction: row;
    }
`;

export const CurrentServerWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin-bottom: 30px;
    min-width: 292px;
    position: relative;
    
    @media ${device.tabletM} {
        min-width: 592px;
    }
`;

export const ServerRow = styled.div`
     display: flex;
     justify-content: flex-start;
     margin-bottom: 19px;
     align-items: center;
`;

export const ServerNum = styled.div`
    background: linear-gradient(129.95deg, #AD58F9 0%, #4E8EF3 100.54%);
    font: ${defaultTheme.font.linkText};
    color: ${defaultTheme.white_main};
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    height: 34px;
    width: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 13px;
    margin-right: 35px;
    
    @media ${device.tabletM} {
        font-size: 64px;
        line-height: 78px;
        height: 108px;
        width: 108px;
    }
`;

export const ServerNameWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    justify-content: space-between;
    min-height: 111px;
`;

export const ServerName: StyledComponent<any, IHeaderProps> = styled('h3') <IHeaderProps>`
    font: ${defaultTheme.font.headerBoldText};
    font-size: 22px;
    line-height: 26px;
    margin: 0;
    &:after {
        position: absolute;
        right: 0;
        top: 2px;
        content: '';
        width: 58px;
        height: 42px;
        background-image: url(${props => props.img});
        background-repeat: no-repeat;
        background-position: center;
    }
    
    @media ${device.tabletM} {
        font-size: 48px;
        line-height: 59px;
        &:after {
            right: -60px;
        }
    }
`;

export const PlayerCount = styled.p`
    font: ${defaultTheme.font.headerBoldText};
    line-height: 16px;
    font-size: 19px;
    color: #000;
    margin: 0 0 10px;
    @media ${device.tabletM} {
      line-height: 24px;
      font-size: 29px;
    }
`;

export const ProgressBar = styled.div`
    height: 17px;
    width: 257px;
    background: rgba(223, 223, 223, 0.41);
    border-radius: 5px;
    position: relative;
    
    @media ${device.tabletM} {
        width: 447px;
    }
    
`;

const animations = keyframes`
    0% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0 50%;
    }
`

export const Progress = styled.div`
    position: absolute;
    background: linear-gradient(273.61deg, #4E8EF3 -3.22%, #AD58F9 105.85%);
    background-size: 200% 200%;
    border-radius: 5px;
    height: 17px;
    animation: ${animations} 3.4s ease infinite;  
`;


export const ConnectButton = styled.button`
    border-radius: 7px;
    border: 1px solid #AD58F9;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    font: ${defaultTheme.font.headerText};
    font-weight: normal;
    color: #000;
    cursor: pointer;
`;

export const MiddleLine = styled.div`
    background-color: #AD58F9;
    height: 1px;
    width: 100%;
    margin-bottom: 10px;
    
    @media ${device.desktop} {
        margin-bottom: 0;
        height: 0.5px;
        width: 177px;
        transform: rotate(90deg);
        background-color: #AD58F9;
        background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='7' ry='7' stroke='white' stroke-width='2' stroke-dasharray='6%2c 14' stroke-dashoffset='63' stroke-linecap='round'/%3e%3c/svg%3e");
    }
`;


