import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './defaultTheme';
import GlobalStyles from './GlobalStyles/global-styles';
import { AppBlock } from './AppStyles';
import MainPage from './components/MainPage/MainPage';
import { Route, Switch } from 'react-router-dom';
import DonatePage from './components/DonatePage/DonatePage';


export interface ILinks {
    link: number;
    setLink: (a?: any) => void;
    disable?: boolean;
    style?: React.CSSProperties
}

function App() {


    const renderPages = () => {
        return (
            <Switch>
                <Route exact path='/' component={MainPage} />
                <Route exact path='/:category' component={MainPage} />
                <Route exact path='/payment/donate' component={DonatePage} />
            </Switch>
        );
    };

    return (
    <AppBlock>
        <GlobalStyles/>
        <ThemeProvider theme={defaultTheme}>
            {renderPages()}
        </ThemeProvider>
    </AppBlock>
  );
}

export default App;
