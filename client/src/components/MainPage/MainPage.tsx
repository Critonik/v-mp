import { Header } from '../HeaderBlock/HeaderLayout';
import MainBlock from '../MainBlock/MainBlock';
import Footer from '../Footer/Footer';
import React, {useEffect, useLayoutEffect, useReducer, useState} from 'react';
import { initialState, reducer } from '../../stubs/linkStore';
import { useHistory } from 'react-router';
import { links } from '../NavigationBlock/NavitagionBlock';
import throttle from "../../stubs/throttle";
import {numSize} from "../../GlobalStyles/mediaBreakpoints";



const MainPage: React.FC= () => {
    const history = useHistory();
    const [size, setSize] = useState<number>(0);

    const [state, dispatch] = useReducer(reducer, initialState);
    const [loaded, isLoaded] = useState<boolean>(false);

    const onWheel = (e: WheelEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest('#NewsWrapper')) {
            return;
        }
        if (e.deltaY > 0) {
            dispatch({
                type: 'add'
            });
        }
        if (e.deltaY < 0) {
            dispatch({
                type: 'sub'
            });
        }
    }
    useEffect(() => {
        const newIndex = state.count;
        const link = links[newIndex];
        const element = document.getElementById(`#${link.link}`) as HTMLElement;
        if (element) {
            const yPos = element.getBoundingClientRect().top;
            const sectionIndex = links.findIndex(item => item.link === link.link);
            if (yPos && sectionIndex !== -1) {
                window.scrollTo({
                    top: yPos + window.pageYOffset,
                    behavior: 'smooth',
                });
                history.push(`/main/${link.link}`)
            }
        }
    }, [state]);

    const throttleEvent = throttle(onWheel, 500);

    useLayoutEffect(() => {
        const updateSize = () => {
            setSize(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();

        return () => window.removeEventListener('resize', updateSize);
    }, []);

    useEffect(() => {
        if (size >= numSize.desktop) {
            document.addEventListener('wheel', throttleEvent);
        }
        return () => {
            document.removeEventListener('wheel', throttleEvent)
        }
    }, [size]);

    useEffect(() => {
        isLoaded(true);

        return () => {
            document.removeEventListener('wheel', throttleEvent)
        }
    }, []);

    useEffect(() => {
        const blockId = history.location.pathname.slice(6);
        if (blockId || blockId !== '/') {
            const element = document.getElementById(`#${blockId}`) as HTMLElement;
            if (element) {
                const yPos = element.getBoundingClientRect().top;
                const sectionIndex = links.findIndex(item => item.link === blockId);
                dispatch({
                    type: 'change',
                    payload : sectionIndex
                });
                if (yPos && sectionIndex !== -1) {
                    window.scrollTo({
                        top: yPos + window.pageYOffset,
                        behavior: 'smooth',
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