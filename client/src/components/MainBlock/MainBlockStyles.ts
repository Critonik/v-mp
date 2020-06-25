import styled from 'styled-components';
import { defaultTheme, scrollStyles } from '../../defaultTheme';

export const MainBlockWrapper = styled.main`
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      background-color: ${defaultTheme.white_main};
      z-index: 1000;
      ${scrollStyles};
`;