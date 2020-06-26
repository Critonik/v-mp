import { Header } from '../HeaderBlock/HeaderLayout';
import MainBlock from '../MainBlock/MainBlock';
import Footer from '../Footer/Footer';
import React, { useEffect, useReducer, useState } from 'react';
import { initialState, reducer } from '../../stubs/linkStore';
import { useHistory } from 'react-router';
import { links } from '../NavigationBlock/NavitagionBlock';

const MainPage: React.FC= () => {
    const history = useHistory();

    const [state, dispatch] = useReducer(reducer, initialState);
    const [loaded, isLoaded] = useState<boolean>(false)

    useEffect(() => {
        isLoaded(true);
    }, []);

    useEffect(() => {
        const blockId = history.location.pathname.slice(6)
        if (blockId || blockId !== '/') {
            const element = document.getElementById(`#${blockId}`) as HTMLElement;
            if (element) {
                const yPos = element.getBoundingClientRect().top;
                const sectionIndex = links.findIndex(item => item.link === blockId);
                if (yPos && sectionIndex !== -1) {
                    window.scrollTo({
                        top: yPos,
                        behavior: 'smooth',
                    });
                    dispatch({
                        type: 'change',
                        payload : sectionIndex
                    });
                }
            }
        }
    }, [loaded]); // eslint-disable-line

    return (
        <>
            <Header link={state.count} setLink={dispatch}/>
            <MainBlock/>
            <Footer link={state.count} setLink={dispatch}/>
        </>
    )
};

export default MainPage;