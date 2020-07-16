import styled from 'styled-components';
import { scrollStyles } from '../../defaultTheme';
import back from '../../icons/back.png';

export const HeaderTag = styled.header`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: url(${back});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    ${scrollStyles};
    box-sizing: border-box;
`;