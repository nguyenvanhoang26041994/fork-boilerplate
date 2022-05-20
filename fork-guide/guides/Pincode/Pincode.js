import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Pincode } from 'fork-design';
import { upperCase } from 'lodash';

const format = val => upperCase(val);

export default () => {
  return (
    <Wrapper>
      <Pincode
        length={4}
        format={format}
      />
    </Wrapper>
  );
};
