import React from 'react';
import { HeaderTag } from './HeaderLayoutStyles';
import { NavigationBlock } from '../NavigationBlock/NavitagionBlock';
import { Slider } from '../Slider/Slider';

export const Header: React.FC = () => {
    return (
        <HeaderTag id={'#main'}>
            <NavigationBlock/>
            <Slider/>
        </HeaderTag>
    );
};
