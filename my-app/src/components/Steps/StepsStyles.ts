import styled, { StyledComponent } from 'styled-components';
import { defaultTheme, scrollStyles } from '../../defaultTheme';
import { device } from '../../GlobalStyles/mediaBreakpoints';
import playWhite from '../../icons/playWhite.svg';

interface IHeaderProps {
    count: string;
}

interface IButtonProps {
    icon: string;
}

export const StepsWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
    max-width: 1920px;
    margin: 0 auto;
    ${scrollStyles};
    padding-top: 48px;
`;

export const StepsGuy = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.5;
    @media ${device.desktop} {
      opacity: 1;
    }
`;

export const StepsHeader = styled.h2`
    font: ${defaultTheme.font.linkText};
    font-size: 72px;
    line-height: 88px;
    color: ${defaultTheme.black_color};
    text-align: center;
    position: relative;
    margin: 0 auto 152px;
    max-width: 730px;
    flex: 1 1 auto;
    &:before {
        position: absolute;
        content: 'Как начать играть?';
        top: -12px;
        width: 100%;
        height: 100%;
        -webkit-text-stroke: 0.5px  #AD58F9;
        opacity: 0.3;
        color: transparent;
        right: 0;
    }
    &:after {
      position: absolute;
      content: '';
      height: 7px;
      bottom: -2px;
      right: 0;
      width: 30%;
      background-color: #AD58F9;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    height: 100%;
    max-width: 1350px;
`;

export const CardWrapper = styled.div`
    display: flex;
    border-radius: 19.9604px;
    border: 1px solid #AD58F9;
    justify-content: space-between;
    text-align: left;
    padding: 20px 26px;
    margin-left: 92px;
    margin-bottom: 75px;
    max-width: 508px;
    
    .step-one {
       font: ${defaultTheme.font.headerText};
       color: ${defaultTheme.black_color};
       margin-bottom: 2px;
    }
    .step-two {
       font: ${defaultTheme.font.licenseKey};
       color: ${defaultTheme.black_color};
       text-decoration: underline;
    }
`;

export const StepWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
`;

export const StepHeader: StyledComponent<any, IHeaderProps> = styled('h2') <IHeaderProps>`
    font: ${defaultTheme.font.headerBoldText};
    color: ${defaultTheme.violet};
    text-align: left;
    position: relative;
    margin: 0 0 10px;
   
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

export const DownloadButton: StyledComponent<any, IButtonProps> = styled('button') <IButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    font: ${defaultTheme.font.licenseKey};
    font-weight: bold;
    border: 1px solid ${defaultTheme.black_color};
    border-radius: 6px;
    background-color: transparent;
    padding: 13px 0 13px 0;
    margin-top: 10px;
    cursor: pointer;
`;

export const StepButtonText: StyledComponent<any, IButtonProps> = styled('a') <IButtonProps>`
    text-align: center;
    position: relative;
    text-decoration: none;
    color: #171717;
    display: flex;
    padding-right: 36px;
    padding-left: 19px;
    &:link {
        color: #171717;
        text-decoration: none;
    }
    &:after {
        position: absolute;
        content: '';
        background-image: url(${props => props.icon});
        background-repeat: no-repeat;
        background-position: center;
        top: 1px;
        right: 13px;
        width: 22px;
        height: 21px;
    }
`;


export const Button = styled.button`
     background: ${defaultTheme.violet_gradient};
     border: 1px solid transparent;
     border-radius: 13.9457px;
     height: 71px;
     display: flex;
     align-items: center;
     padding: 20px 50px 20px 30px;
     z-index: 10;
     margin-left: 92px;
     cursor: pointer;
`;

export const ButtonText = styled.div`
     display: flex;
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
           top: 0px;
           right: -40px;
           background-image: url(${playWhite});
           background-position: center;
           background-repeat: no-repeat;   
        }
`;