import React, { useEffect, useState } from 'react';
import {
    ConnectButton,
    CurrentServerWrap,
    ServerHeader,
    ServerRow,
    ServerSectionWrapper,
    ServersWrapper,
    ServerNum,
    ServerNameWrap,
    ServerName,
    PlayerCount,
    ProgressBar,
    MiddleLine,
    Progress
} from './ServersStyles';
import keyboard from '../../icons/keyboard.svg';
import micro from '../../icons/micro.svg';
import { getDataFromServer } from '../../stubs/getDataFromServer';

interface IDataFromServer {
    ServerName: string;
    MaxPlayers: number;
    PlayerCount: number;
}

interface IServerData {
    num: number;
    name: string;
    pplCount: number;
    maxPpl: number;
    icon: string;
}

interface IConvertData {
    serverData: IDataFromServer;
    serverName: string;
    count: number;
    icon: string;
}

const firstServer = 'http://185.71.66.93:4490/info/';
const secondServer = 'http://185.71.66.93:4491/info/';


const Servers: React.FC = () => {

    const [serverOneData, setServerOneData] = useState<IServerData>({
        num: 0,
        name: 'defalut name',
        pplCount: 0,
        maxPpl: 0,
        icon: ''
    });
    const [serverTwoData, setServerTwoData] = useState<IServerData>({
        num: 0,
        name: 'defalut name',
        pplCount: 0,
        maxPpl: 0,
        icon: ''
    });
    const [isLoaded, setLoaded] = useState<boolean>(false);

    const convertDataFromServer = ({serverData, serverName, count, icon}: IConvertData) => {
        return {
            num: count,
            name: serverName,
            maxPpl: serverData.MaxPlayers,
            pplCount: serverData.PlayerCount,
            icon,
        };
    }

    useEffect(() => {
        getDataFromServer(firstServer).then((resolve) => {
            const result = convertDataFromServer({
                serverData: resolve,
                serverName: 'V-MP Server 01',
                count: 1,
                icon: keyboard,
            });
            setServerOneData(result)
        });
        getDataFromServer(secondServer).then((resolve) => setServerTwoData(convertDataFromServer({
            serverData: resolve,
            count: 2,
            serverName: 'V-MP Server 02',
            icon: micro,
        })));
        setLoaded(true);
    }, []);

    const createServers = (data: IServerData) => {
        return (
            <CurrentServerWrap>
                <ServerRow>
                    <ServerNum>{data.num}</ServerNum>
                    <ServerNameWrap>
                        <ServerName img={data.icon}>
                            {data.name}
                        </ServerName>
                        <PlayerCount>
                            Игроков: {`${data.pplCount}/${data.maxPpl}`}
                        </PlayerCount>
                        <ProgressBar>
                            <Progress style={{width: `${( data.pplCount / data.maxPpl) * 100}%`}}/>
                        </ProgressBar>
                    </ServerNameWrap>
                </ServerRow>
                <ConnectButton type={'button'}>
                    Подключиться
                </ConnectButton>
            </CurrentServerWrap>
        )
    }

    return (
        isLoaded ?
        <ServerSectionWrapper id={'serverlist'}>
            <ServerHeader>Список серверов</ServerHeader>
            <ServersWrapper>
                {createServers(serverOneData)}
                <MiddleLine/>
                {createServers(serverTwoData)}
            </ServersWrapper>
        </ServerSectionWrapper>
        : <></>
    );
};

export default Servers;
