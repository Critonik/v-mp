import React  from 'react';
import { FooterBlock, FooterInfo, FooterNavItemWrapper, FooterWrapper, NavItem } from './FooterStyles';
import { Logo } from '../NavigationBlock/NavitagionBlockStyles';
import Logotype from '../../icons/logo.svg';
import { ILinkData } from '../NavigationBlock/NavitagionBlock';
import { ILinks } from '../../App';
import DocumentBlock from '../DocumentBlock/DocumentBlock';

const links = [
    {
        text: 'Главная',
        link: '#main',
    },
    {
        text: 'Как начать играть?',
        link: '#how',
    },
    {
        text: 'Список серверов',
        link: '#serverlist',
    },
    {
        text: 'Новости',
        link: '#news',
    },
    {
        text: 'Донат',
        link: '#donate',
    },
    {
        text: 'Форум',
        link: 'https://forum.v-mp.ru/',
    },
];


const Footer: React.FC<ILinks> = ({link: propLink, setLink}) => {

    const chooseBlock = (blockId: string, linkNumber: number) => {
        if (blockId === 'https://forum.v-mp.ru/') return;
        setLink(linkNumber);
        const block = document.getElementById(blockId) as HTMLElement;
        if (block) {
            const yPos = block.getBoundingClientRect().y;
            if (yPos) {
                window.scrollTo({
                    top: yPos,
                    behavior: 'smooth',
                });
            }
        }
    }


    const createLinks = (links: ILinkData[]) => {
        return links.map((link, idx) => {
            return (
                <NavItem
                    key={idx}
                    data-choose={propLink === idx}
                    onClick={() => chooseBlock(`${link.link}`, idx)}
                    href={`${link.link}`}
                >
                    {link.text}
                </NavItem>
            );
        });
    }


    return (
        <>
            <FooterBlock>
                <FooterWrapper>
                    <Logo className={'footer-logo'} style={{width: '204px', height: '204px'}} src={Logotype} alt=''/>
                    <FooterNavItemWrapper>
                        {createLinks(links)}
                    </FooterNavItemWrapper>
                    <FooterInfo>
                        Единственный в своём роде GTA 5 RP сервер с голосовым чатом и поддержкой всех версий игры.! Самый продвинутый игровой мод с большими возможностями для новичков и опытных игроков. 14 фракций с функционалом и более 10 работ, которые не дадут заскучать. Проект работает успешно уже 3 года!
                    </FooterInfo>
                </FooterWrapper>
            </FooterBlock>
            <DocumentBlock/>
        </>
    );
};

export default Footer;