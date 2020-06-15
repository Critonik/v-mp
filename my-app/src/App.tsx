import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './defaultTheme';
import GlobalStyles from './GlobalStyles/global-styles';
import { Header } from './components/HeaderBlock/HeaderLayout';
import { AppBlock } from './AppStyles';
import MainBlock from './components/MainBlock/MainBlock';
import Footer from './components/Footer/Footer';


export interface ILinks {
    link: number;
    setLink: (a?: any) => void;
}

function App() {

    const [link, setLink] = useState<number>(0);

    return (
    <AppBlock>
        <GlobalStyles/>
        <ThemeProvider theme={defaultTheme}>
                <Header link={link} setLink={setLink}/>
                <MainBlock/>
                <Footer link={link} setLink={setLink}/>
        </ThemeProvider>
    </AppBlock>
  );
}

export default App;
