import React from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import { Button } from '@@/fork-ui/src/components/core';
import {
  Cast,
  Calendar,
  Camera,
  Inbox,
  PlaneDeparture,
  Rotate2,
  Check
} from '@@/fork-ui/src/components/icons';

const Demo = () => (
  <Wrapper>
    <Button>Basic</Button>
    <Button rounded primary>Primary</Button>
    <Button bordered rounded primary>Bordered</Button>
    <Button transparent>Transparent</Button>
    <Button disabled circle icon={<Check />} />
    <Button loading circle icon={<Check />} />
    <Button circle icon={<PlaneDeparture />} />
    <Button circle icon={<Rotate2 />} />
    <Button circle primary outlined icon={<Inbox />} />
  </Wrapper>
);

export default Demo;
