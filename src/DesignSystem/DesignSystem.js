import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import { Flex } from '../fork-ui/core';

import ColorPalette from './ColorPalette';

const DesignSystem = ({}) => {
  return (
    <Flex style={{ margin: '1rem' }}>
      <Flex>
        <ColorPalette />
      </Flex>
    </Flex>
  );
};

export default DesignSystem;
