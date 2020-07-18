import styled from 'styled-components';
import { defaultTheme } from '../../defaultTheme';
import { device } from '../../GlobalStyles/mediaBreakpoints';
import burger from '../../icons/menu.svg';
import cross from '../../icons/x.svg';
import { Link } from 'react-router-dom';
import Logotype from '../../icons/logo.svg';

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

export const Logo = styled(Link)`
    background-image: url(${Logotype});
    width: 100px;
    height: 100px;
    background-position: center;
    background-repeat: no-repeat;
`;

export const BurgerMenu = styled.div`
    width: 75px;
    height: 75px;
    cursor: pointer;
    background-image: url(${burger});
    background-repeat: no-repeat;
    background-position: center;
    @media ${device.laptop} {
        display: none;
    }
`

export const NavItemWrapper = styled.nav`
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: calc(100% - 25%);
    margin-left: auto;
    @media ${device.laptop} {
        display: flex;
    }
`;

export const MobileMenuWrapper = styled.nav`
      position: fixed;
      background: linear-gradient(to bottom, rgba(163, 80, 255, 0.8), rgba(163, 80, 255, 0.8));
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 200;
`;


export const MobileNavItem = styled(Link)`
    font: ${defaultTheme.font.headerTextTablet};
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: ${defaultTheme.white_main};
    text-decoration: none;
    display: block;
    margin-bottom: 14px;
    &[data-choose = 'true'] {
        border-bottom: 6.28571px solid #4E8EF3;;
    }
    &:link {
        color: ${defaultTheme.white_main};
    }
    &:visited {
        color: ${defaultTheme.white_main};
    }
`;

export const CloseMobileMenuIcon = styled.div`
    width: 75px;
    height: 75px;
    cursor: pointer;
    background-image: url(${cross});
    background-repeat: no-repeat;
    background-position: center;
    position: fixed;
    right: 38px;
    top: 12px;
`;


export const NavItem = styled(Link)`
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
   
    
    @media ${device.desktop} {
        font-size: 17px;
        line-height: 23px;
    }
     
`;