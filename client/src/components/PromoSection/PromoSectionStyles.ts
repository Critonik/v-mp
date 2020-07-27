import styled, { StyledComponent } from 'styled-components';
import { defaultTheme, scrollStyles } from '../../defaultTheme';
import { device } from '../../GlobalStyles/mediaBreakpoints';
import joystick from '../../icons/joystick.svg';
import copy from '../../icons/copy.svg';


interface IImageProps {
    backImg: string;
    tabletImage: string;
}

interface IButtonProps {
    backcolor: string;
    bordercolor: string;
    minheight: string;
    padding: string;
    margin: string;
}


export const SliderSection: StyledComponent<any, IImageProps> = styled('section') <IImageProps>`
    height: 100%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: space-around;
    ${scrollStyles}
 
    
    @media ${device.desktop} {
        background-image: url(${props => props.tabletImage});
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: right top;
        justify-content: space-around;
        align-items: flex-start;
        &:before {
            display: none;
        }
        
        & > div#mainprlx {
            display: none;
        }
    }
   
`;

export const SlideWrapper = styled.div`
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    display: none;
    align-items: center;
    position: relative;
    box-sizing: border-box;
    padding: 0 20px;
    &[data-visible = 'true'] {
        display: flex;
    }
    
    @media ${device.laptop} {
        justify-content: flex-start;
        width: 1200px;
        position: static;
        margin: 0 auto;
    }
    
    @media ${device.desktop} {
        margin: 0;
    }
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    z-index: 100;
    @media ${device.tabletM} {
        align-items: flex-start;
    }
    @media ${device.laptop} {
        margin-left: 85px;
        align-items: flex-end;
    }
    @media ${device.desktop} {
        margin: auto 175px;
        align-items: flex-start;
    }
`;

export const SlideInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: inherit;
`;

export const SlideHeader: StyledComponent<any, any> = styled('h2')`
    font: ${defaultTheme.font.headerBoldText};
    color: ${defaultTheme.violet};
    text-align: left;
    position: relative;
    margin: 0 0 10px;
    @media ${device.laptop} {
        font-size: 72px;
        line-height: 88px;
        font-weight: bold;
        &:before {
          top: 40px;
        }
        &:after {
            font-size: 144px;
            line-height: 176px;
            font-weight: bold;
            top: -50px;
        }
    }
    
        @media ${device.tabletM} {
        font-size: 64px;
        line-height: 88px;
        &:before {
            left: -49px;
            top: 7px;
            width: 21px;
            height: 21px;
        }
        &:after {
           left: -11px;
           top: -36px;
           font-size: 128px;
           line-height: 157px;
           width: 10px;
           height: 38px;
        }
    }
    
    @media ${device.laptop} {
        font-size: 72px;
        line-height: 88px;
        font-weight: bold;
        &:before {
          top: 40px;
        }
        &:after {
            font-size: 144px;
            line-height: 176px;
            font-weight: bold;
            top: -50px;
        }
    }
`;

export const SlideText = styled.div`
    font: ${defaultTheme.font.headerText};
    font-size: 14px;
    line-height: 19px;
    font-weight: normal;
    text-align: left;
    max-width: 500px;
    padding-bottom: 40px;
    @media ${device.laptop} {
        font-size: 24px;
        line-height: 29px;
        max-width: 797px;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 193px;
    max-width: 790px;
    position: relative;
    
    @media ${device.laptop} {
         flex-direction: row;
         align-items: center;
         align-self: flex-start;
     }
`;


export const Button: StyledComponent<any, IButtonProps> = styled('button') <IButtonProps>`
     background: ${props => props.backcolor ? props.backcolor : defaultTheme.violet_gradient};
     border: 1px solid ${props => props.bordercolor ? props.bordercolor : 'transparent'};
     border-radius: 13.9457px;
     display: flex;
     justify-content: center;
     align-items: center;
     cursor: pointer;
     z-index: 10;
     width: 280px;
     height: ${props => props.minheight ? props.minheight : '89px'};
     align-self: flex-start;
     outline: none;
     @media ${device.laptop} {
          transform: translateY(-40%);
          align-self: inherit;
     }
`;

export const ButtonText = styled.div`
     position: relative;
     text-align: left;
     left: -20px;
     font ${defaultTheme.font.headerText};
     font-weight: normal;
     color: ${defaultTheme.white_main};
        &:after {
           position: absolute;
           content: '';
           width: 31px;
           height: 31px;
           top: -3px;
           right: -40px;
           background-image: url(${joystick});
           background-position: center;
           background-repeat: no-repeat;   
        }
`;

export const CopyPromoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 500px;
   margin-bottom: 10px;
`;

export const PromoInstruction = styled.p`
    margin: 0 0 8px 0;
    text-align: left;
    color: #000;
    font: ${defaultTheme.font.headerText};
    font-weight: 600;
    
    @media ${device.tabletM} {
        width: 447px;
    }
`;

export const InputWrapper = styled.span`
    margin-bottom: 8px;
    height: 64px;
    position: relative;
    &:focus {
        outline: none;
    }
    &:after {
        position: absolute;
        content: '';
        width: 59px;
        height: 100%;
        cursor: pointer;
        top: 0px;
        right: -59px;
        border: 1px solid #000000;
        box-sizing: border-box;
        border-radius: 0px 10px 10px 0px;
        background-image: url(${copy});
        background-position: center;
        background-repeat: no-repeat;
    }
`;

export const PromoField = styled.input`
    width: 262px;
    padding: 16px 0;
    height: 100%;
    display: flex;
    font: ${defaultTheme.font.headerText};
    font-weight: 600;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: transparent;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 10px 0 0 10px;
    
    @media ${device.tabletM} {
        width: 352px;
    }
`;

export const PromoDesc = styled.div`
    text-align: left;
    color: rgba(0, 0, 0, 0.7);
    font: ${defaultTheme.font.headerText};
    font-weight: normal;
`;