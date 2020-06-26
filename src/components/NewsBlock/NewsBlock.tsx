import React, { useEffect, useState } from 'react';
import { getDataFromServer } from '../../stubs/getDataFromServer';
import {
    DateField,
    HeadAndDateWrap,
    InnerOneNewsWrapper,
    NewsBlockSection,
    NewsHeader,
    NewsText,
    NewsWrapper,
    OneNewsHead,
    OneNewsWrapper,
    TextWrapper,
    NewsLink
} from './NewsBlockStyles';
import defaultNewsPicture from '../../icons/defaultNewsPicture.svg';
import convertTimestamp from '../../stubs/convertUnixTime';


interface IVKImage {
    height: string;
    url: string;
    width: string;
    type: string; //need type r
}

interface IPostImages {
    photo: {
        sizes: IVKImage[];
    }
}


interface IPostDate {
    text: string;
    attachments: IPostImages[];
    date: number;
}


const NewsBlock: React.FC = () => {

    const [vkData, setVkData] = useState<IPostDate[]>([]);

    useEffect(() => {
        getDataFromServer('/vk').then((resolve) => setVkData(resolve.response.items));
    }, []);

    const createNews = () => {
        return vkData.map((post, idx) => {
            const findImage = post.attachments[0].photo.sizes.find(item => item.type === 'r');
            return (
                <OneNewsWrapper key={idx}>
                    <InnerOneNewsWrapper>
                        <img loading={'lazy'} className={'news-image'} src={findImage ? findImage.url : defaultNewsPicture} alt={'vk news'}/>
                        <TextWrapper>
                            <HeadAndDateWrap>
                                <OneNewsHead>Обновление!</OneNewsHead>
                                <DateField>{convertTimestamp(post.date)}</DateField>
                            </HeadAndDateWrap>
                            <NewsText>
                                {post.text}
                            </NewsText>
                        </TextWrapper>
                    </InnerOneNewsWrapper>
                </OneNewsWrapper>
            );
        });
    };

    return (
      <NewsBlockSection id={'#news'}>
          <NewsHeader>Новости</NewsHeader>
          <NewsWrapper>
              {createNews()}
              <NewsLink href={'https://vk.com/gta5m'} target="_blank">Читать другие новости</NewsLink>
          </NewsWrapper>
      </NewsBlockSection>
    );
};

export default NewsBlock;