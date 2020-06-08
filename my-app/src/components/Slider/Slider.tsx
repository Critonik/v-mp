import React, { useEffect, useState } from 'react';
import {
    Button, ButtonText, ButtonVideoText,
    ButtonWrapper, GunBlock,
    HiddenInput,
    LabelControlsWrapper,
    SlideHeader, SlideImage,
    SlideInfoWrapper,
    SliderLabels,
    SliderSection,
    SlideText,
    SlideWrapper, TextWrapper
} from './SliderStyles';
import slide0 from '../../icons/slide0.svg';
import slide1 from '../../icons/slide1.svg';
import slide2 from '../../icons/slide2.svg';


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


    useEffect(() => {
        document.addEventListener('mousemove', parlx);
        return () => {
            document.removeEventListener('mousemove', parlx);
        };
    }, []);

    const renderSliderInput = (count: number) => {
        const result: React.ReactNode[] = [];
        for (let i = 0; i < count; i++) {
            result.push(
                <HiddenInput
                    key={i + ' input'}
                    type="radio"
                    name="point"
                    id={`slide${i}`}
                    defaultChecked={i === slide}
                />
            );
        }
        return result;
    };

    const parlx = (e: MouseEvent) => {
        const elem = document.querySelectorAll("#parallax");
        // Magic happens here
        let _w = window.innerWidth / 2;
        let _h = window.innerHeight / 2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 -
        (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 -
        (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 -
        (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        if (elem) {
            elem.forEach(item =>  (item as HTMLElement).style.backgroundPosition = x);
        }
    };

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
                            <Button>
                                <ButtonText>
                                    {item.buttonText}
                                </ButtonText>
                            </Button>
                            <Button backcolor={'transparent'} bordercolor={'#171717'} minheight={'52px'} padding={'15px 64px 15px 32px'}>
                                <ButtonVideoText>
                                    {item.playButtonText}
                                </ButtonVideoText>
                            </Button>
                            <GunBlock id={'parallax'}/>
                        </ButtonWrapper>
                    </TextWrapper>
                    <SlideImage style={{height: `${document.documentElement.clientHeight}px`}} src={item.image} alt={item.title}/>
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
        <SliderSection style={{height: `${document.documentElement.clientHeight - 100}px`}} className='SliderSection' >
            {renderSliderInput(cardInfo.length)}
            {renderCard(cardInfo)}
            <LabelControlsWrapper>
                {renderSliderLabel(cardInfo.length)}
            </LabelControlsWrapper>
        </SliderSection>
    );
};
