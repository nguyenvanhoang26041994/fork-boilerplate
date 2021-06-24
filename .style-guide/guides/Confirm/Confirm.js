import React from 'react';
import { Wrapper, DemoContentV2 } from '@style-guide/components';
import { PureConfirm } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper>
      <PureConfirm className="w-full" style={{ boxShadow: 'var(--popover-box-shadow)' }}>
        <DemoContentV2 />
      </PureConfirm>
    </Wrapper>
  );
};
