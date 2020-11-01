import React from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import { Button } from '@@/fork-ui/src/components/core';
import {
  Cast,
  Calendar,
  Camera,
  Inbox,
  Check,
  Ban,
} from '@@/fork-ui/src/components/icons';

const Demo = () => (
  <Wrapper>
    <Button>Basic</Button>
    <Button primary>Primary</Button>
    <Button transparent>Transparent</Button>
    <Button disabled circle icon={<Ban />} />
    <Button loading circle icon={<Check />} />
    <Button circle icon={<Cast />} />
    <Button circle transparent icon={<Calendar />} />
  </Wrapper>
);

export default Demo;
