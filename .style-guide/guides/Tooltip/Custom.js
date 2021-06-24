import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '@style-guide/components';
import { Tooltip, Button } from '@fork-ui/core';

const BlurTooltip = styled(Tooltip)`
  .tippy-content {
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(5px);
  }
  .tippy-arrow {
    color: rgba(0, 0, 0, 0.6);
  }
`;

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
      <BlurTooltip
        title={(
          <div>
            <b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry
            <br />
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </div>
        )}
      >
        <Button>Hover me</Button>
      </BlurTooltip>
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
