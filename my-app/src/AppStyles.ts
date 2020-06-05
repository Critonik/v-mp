import styled from 'styled-components';
import square from './icons/square.svg'

export const AppBlock = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    background-image: url(${square});
    background-position: center;
    background-size: cover;
`;
