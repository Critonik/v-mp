import React, { useState } from 'react';
import {
    HiddenInput,
    LabelControlsWrapper,
    SlideHeader,
    SlideInfoWrapper,
    SliderLabels,
    SliderSection,
    SlideText,
    SlideWrapper
} from './SliderStyles';
import bandit from '../../icons/bandit.svg';


interface IFirstBlockCardInfo {
    title: string;
    img: {
        ic: string;
        number: number;
    };
    description: string;
}

const cardInfo: IFirstBlockCardInfo[] = [
    {
        title: `Стань бандитом`,
        img: {
            ic: bandit,
            number: 1,
        },
        description: 'Единственный в своём роде GTA 5 RP сервер с голосовым чатом и поддержкой всех версий игры.! Самый продвинутый игровой мод с большими возможностями для новичков и опытных игроков. 14 фракций с функционалом и более 10 работ, которые не дадут заскучать. Проект работает успешно уже 3 года!',
    },
    {
        title: `Стань бандитом`,
        img: {
            ic: bandit,
            number: 2,
        },
        description: 'Единственный в своём роде GTA 5 RP сервер с голосовым чатом и поддержкой всех версий игры.! Самый продвинутый игровой мод с большими возможностями для новичков и опытных игроков. 14 фракций с функционалом и более 10 работ, которые не дадут заскучать. Проект работает успешно уже 3 года!',
    },
    {
        title: `Стань бандитом`,
        img: {
            ic: bandit,
            number: 3,
        },
        description: 'Единственный в своём роде GTA 5 RP сервер с голосовым чатом и поддержкой всех версий игры.! Самый продвинутый игровой мод с большими возможностями для новичков и опытных игроков. 14 фракций с функционалом и более 10 работ, которые не дадут заскучать. Проект работает успешно уже 3 года!',
    },
];

export const Slider: React.FC = () => {

    const [slide, setSlide] = useState<number>(0);

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
                <SlideWrapper key={item.title + idx} className={`slide${idx}`}>
                    <SlideInfoWrapper>
                        <SlideHeader count={item.img.number}>{item.title}</SlideHeader>
                        <SlideText>
                            {item.description}
                        </SlideText>
                    </SlideInfoWrapper>
                </SlideWrapper>
            );
        });
    };

    const renderSliderLabel = (count: number) => {
        const result: React.ReactNode[] = [];
        for (let i = 0; i < count; i++) {
            result.push(<SliderLabels onClick={() => setSlide(i)} key={i + ' label'} htmlFor={`slide${i}`}/>);
        }
        return result;
    };

    return (
        <SliderSection backImg={bandit} className='SliderSection'>
        </SliderSection>
    );
};
