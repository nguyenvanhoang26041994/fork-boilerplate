import React from 'react';
import styled from 'styled-components';

import Wrapper from '../../shared/Wrapper';
import { Button } from '@fork-ui/components/core';
import { Power, Copy } from '@fork-ui/components/icons';

const DangerGhost = styled(Button)`
  &:hover,
  &:focus,
  &:disabled:hover,
  &:disabled:focus {
    color: var(--red);
  }
`;

const DangerTransparent = styled(Button)`
  &:hover,
  &:focus,
  &:disabled:hover,
  &:disabled:focus {
    color: var(--red);
    background-color: rgba(78,4,4,0.4);
  }
`;

const Demo = () => (
  <Wrapper>
    <Button ghost icon={<Power />} />
    <DangerGhost ghost icon={<Copy />} />
    <Button transparent>Transparent</Button>
    <DangerTransparent transparent> Danger Transparent</DangerTransparent>
  </Wrapper>
);

export default Demo;
