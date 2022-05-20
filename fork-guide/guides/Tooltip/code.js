export const Custom = {
  code: `import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '@fork-guide/components';
import { Tooltip, Button } from 'fork-design';

const PrimaryTooltip = styled(Tooltip)\`
  .tippy-content {
    background-color: var(--primary);
    color: var(--white);
  }
  .tippy-arrow {
    color: var(--primary);
  }
\`;

const DangerTooltip = styled(Tooltip)\`
  .tippy-content {
    background-color: var(--danger);
    color: var(--white);
  }
  .tippy-arrow {
    color: var(--danger);
  }
\`;

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
`,
  demoName: 'Custom',
}

export const Placement = {
  code: `import React from 'react';
import { Tooltip, Button } from 'fork-design';

export default () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex">
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Tooltip placement="top-start" title="top-start">
          <Button style={{ width: '3em' }} className="m-2">TL</Button>
        </Tooltip>
        <Tooltip placement="top" title="top">
          <Button style={{ width: '3em' }} className="m-2">T</Button>
        </Tooltip>
        <Tooltip placement="top-end" title="top-end">
          <Button style={{ width: '3em' }} className="m-2">TR</Button>
        </Tooltip>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
      </div>

      <div className="flex">
        <Tooltip placement="left-start" title="left-start">
          <Button style={{ width: '3em' }} className="m-2">LT</Button>
        </Tooltip>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Tooltip placement="right-start" title="right-start">
          <Button style={{ width: '3em' }} className="m-2">RT</Button>
        </Tooltip>
      </div>

      <div className="flex">
        <Tooltip placement="left" title="left">
          <Button style={{ width: '3em' }} className="m-2">L</Button>
        </Tooltip>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Tooltip placement="right" title="right">
          <Button style={{ width: '3em' }} className="m-2">R</Button>
        </Tooltip>
      </div>

      <div className="flex">
        <Tooltip placement="left-end" title="left-end">
          <Button style={{ width: '3em' }} className="m-2">LB</Button>
        </Tooltip>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Tooltip placement="right-end" title="right-end">
          <Button style={{ width: '3em' }} className="m-2">RB</Button>
        </Tooltip>
      </div>

      <div className="flex">
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Tooltip placement="bottom-start" title="bottom-start">
          <Button style={{ width: '3em' }} className="m-2">BL</Button>
        </Tooltip>
        <Tooltip placement="bottom" title="bottom">
          <Button style={{ width: '3em' }} className="m-2">B</Button>
        </Tooltip>
        <Tooltip placement="bottom-end" title="bottom-end">
          <Button style={{ width: '3em' }} className="m-2">BR</Button>
        </Tooltip>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
      </div>
    </div>
  );
};
`,
  demoName: 'Placement',
}

export const Tooltip = {
  code: `import React from 'react';
import { Wrapper } from '@fork-guide/components';

export default () => {
  return (
    <Wrapper span="20px">
      <div
        className="tippy-box ftooltip"
        data-placement="top"
        style={{ maxWidth: '200px', boxShadow: 'var(--popover-box-shadow)' }}
      >
        <div className="tippy-content">
          <b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry
        </div>
        <div
          className="tippy-arrow"
          style={{
            position: 'absolute',
            left: '0px',
            transform: 'translate3d(90px, 0px, 0px)',
          }}
        />
      </div>
      <div
        className="tippy-box ftooltip"
        data-placement="top"
      >
        <div className="tippy-content"
          style={{
            maxWidth: '200px',
            backgroundColor: 'var(--skeleton-color)',
            color: 'var(--color)',
          }}
        >
          <b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry
        </div>
        <div
          className="tippy-arrow"
          style={{
            position: 'absolute',
            left: '0px',
            transform: 'translate3d(170px, 0px, 0px)',
            color: 'var(--skeleton-color)',
          }}
        />
      </div>
    </Wrapper>
  );
};
`,
  demoName: 'Tooltip',
}

