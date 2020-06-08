import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './defaultTheme';
import GlobalStyles from './GlobalStyles/global-styles';
import { Header } from './components/HeaderBlock/HeaderLayout';
import { AppBlock } from './AppStyles';
import MainBlock from './components/MainBlock/MainBlock';

function App() {
  return (
    <AppBlock>
        <GlobalStyles/>
        <ThemeProvider theme={defaultTheme}>
            <Header/>
            <MainBlock/>
        </ThemeProvider>
    </AppBlock>
  );
}

export default App;
