import styled from 'styled-components';
import { device } from '../../GlobalStyles/mediaBreakpoints';
import { defaultTheme } from '../../defaultTheme';

export const DocumentBlockSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    background-color: #171717;
    padding: 18px 0;
    
    @media ${device.desktop} {
        padding: 18px 10px;
    }
`;

export const DocumentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    @media ${device.desktop} {
        flex-direction: row;
        width: 100%;
    }
`;

export const DocumentLink = styled.a`
    text-decoration: underline;
    color: ${defaultTheme.white_main};
    font: ${defaultTheme.font.headerText};
    font-size: 15px;
    line-height: 19px;
    margin: 5 49px;
    &:link {
        color: ${defaultTheme.white_main};
    }
    &:visited {
        color: ${defaultTheme.white_main};
    }
    @media ${device.tabletM} {
          font-size: 24px;
          line-height: 29px;
    }
`;