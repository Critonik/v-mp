import { Header } from '../HeaderBlock/HeaderLayout';
import MainBlock from '../MainBlock/MainBlock';
import React, {useEffect, useLayoutEffect, useReducer, useState} from 'react';
import { initialState, reducer } from '../../stubs/linkStore';
import { useHistory } from 'react-router';
import FooterPromo from '../FooterPromo/FooterPromo';
import {numSize} from "../../GlobalStyles/mediaBreakpoints";
import throttle from "../../stubs/throttle";
import {links} from "../NavigationBlock/NavitagionBlock";

const PromoPage: React.FC = () => {

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
                history.push(`/promo/${link.link}`)
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
        const blockId = history.location.pathname.slice(7)
        if (blockId || blockId !== '/') {
            const element = document.getElementById(`#${blockId}`) as HTMLElement;
            if (element) {
                const yPos = element.getBoundingClientRect().top;
                const sectionIndex = links.findIndex(item => item.link === blockId);
                if (yPos && sectionIndex !== -1) {
                    window.scrollTo({
                        top: yPos + window.pageYOffset,
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
            <Header isPromo={true} link={state.count} setLink={dispatch}/>
            <MainBlock/>
            <FooterPromo link={state.count} setLink={dispatch}/>
        </>
    )
};

export default PromoPage;