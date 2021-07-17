import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Select } from '@fork-ui/core';
import { User } from '@fork-ui/icons/lazy';

export default () => {
  return (
    <Wrapper>
      <Select>Vietnam - VND</Select>
      <Select>
        <User className="mr-2" />
        <span>United State - USD</span>
      </Select>
    </Wrapper>

  );
};
