import React, { useState } from 'react';
import { NavBlockWrapper, Logo, NavItem, NavItemWrapper } from './NavitagionBlockStyles';
import Logotype from '../../icons/logo.svg';

interface ILinkData {
    text: string;
    link: string;
}


const links = [
    {
        text: 'Главная',
        link: 'main',
    },
    {
        text: 'Как начать играть?',
        link: 'how',
    },
    {
        text: 'Список серверов',
        link: 'serverlist',
    },
    {
        text: 'Новости',
        link: 'news',
    },
    {
        text: 'Донат',
        link: 'donate',
    },
    {
        text: 'Форум',
        link: 'forum',
    },
];

export const NavigationBlock: React.FC = () => {

    const [chosenLink, chooseLink] = useState<number>(0);

    const chooseBlock = (blockId: string, linkNumber: number) => {
        chooseLink(linkNumber);
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

    const createLinks = () => {
        return links.map((link, idx) => {
           return (
             <NavItem
                 key={idx}
                 data-choose={chosenLink === idx}
                 onClick={() => chooseBlock(`#${link.link}`, idx)}
                 href={`#${link.link}`}
             >
                 {link.text}
             </NavItem>
           );
        });
    }

    return (
        <NavBlockWrapper>
            <Logo src={Logotype} alt=''/>
            <NavItemWrapper>
                {createLinks()}
            </NavItemWrapper>
        </NavBlockWrapper>
    );
};
