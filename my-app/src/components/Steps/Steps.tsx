import React from 'react';
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

interface ISteps {
    title: string;
    stepOne: string;
    stepTwo?: string;
    buttonText: string
    icon: string;
    image: string;
}

const stepData: ISteps[] = [
    {
        title: 'Шаг',
        stepOne: 'Скачать и установить чистую GTA 5',
        stepTwo: 'Можно использовать пиратскую версию игры',
        buttonText: 'Скачать бесплатно',
        icon: downloadIcon,
        image: step1,
    },
    {
        title: 'Шаг',
        stepOne: 'Скачать и установить V-MP',
        buttonText: 'Скачать V-MP',
        icon: downloadIcon,
        image: step2,
    },
    {
        title: 'Шаг',
        stepOne: 'Выбрать сервер и начать игру',
        buttonText: 'Выбрать сервер',
        icon: www,
        image: step3,
    },
];

const Steps: React.FC = () => {

    const createSteps = (data: ISteps[]) => {
        return data.map((item, idx) => {
            return (
                <CardWrapper key={`create + ${idx}`}>
                    <StepWrapper>
                        <StepHeader count={idx + 1}>{item.title}</StepHeader>
                        <div className={'step-one'}>{item.stepOne}</div>
                        {item.stepTwo && <div className={'step-two'}>{item.stepTwo}</div>}
                        <DownloadButton ><StepButtonText icon={item.icon}>{item.buttonText}</StepButtonText></DownloadButton>
                    </StepWrapper>
                    <img src={item.image} alt={item.title}/>
                </CardWrapper>
            );
        });
    };

    return (
        <StepsWrapper id={'#how'}>
            <StepsHeader>
                Как начать играть?
            </StepsHeader>
            <ContentWrapper>
                {createSteps(stepData)}
                <Button><ButtonText>Видео-установка</ButtonText></Button>
            </ContentWrapper>
            <StepsGuy src={howtostart} alt={'guy'}/>
        </StepsWrapper>
    );
};

export default Steps;