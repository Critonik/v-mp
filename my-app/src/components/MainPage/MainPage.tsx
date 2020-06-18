import { Header } from '../HeaderBlock/HeaderLayout';
import MainBlock from '../MainBlock/MainBlock';
import Footer from '../Footer/Footer';
import React, { useReducer } from 'react';
import { initialState, reducer } from '../../stubs/linkStore';

const MainPage: React.FC= () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <Header link={state.count} setLink={dispatch}/>
            <MainBlock/>
            <Footer link={state.count} setLink={dispatch}/>
        </>
    )
};

export default MainPage;