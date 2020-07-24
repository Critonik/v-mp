import styled, { StyledComponent } from 'styled-components';
import { defaultTheme, scrollStyles } from '../../defaultTheme';
import { device } from '../../GlobalStyles/mediaBreakpoints';
import { Link } from 'react-router-dom';
import arrow from '../../icons/arrow.svg';

interface IInputWrapper {
    icon: string;
}

export const DonatePageBody = styled.span`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    & > header {
        height: auto !important;
        max-height: none !important; 
        background: transparent;
    }
`;

export const DonatePageWrap = styled.div`
    height: 100%;
    width: 100%;
    margin: 0 auto;
    max-width: 1920px;
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 1080px;
    justify-content: center;
    align-items: center;
    
    ${scrollStyles}
 
    @media ${device.desktop} {
      justify-content: space-around;
      align-items: flex-start;
    }
`;

export const DonateFormWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    max-width: 1568px;
    
    @media ${device.laptop} {
        justify-content: flex-start;
    }
`;

export const BackImage = styled.img`
    position: absolute;
    top: 20px;
    right: 0;
    opacity: 0.3;
    max-height: 1300px;
    background-repeat: no-repeat;
    background-size: contain;
    z-index: -1;
    @media ${device.desktop} {
        opacity: 1;
    }
`;

export const DonateHeader = styled('h2')`
    font: ${defaultTheme.font.headerBoldText};
    color: ${defaultTheme.violet};
    text-align: left;
    position: relative;
    margin: 0;

    font-weight: bold;
    
    @media ${device.tabletM} {
        font-size: 48px;
        line-height: 59px;
    }
`;

export const Button = styled.button`
     background: linear-gradient(259.23deg, #4E8EF3 1.27%, #AD58F9 102.05%);
     border: 1px solid transparent;
     border-radius: 8px;
     display: flex;
     align-items: center;
     justify-content: center;
     z-index: 10;
     padding: 27px 0;
     height: 84px;
     width: 100%;
     margin-top: 32px;
     &:disabled {
        opacity: 0.5;
     }
     
     @media ${device.tabletM} {
        min-width: 472px;
     }
     
     @media ${device.desktop} {
        max-width: 472px;
     }
`;

export const ButtonText = styled.div`
     position: relative;
     text-align: left;
     font: ${defaultTheme.font.headerText};
     font-weight: normal;
     color: ${defaultTheme.white_main};
`;

export const DonateForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: 700px;
    max-width: 560px;
    align-items: flex-start;
    width: 100%;
    
    @media ${device.tabletM} {
        margin-left: 50px;
    }
    
    @media ${device.laptop} {
        width: auto;
    }
`;

export const LinkToMainPage = styled(Link)`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border: 1px solid #000;
    border-radius: 9px;
    box-sizing: border-box;
    padding: 8px 0;
    min-height: 37px;
    width: 202px;
    margin-bottom: 12px;
    
    &:link {
      color: ${defaultTheme.black_color};
    }
    &:visited {
        color: ${defaultTheme.black_color};
    }
`;

export const LinkText = styled.span`
    position: relative;
    color: #000;
    font: ${defaultTheme.font.headerTextLaptop};
    text-align: right;
    width: 133px;
    &:before {
        position: absolute;
        content: '';
        top: 6px;
        left: 0;
        background-image: url(${arrow});
        background-repeat: no-repeat;
        background-position: center;
        width: 30px;
        height: 13px;
    }
`;

export const TextInstruction = styled.div`
    font: ${defaultTheme.font.headerText};
    font-weight: normal;
    color: #25282B;
    font-size: 14px;
    line-height: 19px;
    
    @media ${device.tabletM} {
        font-size: 24px;
        line-height: 29px;
    }
`;

export const SelectWrapper: StyledComponent<any, IInputWrapper> = styled.div <IInputWrapper>` 
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-top: 32px;
    width: 100%;
    
    &:after {
        position: absolute;
        content: '';
        cursor: pointer;
        width: 30px;
        height: 30px;
        right: 20px;
        top: 30px;
        background-image: url(${props => props.icon ? props.icon: ''});
        background-repeat: no-repeat;
        background-position: center;
    }
    
    @media ${device.laptop} {
        width: auto;
    }
`;

export const SelectInput = styled.input`
    font: ${defaultTheme.font.headerText};
    color: #000;
    padding: 27px 0 27px 27px;
    height: 84px;
    width: 100%;
    border: 0.801155px solid #000000;
    box-sizing: border-box;
    border-radius: 8.01155px;
    background: transparent;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    &[type='number'] {
        -moz-appearance: textfield;
    }
    @media ${device.laptop} {
        width: auto;
        min-width: 472px;
        max-width: 472px;  
    }
`;


export const SelectOptionWrapper = styled.div`
    position: absolute;
    top: 80px;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 100;
    background-color: #4E8EF3;
    width: 100%;
`;


export const SelectOption = styled.div`
    font: ${defaultTheme.font.headerText};
    color: #000;
    padding: 27px 0 27px 27px;
    height: 84px;
    min-width: 472px;
    max-width: 472px;
    box-sizing: border-box;
    text-align: left;
    cursor: pointer;
`;

export const RuleLink = styled.a`
    text-decoration-line: underline;
    color: #000000;
    font: ${defaultTheme.font.licenseKey};
    text-align: left;
    padding: 12px 0;
    width: 330px;
    &:link {
        color: #000000;
    }
    &:visited {
        color: #000000;
    }
    
    @media ${device.laptop} {
      margin-left: 65px;
      text-align: center;
    }
`;
