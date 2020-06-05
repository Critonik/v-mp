import styled, { StyledComponent } from 'styled-components';
import { defaultTheme } from '../../defaultTheme';
import { device } from '../../GlobalStyles/mediaBreakpoints';

interface IHeaderProps {
    count: string;
}

interface IImageProps {
    backImg: string;
}

export const SliderSection : StyledComponent<any, IImageProps> = styled('section') <IImageProps>`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: url(${props => props.backImg});
    background-size: contain;
    background-position: right;
    background-repeat: no-repeat;
   
    //#slide0:checked ~ .controls label:nth-of-type(1):after,
    //#slide1:checked ~ .controls label:nth-of-type(2):after,
    //#slide2:checked ~ .controls label:nth-of-type(3):after {
    //    border: 2px solid #fbbe3a;
    //    background-color: #ffffff;
    //}

    //#slide0:checked ~ .slider > .slide0,
    //#slide1:checked ~ .slider > .slide1,
    //#slide2:checked ~ .slider > .slide2 {
    //    opacity: 1;
    //}
`;


export const SlideWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
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
    max-width: 700px;
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
`;

export const SliderLabels = styled.label`
    cursor: pointer;
    display: inline-block;
    height: 25px;
    margin: 35px;
    position: relative;
    width: 25px;
    border-radius: 50%;
    transition: background ease-in-out 0.5s;
    &:after {
        border: 2px solid #AD58F9;
        background-color: #AD58F9;
        content: '';
        display: block;
        height: 8px;
        left: -4px;
        position: absolute;
        top: -4px;
        width: 8px;
        border-radius: 50%;
        box-sizing: border-box;
    }
`;