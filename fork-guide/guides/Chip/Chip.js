import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Chip } from 'fork-design';

export default () => {
  return (
    <Wrapper>
      <Chip>ReactJS</Chip>
      <Chip>AngularJS</Chip>
      <Chip closable>VueJS</Chip>
      <Chip rounded closable>VueJS</Chip>
    </Wrapper>
  );
};
