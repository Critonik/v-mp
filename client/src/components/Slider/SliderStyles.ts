import styled, { StyledComponent } from 'styled-components';
import { defaultTheme, scrollStyles } from '../../defaultTheme';
import { device } from '../../GlobalStyles/mediaBreakpoints';
import joystick from '../../icons/joystick.svg';
import play from '../../icons/play.svg';
import gun from '../../icons/gun.svg';

interface IHeaderProps {
    count: string;
}

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
    
  
    @media ${device.laptop} {
        justify-content: center;
    }
    
    @media ${device.desktop} {
        align-items: flex-start;
    }
    
    @media ${device.ultra} {
        background-image: url(${props => props.tabletImage});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: right top;
        &:before {
            display: none;
        }
    }
`;

export const TabletBackground = styled.div`
    background-repeat: no-repeat;
    background-position: center bottom;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background-size: 100%;
    
    @media ${device.laptop} {
        background-size: ${document.documentElement.clientHeight - 300}px;
    }
    
    @media ${device.desktop} {
        background-size: cover !important;
    }
    
    @media ${device.ultra} {
        display: none;
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
    @media ${device.laptop} {
        margin-left: 85px;
        align-items: flex-start;
    }
    @media ${device.desktop} {
        margin: auto 175px;
    }
`;

export const SlideInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: inherit;
`;

export const SlideHeader: StyledComponent<any, IHeaderProps> = styled('h2') <IHeaderProps>`
    font: ${defaultTheme.font.headerBoldText};
    color: ${defaultTheme.violet};
    text-align: left;
    position: relative;
    margin: 0 0 10px;
    font-size: 17px;
    line-height: 21px;
    &:before {
        position: absolute;
        content: '';
        left: -49px;
        top: 7px;
        width: 21px;
        height: 21px;
        border-radius: 50%;
        border: 1px ${defaultTheme.violet} solid;
        background-color: ${defaultTheme.violet};
    }
    &:after {
        z-index: -1;
        position: absolute;
        left: -11px;
        top: -13px;
        content: '${props => String(props.count)}';
        font: ${defaultTheme.font.headerBoldText};
        font-size: 32px;
        line-height: 44px;
        color: #EEEEEE;
        width: 10px;
        height: 38px;
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
        max-width: 900px;
    }
`;

export const LabelControlsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 180px;
    justify-content: space-around;
    margin: 0 auto;
    z-index: 100;
    
    @media ${device.laptop} {
        margin-bottom: 150px;
        margin-top: 0;
    }
    
    @media ${device.desktop} {
        margin-top: 5%;
        margin-bottom: 0;
    }
`;

export const SliderLabels = styled.label`
    cursor: pointer;
    display: inline-block;
    height: 1px;
    margin: 1px;
    position: relative;
    width: 25px;
    border-radius: 50%;
    transition: background ease-in-out 0.5s;
    
    &:after {
        border: 2px solid #AD58F9;
        background-color: #AD58F9;
        content: '';
        display: block;
        height: 15px;
        left: -4px;
        position: absolute;
        top: -4px;
        width: 15px;
        border-radius: 50%;
        box-sizing: border-box;
    }
    
    @media ${device.laptop} {
        &:after {
                height: 25px;
                width: 25px;
         }
    }
    &[data-checked = 'false'] {
            &:after {
                border: 2px solid #DFDFDF;
                background-color: #DFDFDF;
            }
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
     }
`;

export const GunBlock = styled.div`
    position: absolute;
        content: '';
        top: 0;
        left: -60px;
        background-image: url(${gun}), url(${gun}), url(${gun});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        transform: rotate(15.35deg);
        width: 125px;
        height: 71px;
        
        @media ${device.laptop} {
            left: -120px;
            width: 250px;
            height: 141px;  
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
`;

export const ButtonVideoText = styled.div`
     position: relative;
     text-align: left;
     font: ${defaultTheme.font.sectionMontserratText};
     font-size: 21px;
     line-height: 26px;
     font-weight: normal;
     color: ${defaultTheme.black_color};
        &:after {
           position: absolute;
           content: '';
           width: 21px;
           height: 21px;
           top: 3px;
           right: -28px;
           background-image: url(${play});
           background-position: center;
           background-repeat: no-repeat;   
        }
`;

export const ButtonText = styled.div`
     position: relative;
     text-align: left;
     font ${defaultTheme.font.headerText};
     font-size: 21px;
     font-weight: normal;
     color: ${defaultTheme.white_main};
     transform: translateX(-20px);
     @media ${device.laptop} {
        font-size: 24px;
     }
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
