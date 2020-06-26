import styled from 'styled-components';
import { scrollStyles } from '../../defaultTheme';

export const HeaderTag = styled.header`
    width: 100%;
    height: 100%;
    max-height: 1280px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ${scrollStyles};
`;