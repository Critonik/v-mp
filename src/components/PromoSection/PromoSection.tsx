import React, { useEffect } from 'react';
import {
    Button,
    ButtonText,
    ButtonWrapper,
    CopyPromoWrapper,
    PromoDesc,
    PromoField,
    PromoInstruction,
    SlideHeader,
    SlideInfoWrapper,
    SliderSection,
    SlideText,
    SlideWrapper,
    TextWrapper,
    InputWrapper
} from './PromoSectionStyles';
import promoBg from '../../icons/promoBg.png';
import { TabletBackground } from '../Slider/SliderStyles';

export const PromoSection: React.FC = () => {


    useEffect(() => {
        document.addEventListener('mousemove', parlx);
        document.addEventListener('mousemove', parlxMain);
        return () => {
            document.removeEventListener('mousemove', parlx);
            document.removeEventListener('mousemove', parlxMain);
        };
    }, []);

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

    const parlxMain = (e: MouseEvent) => {
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

    const copyPromo = () => {
        const input = document.getElementById('#input') as HTMLInputElement;
        input.select();
        try {
            document.execCommand('copy');
        } catch(err) {
            console.log('Can`t copy,     boss');
        }
    }

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


    return (
        <SliderSection id={'mainprlx'} tabletImage={promoBg} className='SliderSection' >
            <TabletBackground id={'mainprlx'} style={{backgroundImage: `url(${promoBg})`}}/>
            <SlideWrapper data-visible={true}>
                <TextWrapper>
                    <SlideInfoWrapper>
                        <SlideHeader>FILIPIN Рекомендует</SlideHeader>
                        <SlideText>
                            Всем привет, Дамы и Господа, с вами, как всегда, FILIPIN. GTA V-MP - Единственный в своём роде GTA 5 RP сервер! Пока кто-то играет в SAMP ты можешь стать одним из первых, кто отыграет роль полицейского в GTA V, а может ты хочешь стать байкером или вступить в банду?
                        </SlideText>
                    </SlideInfoWrapper>
                    <ButtonWrapper>
                        <CopyPromoWrapper>
                            <PromoInstruction>
                                Копируй мой промокод ниже и вводи его в игре для получения
                            </PromoInstruction>
                            <InputWrapper onClick={copyPromo}>
                                <PromoField
                                    id={'#input'}
                                    readOnly={true}
                                    value={'PROMOCODE'}
                                />
                            </InputWrapper>
                            <PromoDesc>
                                $10000 и VIP Gold на 7 дней
                            </PromoDesc>
                        </CopyPromoWrapper>
                        <Button onClick={onHowScroll}>
                            <ButtonText>
                                Начать играть
                            </ButtonText>
                        </Button>
                    </ButtonWrapper>
                </TextWrapper>
            </SlideWrapper>
        </SliderSection>
    );
};
