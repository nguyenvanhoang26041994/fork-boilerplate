import React from 'react';
import {
  Button,
  Popover,
} from '@fork-ui/components/core';

import VerticalStepper from '../Stepper/Vertical';
import IconStepper from '../Stepper/Icon';

const OverlayContent = () => (
  <div className="p-5">
    <VerticalStepper />
  </div>
);

const OverlayContent2 = () => (
  <div className="p-5">
    <IconStepper />
  </div>
);

const Demo = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex">
        <Button
          disabled className="m-2"
          style={{ width: '3em', visibility: 'hidden' }}
        />
        <Popover absolute topStart overlay={<OverlayContent />}>
          <Button className="m-2" style={{ width: '3em' }}>
            TL
          </Button>
        </Popover>
        <Popover absolute top overlay={<OverlayContent2 />}>
          <Button className="m-2" style={{ width: '3em' }}>
            T
          </Button>
        </Popover>
        <Popover absolute topEnd overlay={<OverlayContent />}>
          <Button className="m-2" style={{ width: '3em' }}>
            TR
          </Button>
        </Popover>
        <Button
          disabled
          className="m-2"
          style={{ width: '3em', visibility: 'hidden' }}
        />
      </div>

      <div className="flex">
        <Popover absolute leftStart overlay={<OverlayContent2 />}>
          <Button className="m-2" style={{ width: '3em' }}>
            LT
          </Button>
        </Popover>
        <Button
          disabled
          className="m-2"
          style={{ width: '3em', visibility: 'hidden' }}
        />
        <Button
          disabled
          className="m-2"
          style={{ width: '3em', visibility: 'hidden' }}
        />
        <Button
          disabled
          className="m-2"
          style={{ width: '3em', visibility: 'hidden' }}
        />
        <Popover absolute rightStart overlay={<OverlayContent />}>
          <Button className="m-2" style={{ width: '3em' }}>
            RT
          </Button>
        </Popover>
      </div>

      <div className="flex">
        <Popover absolute left overlay={<OverlayContent2 />}>
          <Button className="m-2" style={{ width: '3em' }}>
            L
          </Button>
        </Popover>
        <Button
          disabled
          className="m-2"
          style={{ width: '3em', visibility: 'hidden' }}
        />
        <Button
          disabled
          className="m-2"
          style={{ width: '3em', visibility: 'hidden' }}
        />
        <Button
          disabled
          className="m-2"
          style={{ width: '3em', visibility: 'hidden' }}
        />
        <Popover right overlay={<OverlayContent />}>
          <Button className="m-2" style={{ width: '3em' }}>
            R
          </Button>
        </Popover>
      </div>

      <div className="flex">
        <Popover absolute leftEnd overlay={<OverlayContent2 />}>
          <Button className="m-2" style={{ width: '3em' }}>
            LB
          </Button>
        </Popover>
        <Button
          disabled
          className="m-2"
          style={{ width: '3em', visibility: 'hidden' }}
        />
        <Button
          disabled
          className="m-2"
          style={{ width: '3em', visibility: 'hidden' }}
        />
        <Button
          disabled
          className="m-2"
          style={{ width: '3em', visibility: 'hidden' }}
        />
        <Popover absolute rightEnd overlay={<OverlayContent />}>
          <Button className="m-2" style={{ width: '3em' }}>
            RB
          </Button>
        </Popover>
      </div>

      <div className="flex">
        <Button
          disabled
          className="m-2"
          style={{ width: '3em', visibility: 'hidden' }}
        />
        <Popover absolute bottomStart overlay={<OverlayContent2 />}>
          <Button className="m-2" style={{ width: '3em' }}>
            BL
          </Button>
        </Popover>
        <Popover absolute bottom overlay={<OverlayContent />}>
          <Button className="m-2" style={{ width: '3em' }}>
            B
          </Button>
        </Popover>
        <Popover absolute bottomEnd overlay={<OverlayContent2 />}>
          <Button className="m-2" style={{ width: '3em' }}>
            BR
          </Button>
        </Popover>
        <Button
          disabled
          className="m-2"
          style={{ width: '3em', visibility: 'hidden' }}
        />
      </div>
    </div>
  );
};

export default Demo;
