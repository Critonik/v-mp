import styled from 'styled-components';
import square from '../../icons/square.svg'
import { device } from '../../GlobalStyles/mediaBreakpoints';
import { defaultTheme } from '../../defaultTheme';
import { Link } from 'react-router-dom';

export const FooterBlock = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    background-image: url(${square});
    background-position: center;
    background-size: cover;
    box-sizing: border-box;
    
    @media ${device.desktop} {
        .footer-logo {
            margin-right: 72px;
        }
    }
`;

export const FooterWrapper = styled.div`
    max-width: 1568px;
    min-height: 286px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    box-sizing: border-box;
    
    @media ${device.laptop} {
        flex-direction: row;
        width: 100%;
    }
`;


export const FooterNavItemWrapper = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
    
    @media ${device.laptop} {
         margin-top: 0;
         margin-bottom: 0;
         margin-right: 100px;
         align-items: flex-start;
    }
    
    @media ${device.desktop} {
         flex-wrap: wrap;
         max-height: 205px;
         margin-right: auto;
    }
`;


export const NavItem = styled(Link)`
    font: ${defaultTheme.font.headerTextTablet};
    color: ${defaultTheme.black_color};
    font-size: 24px;
    line-height: 29px;
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
        margin-bottom: 33px;
        margin-right: 50px;
    }
`;


export const FooterInfo = styled.p`
    margin: 0;
    text-align: center;
    font: ${defaultTheme.font.headerTextTablet};
    color: ${defaultTheme.black_color};
    font-size: 15px;
    line-height: 19px;
    max-width: 638px;
    
    @media ${device.laptop} {
      text-align: left;
    }
    
    @media ${device.desktop} {
      font-size: 24px;
      line-height: 29px;
    }
`;