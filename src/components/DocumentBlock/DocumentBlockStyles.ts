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
`;

export const DocumentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    @media ${device.desktop} {
        flex-direction: row;
    }
`;

export const DocumentLink = styled.a`
    text-decoration: underline;
    color: ${defaultTheme.white_main};
    font: ${defaultTheme.font.headerText};
    margin: 0 49px;
    &:link {
        color: ${defaultTheme.white_main};
    }
    &:visited {
        color: ${defaultTheme.white_main};
    }
`;