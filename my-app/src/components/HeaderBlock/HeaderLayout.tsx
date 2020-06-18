import React from 'react';
import { HeaderTag } from './HeaderLayoutStyles';
import { NavigationBlock } from '../NavigationBlock/NavitagionBlock';
import { Slider } from '../Slider/Slider';
import { ILinks } from '../../App';

export const Header: React.FC<ILinks> = ({link, setLink, disable}) => {
    return (
        <HeaderTag id={'#main'}>
            <NavigationBlock  link={link} setLink={setLink}/>
            {!disable && <Slider/>}
        </HeaderTag>
    );
};
