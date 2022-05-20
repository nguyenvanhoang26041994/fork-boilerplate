import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '@fork-guide/components';
import { Tooltip, Button } from 'fork-design';

const PrimaryTooltip = styled(Tooltip)`
  .tippy-content {
    background-color: var(--primary);
    color: var(--white);
  }
  .tippy-arrow {
    color: var(--primary);
  }
`;

const DangerTooltip = styled(Tooltip)`
  .tippy-content {
    background-color: var(--danger);
    color: var(--white);
  }
  .tippy-arrow {
    color: var(--danger);
  }
`;

export default () => {
  return (
    <Wrapper>
      <PrimaryTooltip
        title={(
          <div>
            <b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry
          </div>
        )}
      >
        <Button color="primary">Hover me</Button>
      </PrimaryTooltip>
      <DangerTooltip
        title={(
          <div>
            <b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry
          </div>
        )}
      >
        <Button color="danger">Hover me</Button>
      </DangerTooltip>
    </Wrapper>
  );
};
