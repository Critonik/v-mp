import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './defaultTheme';
import GlobalStyles from './GlobalStyles/global-styles';
import { AppBlock } from './AppStyles';
import MainPage from './components/MainPage/MainPage';
import { Route, Switch } from 'react-router-dom';
import DonatePage from './components/DonatePage/DonatePage';
import PromoPage from './components/PromoPage/PromoPage';


export interface ILinks {
    link: number;
    setLink: (a?: any) => void;
    disable?: boolean;
    style?: React.CSSProperties
    isPromo?: boolean;
}

function App() {


    const renderPages = () => {
        return (
            <Switch>
                <Route exact path='/' component={MainPage} />
                <Route exact path='/main/:category' component={MainPage} />
                <Route exact path='/payment/donate' component={DonatePage} />
                <Route exact path='/promo' component={PromoPage} />
                <Route exact path='/promo/:promo' component={PromoPage} />
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
