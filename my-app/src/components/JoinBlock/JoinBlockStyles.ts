import styled, { StyledComponent } from 'styled-components';
import { defaultTheme } from '../../defaultTheme';
import { device } from '../../GlobalStyles/mediaBreakpoints';

interface ISocialImage {
    socialColor: string;
}

export const JoinBlockSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    background-color: #FBFBFB;
    padding: 43px 0 83px;
    min-height: 621px;
`;

export const JoinBlockWrapper = styled.div`
    max-width: 1082px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const JoinHeader = styled.h2`
    font: ${defaultTheme.font.linkText};
    font-size: 72px;
    line-height: 88px;
    color: ${defaultTheme.black_color};
    text-align: center;
    position: relative;
    margin: 0 auto 55px;
    flex: 1 1 auto;
    &:before {
        position: absolute;
        content: 'Присоединяйтесь к нам';
        top: -12px;
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
      right: 0;
      width: 40%;
      background-color: #AD58F9;
    }
`;


export const SocialWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    @media ${device.laptop} {
        flex-direction: row;
        min-width: 1082px;
    }
`;

export const OneSocialWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 176px;
    min-height: 333px;
`

export const SocialHead = styled.h3`
    margin: 0;
    text-align: center;
    font ${defaultTheme.font.sectionMontserratText};
    font-size: 36.4px;
    line-height: 44px;
    color: #000;
`;


export const SocialImageWrapper: StyledComponent<any, ISocialImage> = styled.div <ISocialImage>`
    position: relative;
    border: 1.62779px solid ${props => props.socialColor};
    box-sizing: border-box;
    border-radius: 19.5334px;
    width: 100%;
    min-height: 175px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const SubscribeButton = styled.a`
    text-decoration: none;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 8.80991px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 177px;
    font: ${defaultTheme.font.headerTextLaptop};
    color: #000;
    padding: 7px 0;
`;

