import React from 'react';
import Steps from '../Steps/Steps';
import { MainBlockWrapper } from './MainBlockStyles';

const MainBlock: React.FC = () => {
  return (
      <MainBlockWrapper>
        <Steps/>
      </MainBlockWrapper>
  )
};

export default MainBlock;