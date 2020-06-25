import React from 'react';
import vk from '../../icons/vk.svg';
import discord from '../../icons/discord.svg';
import youtube from '../../icons/youtube.svg';

import {
    JoinBlockSection,
    JoinBlockWrapper,
    JoinHeader,
    OneSocialWrapper,
    SocialHead,
    SocialWrapper,
    SocialImageWrapper,
    SubscribeButton
} from './JoinBlockStyles';

interface ISocial {
    title: string;
    color: string;
    image: string;
    link: string;
}

const data: ISocial[] = [
    {
        title: 'Группа Вконтакте',
        color: '#4E8EF3',
        image: vk,
        link: 'https://vk.com/gta5m'
    },
    {
        title: 'YouTube канал',
        color: '#FF0000',
        image: youtube,
        link: 'https://www.youtube.com/playmp',
    },
    {
        title: 'Discord канал',
        color: '#7289DA',
        image: discord,
        link: 'https://discord.com/invite/dyUCHmM'
    },
]

const JoinBlock: React.FC = () => {

    const createSocial = () => {
      return data.map((item, idx) => {
          return (
              <OneSocialWrapper key={idx}>
                  <SocialHead>{item.title}</SocialHead>
                  <SocialImageWrapper socialColor={item.color}>
                      <img loading={'lazy'} src={item.image} alt={''} />
                  </SocialImageWrapper>
                  <SubscribeButton href={`${item.link}`} target={'_blank'}>Присоединяйтесь</SubscribeButton>
              </OneSocialWrapper>
          );
      });
    };

    return (
        <JoinBlockSection>
            <JoinBlockWrapper>
                <JoinHeader>Присоединяйтесь к нам</JoinHeader>
                <SocialWrapper>
                    {createSocial()}
                </SocialWrapper>
            </JoinBlockWrapper>
        </JoinBlockSection>
    );
};
export default JoinBlock;