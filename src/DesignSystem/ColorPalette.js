import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';

import { Flex } from '../fork-ui/core';

const ColorCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: #fff;
  color: #000;
`;

const Color = styled.div`
  width: 5rem;
  height: 7rem;
  background-color: ${props => props.value};
`;

const ColorCard = () => {
  return (
    <ColorCardWrapper>
      <Flex>
        <Color value="#5d9cec" />
        <Color value="#4a89dc" />
      </Flex>
      <Flex style={{ height: '2rem' }} justify="center" items="center">
        BLUE
      </Flex>
    </ColorCardWrapper>
  );
};

const ColorPalette = ({}) => {
  return (
    <div>
      <ColorCard />
      <ColorCard />
      <ColorCard />
      <ColorCard />
    </div>
  );
};

export default ColorPalette;
