import React, { useState } from 'react';
import {
    NavBlockWrapper,
    Logo,
    NavItem,
    NavItemWrapper,
    BurgerMenu,
    MobileNavItem,
    MobileMenuWrapper, CloseMobileMenuIcon
} from './NavitagionBlockStyles';
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
    const [isOpen, setOpen] = useState<boolean>(false);

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

    const chooseBlockMobile = (blockId: string, linkNumber: number) => {
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
        closeMobileMenu();
    }

    const openMobileMenu = () => {
        const body = document.querySelector('body') as HTMLElement;
        if (body) {
            body.style.overflow = 'hidden';
        }
        setOpen(true);
    }

    const closeMobileMenu = () => {
        const body = document.querySelector('body') as HTMLElement;
        if (body) {
            body.style.overflow = 'auto';
        }
        setOpen(false);
    }


    const createLinks = (links: ILinkData[]) => {
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

    const createMobileLinks = (links: ILinkData[]) => {
        return links.map((link, idx) => {
            return (
                <MobileNavItem
                    key={idx}
                    data-choose={chosenLink === idx}
                    onClick={() => chooseBlockMobile(`#${link.link}`, idx)}
                    href={`#${link.link}`}
                >
                    {link.text}
                </MobileNavItem>
            );
        });
    }

    return (
        <NavBlockWrapper>
            <Logo src={Logotype} alt=''/>
            <NavItemWrapper>
                {createLinks(links)}
            </NavItemWrapper>
            <BurgerMenu onClick={openMobileMenu}/>
            {isOpen && <MobileMenuWrapper><CloseMobileMenuIcon onClick={closeMobileMenu}/>{createMobileLinks(links)}</MobileMenuWrapper>}
        </NavBlockWrapper>
    );
};
