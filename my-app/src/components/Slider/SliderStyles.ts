import styled, { StyledComponent, css } from 'styled-components';
import { defaultTheme } from '../../defaultTheme';
import { device } from '../../GlobalStyles/mediaBreakpoints';
import joystick from '../../icons/joystick.svg';
import play from '../../icons/play.svg';
import gun from '../../icons/gun.svg';

interface IHeaderProps {
    count: string;
}

interface IImageProps {
    backImg: string;
    imageArr: string[];
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
    max-width: 1920px;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 5% 0 0 0;
    
    @media ${device.desktop} {
      justify-content: space-around;
    }
`;


export const SlideWrapper = styled.div`
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    display: none;
    flex: 1 1 100%;
    align-items: center;
    max-height: 470px;
    &[data-visible = 'true'] {
        display: flex;
    }
    
    @media ${device.laptop} {
        justify-content: flex-start;
    }
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    @media ${device.laptop} {
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

export const SlideImage = styled.img`
    display: block;
    position: absolute;
    top: 110px;
    right: 0;
    opacity: 0.5;
    max-height: 1300px;
    @media ${device.desktop} {
        opacity: 1;
    }
`;

export const SlideHeader: StyledComponent<any, IHeaderProps> = styled('h2') <IHeaderProps>`
    font: ${defaultTheme.font.headerBoldText};
    color: ${defaultTheme.violet};
    text-align: left;
    position: relative;
    margin: 0 0 10px;
    
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
       top: 0;
       content: '${props => String(props.count)}';
       font: ${defaultTheme.font.headerBoldText};
       font-size: 41px;
       color: #EEEEEE;
       width: 10px;
       height: 38px;
    }
    @media ${device.laptop} {
        line-height: 48px;
        &:before {
            width: 31px;
            height: 31px;
        }
        &:after {
            font-size: 78px;
            line-height: 136px;
            top: -50px;
        }
    }
    @media ${device.desktop} {
        font-size: 72px;
        line-height: 88px;
        &:before {
          top: 32px;
        }
        &:after {
            font-size: 144px;
            line-height: 176px;
        }
    }
`;

export const SlideText = styled.div`
    font: ${defaultTheme.font.headerText};
    font-size: 15px;
    line-height: 19px;
    font-weight: normal;
    text-align: left;
    max-width: 500px;
    padding-bottom: 40px;
    @media ${device.laptop} {
        font-size: 24px;
        line-height: 29px;
    }
`;

export const HiddenInput = styled.input`
    display: none;
`;

export const LabelControlsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 180px;
    justify-content: space-around;
    margin: 0 auto;
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
    align-items: flex-start;
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
     height: 45px;
     display: flex;
     align-items: center;
     padding: 10px 60px 10px 20px;
     margin: 0 0 30px 0;
     z-index: 10;
     @media ${device.laptop} {
         margin: ${props => props.margin ? props.margin : ' 0 27px 0 0'};
         padding: 10px 60px 10px 15px;
         height: 65px;
     }
     @media ${device.desktop} {
         margin: ${props => props.margin ? props.margin : ' 0 27px 0 0'};
         padding: ${props => props.padding ? props.padding : '30px 111px 30px 69px'};
         height: ${props => props.minheight ? props.minheight : '89px'};
     }
`;

export const ButtonText = styled.div`
     position: relative;
     text-align: left;
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

export const ButtonVideoText = styled.div`
     position: relative;
     text-align: left;
     font ${defaultTheme.font.sectionMontserratText};
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