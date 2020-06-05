import { css } from 'styled-components';

export const defaultTheme = {
    light_grey_color: '#D4DCE1',
    white_main: '#FFF',
    title_color: '#1A2433',
    menu_item: '#424D5C',
    black_color: '#171717',
    dark_blue_color: '#20324E',
    yellow_color: '#FBBE3A',
    banner_yellow1_color: '#FABD39',
    orange_header_color: '#FEA800',
    banner_yellow2_color: '#FFDE98',
    grey_color: '#4E5D73',
    another_light_grey_color: '#A5B5D4',
    another_dark_grey_color: '#71809C',
    blue_grey: '#374A66',
    grey_background: '#F7F7F8',
    hover_menu_color: '#2E3D51',
    border_color: '#EAEEF5',
    gray: '#9EA5BF',
    red: '#D53535',
    light_green: '#4BBA56',
    blue_link_color: '#4177CB',
    light_blue: '#F3F8FD',
    dark_grey: '#E1E5F2',
    sand_red: '#BA734B',
    violet: '#AD58F9',

    font: {
        headerText: 'normal normal 500 24px/29px Montserrat',
        headerTextTablet: 'normal normal 500 13px/15px Montserrat',
        headerTextLaptop: 'normal normal 500 16x/19px Montserrat',
        headerBoldText: 'normal normal 500 31px/38px Montserrat',
        sectionMontserratText: 'normal normal normal 18px/21px Montserrat',
        linkText: 'normal normal bold 14px/18px Montserrat',
        licenseKey: ' normal normal normal 18px/22px Montserrat'
    },
};
export const scrollStyles = css`
    scrollbar-width: thin;
    scrollbar-base-color: white;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        width: 11px;
        height: 11px;
    }

    &::-webkit-scrollbar-button {
        display: none;
    }

    &::-webkit-scrollbar-corner {
        display: none;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.15);
        border-radius: 16px;
        border: 2px solid transparent;
        background-clip: padding-box;
    }
`;
export type Theme = typeof defaultTheme;
