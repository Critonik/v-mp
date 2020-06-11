import React from 'react';
import Steps from '../Steps/Steps';
import { MainBlockWrapper } from './MainBlockStyles';
import Servers from '../Servers/Servers';

const MainBlock: React.FC = () => {
  return (
      <MainBlockWrapper>
        <Steps/>
        <Servers/>
      </MainBlockWrapper>
  )
};

export default MainBlock;