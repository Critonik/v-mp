import styled from 'styled-components';
import square from '../../icons/square.svg'
import { defaultTheme, scrollStyles } from '../../defaultTheme';
import { device } from '../../GlobalStyles/mediaBreakpoints';
const blockHeight = document.documentElement.clientHeight;

export const NewsBlockSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    background-image: url(${square});
    background-position: center;
    background-size: cover;
    padding: 54px 0 161px;
    box-sizing: border-box;
    .news-image {
        display: none;
        width: 281px;
        height: 241px;
    }
    
 @media ${device.laptop} {
        height: ${blockHeight}px;
        max-height: ${blockHeight}px;
        .news-image {
            display: block;
        }
    }
`;

export const NewsHeader = styled.h2`
    font: ${defaultTheme.font.linkText};
    font-size: 21px;
    line-height: 24px;
    color: ${defaultTheme.black_color};
    text-align: center;
    position: relative;
    margin: 0 auto 103px;
    max-width: 350px;
    flex: 1 1 auto;
    &:before {
        position: absolute;
        content: 'Новости';
        top: -12px;
        left: 0;
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
        max-height: 90px;
    }
`;

export const NewsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
`;

export const OneNewsWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    max-width: 1552px;
    align-items: center;
    margin-bottom: 35px;
    max-height: 241px;
    
    &:last-of-type {
        margin-bottom: 29px;
    }
`;

export const InnerOneNewsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    border: 1px solid #AD58F9;
    position: relative;
    &:before {
        height: 2px;
        transform: rotate(90deg);
        min-width: 241px;
        background: ${defaultTheme.violet_gradient};
        flex: 1 1 100%;
        position: absolute;
        left: -150px;
        content: '';
    }
    
    @media ${device.tabletM} {
        margin-left: 31px;
    }
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 17px;
    max-height: 205px;
    min-height: 205px;
    overflow: auto;
    ${scrollStyles}
`;

export const HeadAndDateWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 17px;
`;

export const OneNewsHead = styled.h3`
    margin: 0;
    font: ${defaultTheme.font.linkText};
    color: #AD58F9;
    text-align: left;
    
    @media ${device.tabletM} {
        font-size: 36px;
        line-height: 44px;
    }
`;

export const DateField = styled.div`
    display: flex;
    align-items: center;
    padding: 3px 22px;
    font: ${defaultTheme.font.licenseKey};
    color: #000;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 17px;
    
    @media ${device.tabletM} {
        padding: 6px 33px;
    }
`;

export const NewsText = styled.div`
   text-align: left;
   width: 100%;
   font: ${defaultTheme.font.headerText};
   font-weight: normal;
   color: #171717;
   max-width: 1184px;
`;

export const NewsLink = styled.a`
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #000000;
    border-radius: 6px;
    font: ${defaultTheme.font.headerText};
    font-weight: normal;
    cursor: pointer;
    color: #000;
    &:link {
    color: #000;
    }
`;
