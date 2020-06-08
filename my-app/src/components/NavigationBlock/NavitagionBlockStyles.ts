import styled from 'styled-components';
import { defaultTheme } from '../../defaultTheme';
import { device } from '../../GlobalStyles/mediaBreakpoints';

export const NavBlockWrapper = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 1920px;
    width: calc(100% - 15%);
    margin: 0 auto;
    height: 100px;  
`;

export const Logo = styled.img`
    width: 100px;
    height: 100px;
`;

export const NavItemWrapper = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: calc(100% - 25%);
    margin-left: auto;
`;

export const NavItem = styled.a`
    font: ${defaultTheme.font.headerTextTablet};
    color: ${defaultTheme.black_color};
    text-decoration: none;
    &[data-choose = 'true'] {
        border-bottom: 4px solid #AD58F9;
    }
    &:link {
        color: ${defaultTheme.black_color};
    }
    &:visited {
        color: ${defaultTheme.black_color};
    }
    
    @media ${device.laptop} {
        font-size: 16px;
        line-height: 19px;
    }
    
    @media ${device.desktop} {
        font-size: 24px;
        line-height: 29px;
    }
    
`;