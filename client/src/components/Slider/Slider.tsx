import React, { useEffect, useState } from 'react';
import {
    Button,
    ButtonText,
    ButtonVideoText,
    ButtonWrapper,
    GunBlock,
    LabelControlsWrapper,
    SlideHeader,
    SlideInfoWrapper,
    SliderLabels,
    SliderSection,
    SlideText,
    SlideWrapper,
    TabletBackground,
    TextWrapper
} from './SliderStyles';
import slide0 from '../../icons/slide0.png';
import slide1 from '../../icons/slide1.png';
import slide2 from '../../icons/slide2.png';
import VideoModal from '../VideoModal/VideoModal';


interface IFirstBlockCardInfo {
    title: string;
    number: number;
    description: string;
    buttonText: string;
    playButtonText: string;
    image: string;
}

const cardInfo: IFirstBlockCardInfo[] = [
    {
        title: `Стань бандитом`,
        number: 1,
        description: 'Единственный в своём роде GTA 5 RP сервер с голосовым чатом и поддержкой всех версий игры.! Самый продвинутый игровой мод с большими возможностями для новичков и опытных игроков. 14 фракций с функционалом и более 10 работ, которые не дадут заскучать. Проект работает успешно уже 3 года!',
        buttonText: 'Начать играть!',
        playButtonText: 'Ролик о проекте',
        image: slide0,
    },
    {
        title: `Стань бандитом`,
        number: 2,
        description: 'Единственный в своём роде GTA 5 RP сервер с голосовым чатом и поддержкой всех версий игры.! Самый продвинутый игровой мод с большими возможностями для новичков и опытных игроков. 14 фракций с функционалом и более 10 работ, которые не дадут заскучать. Проект работает успешно уже 3 года!',
        buttonText: 'Начать играть!',
        playButtonText: 'Ролик о проекте',
        image: slide1,
    },
    {
        title: `Стань бандитом`,
        number: 3,
        description: 'Единственный в своём роде GTA 5 RP сервер с голосовым чатом и поддержкой всех версий игры.! Самый продвинутый игровой мод с большими возможностями для новичков и опытных игроков. 14 фракций с функционалом и более 10 работ, которые не дадут заскучать. Проект работает успешно уже 3 года!',
        buttonText: 'Начать играть!',
        playButtonText: 'Ролик о проекте',
        image: slide2,
    },
];

export const Slider: React.FC = () => {

    const [slide, setSlide] = useState<number>(0);
    const [isVideo, openVideo] = useState<boolean>(false);
    const mobile = document.documentElement.clientWidth;

    useEffect(() => {
        document.addEventListener('mousemove', parlx);
        document.addEventListener('mousemove', parlxMain);
        return () => {
            document.removeEventListener('mousemove', parlx);
            document.removeEventListener('mousemove', parlxMain);
        };
    }, []); // eslint-disable-line
    

    const parlx = (e: MouseEvent) => {
        if (mobile < 1024) return;
        const elem = document.querySelectorAll("#parallax");
        // Magic happens here
        let _w = window.innerWidth / 2;
        let _h = window.innerHeight / 2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${10 - (_mouseX - _w) * 0.01}% ${10 -
        (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${10 - (_mouseX - _w) * 0.02}% ${10 -
        (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${10 - (_mouseX - _w) * 0.06}% ${10 -
        (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        if (elem) {
            elem.forEach(item =>  (item as HTMLElement).style.backgroundPosition = x);
        }
    };

    const parlxMain = (e: MouseEvent) => {
        if (mobile < 1024) return;
        const elem = document.querySelectorAll("#mainprlx");
        // Magic happens here
        let _w = window.innerWidth;
        let _mouseX = e.clientX;
        let _depth1 = `${100 - 10 - (_mouseX - _w) * 0.01}%`;
        let x = `${_depth1}`;
        if (elem) {
            elem.forEach(item =>  (item as HTMLElement).style.backgroundPositionX = x);
        }
    };

    const onHowScroll = () => {
        const block = document.getElementById('#how') as HTMLElement;
        if (block) {
            const yPos = block.getBoundingClientRect().top;
            if (yPos) {
                window.scrollTo({
                    top: yPos,
                    behavior: 'smooth',
                });
            }
        }
    }

    const renderCard = (cards: IFirstBlockCardInfo[]) => {
        return cards.map((item, idx) => {
            return (
                <SlideWrapper key={item.title + idx} data-visible={idx === slide}>
                    <TextWrapper>
                        <SlideInfoWrapper>
                            <SlideHeader count={item.number}>{item.title}</SlideHeader>
                            <SlideText>
                                {item.description}
                            </SlideText>
                        </SlideInfoWrapper>
                        <ButtonWrapper>
                            <Button onClick={onHowScroll}>
                                <ButtonText>
                                    {item.buttonText}
                                </ButtonText>
                            </Button>
                            <Button
                                onClick={() => openVideo(true)}
                                backcolor={'transparent'}
                                bordercolor={'#171717'}
                                minheight={'52px'}
                                padding={'15px 64px 15px 32px'}>
                                <ButtonVideoText>
                                    {item.playButtonText}
                                </ButtonVideoText>
                            </Button>
                            <GunBlock id={'parallax'}/>
                        </ButtonWrapper>
                    </TextWrapper>
                </SlideWrapper>
            );
        });
    };

    const renderSliderLabel = (count: number) => {
        const result: React.ReactNode[] = [];
        for (let i = 0; i < count; i++) {
            result.push(<SliderLabels data-checked={i === slide} onClick={() => setSlide(i)} key={i + ' label'} htmlFor={`slide${i}`}/>);
        }
        return result;
    };



    return (
        <SliderSection id={'mainprlx'} tabletImage={cardInfo[slide].image} className='SliderSection' >
            <TabletBackground
                id={'mainprlx'}
                style={{backgroundImage: `url(${cardInfo[slide].image})`,
                backgroundSize: `${document.documentElement.clientHeight}px`}}/>
            {renderCard(cardInfo)}
            <LabelControlsWrapper>
                {renderSliderLabel(cardInfo.length)}
            </LabelControlsWrapper>
            {isVideo && <VideoModal
                closeAction={() => openVideo(false)}>
                <iframe title={'how to start video'} width="80%" height="80%" src="https://www.youtube.com/embed/CoTLp_g5t-w" frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
            </VideoModal>}
        </SliderSection>
    );
};
