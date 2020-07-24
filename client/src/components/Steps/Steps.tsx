import React, { useState } from 'react';
import {
    Button,
    ButtonText,
    CardWrapper,
    ContentWrapper,
    DownloadButton, StepButtonText,
    StepHeader, StepsGuy,
    StepsHeader,
    StepsWrapper,
    StepWrapper
} from './StepsStyles';
import downloadIcon from '../../icons/downloadIcon.svg';
import step1 from '../../icons/step1.svg';
import step2 from '../../icons/step2.svg';
import step3 from '../../icons/step3.svg';
import www from '../../icons/www.svg';
import howtostart from '../../icons/howtostart.svg';
import VideoModal from '../VideoModal/VideoModal';

interface ISteps {
    title: string;
    stepOne: string;
    stepTwo?: string;
    buttonText: string
    icon: string;
    image: string;
    href: string;
}

const stepData: ISteps[] = [
    {
        title: 'Шаг',
        stepOne: 'Скачать и установить чистую GTA 5',
        stepTwo: 'Можно использовать пиратскую версию игры',
        buttonText: 'Скачать бесплатно',
        icon: downloadIcon,
        image: step1,
        href: 'http://gta5m.ru/files/repack/217-gta-5-grand-theft-auto-v-v-101868-150-2020-pc-repack-ot-xatab.html',
    },
    {
        title: 'Шаг',
        stepOne: 'Скачать и установить V-MP',
        buttonText: 'Скачать V-MP',
        icon: downloadIcon,
        image: step2,
        href: 'http://forum.v-mp.ru/index.php?/topic/43109-как-начать-играть-в-gta-5-rp/'
    },
    {
        title: 'Шаг',
        stepOne: 'Выбрать сервер и начать игру',
        buttonText: 'Выбрать сервер',
        icon: www,
        image: step3,
        href: '',
    },
];

const Steps: React.FC = () => {
    const blockHeight = document.documentElement.clientHeight;
    const [isVideo, openVideo] = useState<boolean>(false);

    const createSteps = (data: ISteps[]) => {
        return data.map((item, idx) => {
            return (
                <CardWrapper key={`create + ${idx}`}>
                    <StepWrapper>
                        <StepHeader count={idx + 1}>{item.title}</StepHeader>
                        <div className={'step-one'}>{item.stepOne}</div>
                        {item.stepTwo && <div className={'step-two'}>{item.stepTwo}</div>}
                        <DownloadButton><StepButtonText target={'_blank'} href={item.href} icon={item.icon}>{item.buttonText}</StepButtonText></DownloadButton>
                    </StepWrapper>
                    <img className={'step-image'} loading={'lazy'} src={item.image} alt={item.title}/>
                </CardWrapper>
            );
        });
    };

    return (
        <StepsWrapper
            id={'#how'}
        >
            <StepsHeader>
                Как начать играть?
            </StepsHeader>
            <ContentWrapper>
                {createSteps(stepData)}
                <Button
                    onClick={() => openVideo(true)}
                >
                    <ButtonText>
                        Видео-установка
                    </ButtonText>
                </Button>
            </ContentWrapper>
            <StepsGuy loading={'lazy'} src={howtostart} alt={'guy'}
                      style={{height: `${blockHeight - 200}px`,
                maxHeight: `${blockHeight}px`}}/>
            {isVideo &&
            <VideoModal
                closeAction={() => openVideo(false)}>
                <iframe title={'steps video'}  width="80%" height="80%" src="https://www.youtube.com/embed/_6YCoyhT5L0" frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
            </VideoModal>
            }
        </StepsWrapper>
    );
};

export default Steps;