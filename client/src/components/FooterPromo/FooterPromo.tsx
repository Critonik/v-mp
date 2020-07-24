import React  from 'react';
import { FooterBlock, FooterInfo, FooterNavItemWrapper, FooterWrapper, NavItem } from '../Footer/FooterStyles';
import { Logo } from '../NavigationBlock/NavitagionBlockStyles';
import Logotype from '../../icons/logo.svg';
import {ILinkData, links} from '../NavigationBlock/NavitagionBlock';
import { ILinks } from '../../App';
import DocumentBlock from '../DocumentBlock/DocumentBlock';


const FooterPromo: React.FC<ILinks> = ({link: propLink, style, setLink}) => {

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
            const yPos = block.getBoundingClientRect().top;
            if (yPos) {
                window.scrollTo({
                    top: yPos + window.pageYOffset,
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


    return (
        <FooterBlock id={'#footer'} style={style}>
            <FooterWrapper>
                <Logo className={'footer-logo'} style={{width: '104px', height: '104px'}} src={Logotype} alt=''/>
                <FooterNavItemWrapper>
                    {createLinks(links)}
                </FooterNavItemWrapper>
                <FooterInfo>
                    Единственный в своём роде GTA 5 RP сервер с голосовым чатом и поддержкой всех версий игры.! Самый продвинутый игровой мод с большими возможностями для новичков и опытных игроков. 14 фракций с функционалом и более 10 работ, которые не дадут заскучать. Проект работает успешно уже 3 года!
                </FooterInfo>
            </FooterWrapper>
            <DocumentBlock/>
        </FooterBlock>
    );
};

export default FooterPromo;