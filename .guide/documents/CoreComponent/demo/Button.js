import React from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import { Button } from '@@/fork-ui/src/components/core';
import {
  Cast,
  Calendar,
  Camera,
  Inbox,
  Check
} from '@@/fork-ui/src/components/icons';

const Demo = () => (
  <Wrapper>
    <Button>Basic</Button>
    <Button rounded>Rounded</Button>
    <Button rounded primary>Primary</Button>
    <Button outlined rounded danger>Outlined</Button>
    <Button disabled circle icon={<Check />} />
    <Button loading circle icon={<Check />} />
    <Button circle icon={<Cast />} />
    <Button circle glassed icon={<Camera />} />
    <Button circle primary outlined icon={<Inbox />} />
    <Button circle transparent icon={<Calendar />} />
  </Wrapper>
);

export default Demo;
