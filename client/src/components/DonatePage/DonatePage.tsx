import React, { useReducer, useState } from 'react';
import { initialState, reducer } from '../../stubs/linkStore';
import { Header } from '../HeaderBlock/HeaderLayout';
import Footer from '../Footer/Footer';
import {
    BackImage,
    Button,
    ButtonText,
    DonateForm,
    DonateFormWrapper,
    DonateHeader, DonatePageBody,
    DonatePageWrap,
    LinkText,
    LinkToMainPage,
    RuleLink,
    SelectInput,
    SelectOption,
    SelectOptionWrapper,
    SelectWrapper,
    TextInstruction
} from './DonatePageStyles';
import donateBg from '../../icons/donateBg.svg';
import down from '../../icons/down.svg';
import user from '../../icons/user.svg';
import dollar from '../../icons/dollar.svg';


const DonatePage: React.FC = () => {

    const [, dispatch] = useReducer(reducer, initialState);

    const [isOpen, setOpen] = useState<boolean>(false);

    const [, setOption] = useState<number>(0);
    const [sum, setSum] = useState<number>();
    const [name, setName] = useState<string>();
    const [optionValue, setOptionValue] = useState<string>('Выберите сервер');


    const servers = ['V-MP Server 01', 'V-MP Server 02'];


    const changeSelectOption = (idx: number, value: string) => {
        setOption(idx);
        setOptionValue(value);
        setOpen(false);
    }

    const createOption = () => {
        return servers.map((item, idx) => {
            return (
                <SelectOption
                    key={idx}
                    onClick={() => changeSelectOption(idx, item)}
                >
                    {item}
                </SelectOption>
            );
        });
    };

    const onSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const newUrl = new URL(`https://unitpay.ru/pay/80681-cacec/card?account=${name}&sum=${sum}`);
        window.location.href = newUrl.toString();
    }

    return (
        <DonatePageBody>
            <Header disable={true} link={6} setLink={dispatch}/>
                <DonatePageWrap>
                    <DonateFormWrapper>
                        <DonateForm onSubmit={onSubmit}>
                            <LinkToMainPage
                                to={'/'}
                            >
                                <LinkText>
                                    На главную
                                </LinkText>
                            </LinkToMainPage>
                            <DonateHeader>
                                Пополнение баланса
                            </DonateHeader>
                            <TextInstruction>
                                Заполните необходимые данные
                            </TextInstruction>
                            <SelectWrapper icon={down}>
                                <SelectInput onClick={() => setOpen(!isOpen)} value={optionValue} readOnly={true}/>
                                {
                                    isOpen
                                    &&
                                    <SelectOptionWrapper>
                                        {createOption()}
                                    </SelectOptionWrapper>
                                }
                            </SelectWrapper>
                            <SelectWrapper icon={user}>
                                <SelectInput
                                    placeholder={'Ваш никнейм'}
                                    defaultValue={name}
                                    onChange={(event: React.FormEvent<HTMLInputElement>) => {
                                        setName(event.currentTarget.value)
                                    }}
                                />
                            </SelectWrapper>
                            <SelectWrapper icon={dollar}>
                                <SelectInput
                                    placeholder={'Сумма'}
                                    type={'number'}
                                    defaultValue={sum}
                                    onChange={(event: React.FormEvent<HTMLInputElement>) => {
                                        setSum(Number(event.currentTarget.value))
                                    }}
                                />
                            </SelectWrapper>
                            <Button
                                type={'submit'}
                                disabled={(sum === undefined || name === undefined || optionValue ==='Выберите сервер')}
                            >
                                <ButtonText>
                                    Пополнить
                                </ButtonText>
                            </Button>
                            <RuleLink
                                target={'_blank'}
                                href={'https://forum.v-mp.ru/index.php?/topic/651-информация-о-донате/'}
                            >
                                На что можно обменять донат?
                            </RuleLink>
                            <RuleLink
                                target={'_blank'}
                                href={'https://forum.v-mp.ru/index.php?/topic/651-информация-о-донате/&tab=comments#comment-199560'}
                            >
                                Экономь с купонами
                            </RuleLink>
                            <RuleLink
                                style={{opacity: '0.5', textDecoration: 'none'}}
                                target={'_blank'}
                                href={'https://forum.v-mp.ru/index.php?/topic/11685-общие-правила-проекта/'}
                            >
                                Вы автоматически соглашаетесь с<br/> <span style={{textDecoration: 'underline'}}>правилами сервера</span>
                            </RuleLink>
                        </DonateForm>
                        <BackImage src={donateBg} alt={''}/>
                    </DonateFormWrapper>
                </DonatePageWrap>
            <Footer style={{backgroundColor: '#FBFBFB', backgroundImage: 'none'}} link={6} setLink={dispatch}/>
        </DonatePageBody>
    );
};

export default DonatePage;