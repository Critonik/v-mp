import React from 'react';
import Steps from '../Steps/Steps';
import { MainBlockWrapper } from './MainBlockStyles';
import Servers from '../Servers/Servers';
import NewsBlock from '../NewsBlock/NewsBlock';
import JoinBlock from '../JoinBlock/JoinBlock';

const MainBlock: React.FC = () => {
  return (
      <MainBlockWrapper>
        <Steps/>
        <Servers/>
        <NewsBlock/>
        <JoinBlock/>
      </MainBlockWrapper>
  )
};

export default MainBlock;