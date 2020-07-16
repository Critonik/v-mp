import React from 'react';
import { HeaderTag } from './HeaderLayoutStyles';
import { NavigationBlock } from '../NavigationBlock/NavitagionBlock';
import { Slider } from '../Slider/Slider';
import { ILinks } from '../../App';
import NavitagionBlockPromo from '../NavigationBlockPromo/NavitagionBlockPromo';
import { PromoSection } from '../PromoSection/PromoSection';

export const Header: React.FC<ILinks> = ({link, setLink, disable, isPromo}) => {
    const blockHeight = document.documentElement.clientHeight;
    return (
        <HeaderTag
            id={'#main'}
            style={{height: `${blockHeight}px`,
            maxHeight: `${blockHeight}px`}}
        >
            {!isPromo && <NavigationBlock  link={link} setLink={setLink}/>}
            {isPromo && <NavitagionBlockPromo  link={link} setLink={setLink}/>}
            {!isPromo && !disable && <Slider/>}
            {isPromo && <PromoSection/>}
        </HeaderTag>
    );
};
