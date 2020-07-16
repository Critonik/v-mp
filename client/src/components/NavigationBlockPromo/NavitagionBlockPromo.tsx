import React, { useState } from 'react';
import {
    NavBlockWrapper,
    Logo,
    NavItem,
    NavItemWrapper,
    BurgerMenu,
    MobileNavItem,
    MobileMenuWrapper,
    CloseMobileMenuIcon
} from './NavitagionBlockPromoStyles';
import { ILinks } from '../../App';

export interface ILinkData {
    text: string;
    link: string;
}


export const links = [
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
        text: 'Присоединяйся',
        link: 'join',
    },
    {
        text: 'Донат',
        link: 'donate',
    },
    {
        text: 'Форум',
        link: 'https://forum.v-mp.ru/',
    },
];

const NavitagionBlockPromo: React.FC<ILinks> = ({link: propLink, setLink, disable}) => {

    const [isOpen, setOpen] = useState<boolean>(false);


    const chooseBlock = (blockId: string, linkNumber: number) => {
        if (blockId === 'https://forum.v-mp.ru/') {
            window.location.href = blockId;
            return;
        }
        setLink({
            type: 'change',
            payload : linkNumber
        });
        const block = document.getElementById(`#${blockId}`) as HTMLElement;
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
        if (blockId === 'https://forum.v-mp.ru/') {
            window.location.href = blockId;
            return;
        }
        setLink({
            type: 'change',
            payload : linkNumber
        });
        const block = document.getElementById(`#${blockId}`) as HTMLElement;
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
                     data-choose={propLink === idx}
                     onClick={() => chooseBlock(`${link.link}`, idx)}
                     to={{ pathname: link.link === 'donate'
                             ? '/payment/donate'
                             : link.link === 'https://forum.v-mp.ru/'
                                 ? '/promo'
                                 : `/promo/${link.link}`}}
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
                    data-choose={propLink === idx}
                    onClick={() => chooseBlockMobile(`${link.link}`, idx)}
                    to={{ pathname: link.link === 'donate'
                            ? '/payment/donate'
                            : link.link === 'https://forum.v-mp.ru/'
                                ? '/promo'
                                : `/promo/${link.link}`}}
                >
                    {link.text}
                </MobileNavItem>
            );
        });
    }

    return (
        <NavBlockWrapper>
            <Logo to={'/'}/>
            <NavItemWrapper>
                {createLinks(links)}
            </NavItemWrapper>
            <BurgerMenu onClick={openMobileMenu}/>
            {isOpen && <MobileMenuWrapper><CloseMobileMenuIcon onClick={closeMobileMenu}/>{createMobileLinks(links)}</MobileMenuWrapper>}
        </NavBlockWrapper>
    );
};
export default NavitagionBlockPromo;