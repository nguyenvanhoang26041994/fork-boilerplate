import React  from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import { Chip } from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <Wrapper>
      <Chip label="Hoàng Nguyễn" />
      <Chip rounded  color="#ec4c1c" label="Sơn Lê" />
      <Chip rounded color="teal" label="Owner" />
    </Wrapper>
  );
};

export default Demo;
