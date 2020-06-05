import React, { useState } from 'react';
import {
    Button, ButtonText, ButtonVideoText,
    ButtonWrapper,
    HiddenInput,
    LabelControlsWrapper,
    SlideHeader,
    SlideInfoWrapper,
    SliderLabels,
    SliderSection,
    SlideText,
    SlideWrapper
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
}

const cardInfo: IFirstBlockCardInfo[] = [
    {
        title: `Стань бандитом`,
        number: 1,
        description: 'Единственный в своём роде GTA 5 RP сервер с голосовым чатом и поддержкой всех версий игры.! Самый продвинутый игровой мод с большими возможностями для новичков и опытных игроков. 14 фракций с функционалом и более 10 работ, которые не дадут заскучать. Проект работает успешно уже 3 года!',
        buttonText: 'Начать играть!',
        playButtonText: 'Ролик о проекте'
    },
    {
        title: `Стань бандитом`,
        number: 2,
        description: 'Единственный в своём роде GTA 5 RP сервер с голосовым чатом и поддержкой всех версий игры.! Самый продвинутый игровой мод с большими возможностями для новичков и опытных игроков. 14 фракций с функционалом и более 10 работ, которые не дадут заскучать. Проект работает успешно уже 3 года!',
        buttonText: 'Начать играть!',
        playButtonText: 'Ролик о проекте'
    },
    {
        title: `Стань бандитом`,
        number: 3,
        description: 'Единственный в своём роде GTA 5 RP сервер с голосовым чатом и поддержкой всех версий игры.! Самый продвинутый игровой мод с большими возможностями для новичков и опытных игроков. 14 фракций с функционалом и более 10 работ, которые не дадут заскучать. Проект работает успешно уже 3 года!',
        buttonText: 'Начать играть!',
        playButtonText: 'Ролик о проекте'
    },
];

export const Slider: React.FC = () => {

    const [slide, setSlide] = useState<number>(0);
    const backImage = [slide0, slide1, slide2];

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

    const renderCard = (cards: IFirstBlockCardInfo[]) => {
        return cards.map((item, idx) => {
            return (
                <SlideWrapper key={item.title + idx} data-visible={idx === slide} className={`slides slide${idx}`}>
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
                    </ButtonWrapper>
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
        <SliderSection imageArr={backImage} backImg={backImage[slide]} className='SliderSection'>
            {renderSliderInput(cardInfo.length)}
            {renderCard(cardInfo)}
            <LabelControlsWrapper>
                {renderSliderLabel(cardInfo.length)}
            </LabelControlsWrapper>
        </SliderSection>
    );
};
