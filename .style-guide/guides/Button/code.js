export const Bordered = {
  code: `import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Button } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper>
      <Button border="solid">Normal</Button>
      <Button border="solid" color="primary">Primary</Button>
      <Button border="dashed" color="danger">Danger</Button>
      <Button border="dashed" color="transparent">Transparent</Button>
    </Wrapper>
  );
};
`,
  demoName: 'Bordered',
}

export const Button = {
  code: `import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Button, ButtonGroup } from '@fork-ui/core';
import { Power, Message, Bell } from '@fork-ui/icons/lazy';

export default () => {
  return (
    <Wrapper className="mb-5">
      <Button>Basic</Button>
      <Button loading rounded icon={<Power />} />
      <Button rounded color="primary">Primary</Button>
      <Button border="dashed" color="danger">Danger</Button>
      <Button rounded icon={<Power />} />
      <ButtonGroup>
        <Button color="primary" icon={<Power />} />
        <Button color="primary" icon={<Message />} />
        <Button color="primary" icon={<Bell />} />
      </ButtonGroup>
    </Wrapper>
  );
};
`,
  demoName: 'Button',
}

export const Color = {
  code: `import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Button } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper>
      <Button>Basic</Button>
      <Button color="primary">Primary</Button>
      <Button color="danger">Danger</Button>
      <Button color="transparent">Transparent</Button>
    </Wrapper>
  );
};
`,
  demoName: 'Color',
}

export const Custom = {
  code: `import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '@style-guide/components';
import { Button } from '@fork-ui/core';

const GradientButton = styled(Button)\`
  border-color: transparent;
  background-size: 200% auto;
  transition: 0.5s;
  color: var(--white);

  &:hover,
  &:focus {
    border-color: transparent;
    background-position: right center;
  }
\`;

const BlueGradientButton = styled(GradientButton)\`
  background-image: linear-gradient(to right, #1FA2FF 0%, #12D8FA  51%, #1FA2FF  100%);
\`;
const RedGradientButton = styled(GradientButton)\`
  background-image: linear-gradient(to right, #D31027 0%, #EA384D  51%, #D31027  100%);
\`;
const OrangeGradientButton = styled(GradientButton)\`
  background-image: linear-gradient(to right, #FF8008 0%, #FFC837  51%, #FF8008  100%);
\`;

export default () => {
  return (
    <Wrapper>
      <BlueGradientButton>HOVER ME</BlueGradientButton>
      <RedGradientButton>HOVER ME</RedGradientButton>
      <OrangeGradientButton>HOVER ME</OrangeGradientButton>
    </Wrapper>
  );
};
`,
  demoName: 'Custom',
}

export const Disabled = {
  code: `import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Button } from '@fork-ui/core';
import { Cast } from '@fork-ui/icons/lazy';

export default () => {
  return (
    <Wrapper>
      <Button border="solid" disabled>Basic</Button>
      <Button disabled border="dashed" color="primary">Primary</Button>
      <Button disabled color="primary">Primary</Button>
      <Button disabled color="danger">Danger</Button>
      <Button disabled rounded icon={<Cast />} />
    </Wrapper>
  );
};
`,
  demoName: 'Disabled',
}

export const FluidGroupButton = {
  code: `import React from 'react';
import { Button, ButtonGroup } from '@fork-ui/core';

export default () => {
  return (
    <ButtonGroup fluid>
      <Button>
        FLUID BUTTON ONE
      </Button>
      <Button>
        FLUID BUTTON TWO
      </Button>
      <Button>
        FLUID BUTTON THREE
      </Button>
      <Button>
        FLUID BUTTON FOUR
      </Button>
      <Button>
        FLUID BUTTON FIVE
      </Button>
    </ButtonGroup>
  );
};
`,
  demoName: 'Fluid Group Button',
}

export const GroupButton = {
  code: `import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Button, ButtonGroup } from '@fork-ui/core';
import { Power, Message, Bell } from '@fork-ui/icons/lazy';

export default () => {
  return (
    <Wrapper>
      <ButtonGroup>
        <Button icon={<Power />} />
        <Button icon={<Message />} />
        <Button icon={<Bell />} />
      </ButtonGroup>
      <ButtonGroup>
        <Button color="primary" icon={<Power />} />
        <Button color="primary" icon={<Message />} />
        <Button color="primary" icon={<Bell />} />
      </ButtonGroup>
      <ButtonGroup color="danger">
        <Button color="primary" icon={<Power />} />
        <Button color="danger" icon={<Message />} />
        <Button icon={<Bell />} />
      </ButtonGroup>
    </Wrapper>
  );
};
`,
  demoName: 'Group Button',
}

export const Size = {
  code: `import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Button } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper style={{ display: 'block' }}>
      <Button size="0.85rem">0.85rem</Button>
      <Button size="1.5em">1.5em</Button>
      <Button size="25px">25px</Button>
    </Wrapper>
  );
};
`,
  demoName: 'Size',
}

export const WithBadge = {
  code: `import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Button, Badge } from '@fork-ui/core';
import { Bell, Inbox } from '@fork-ui/icons/lazy';

export default () => {
  return (
    <Wrapper span="20px">
      <Badge.Counter count={2}>
        <Button icon={<Bell />} />
      </Badge.Counter>
      <Badge.Counter overlap count={9}>
        <Button rounded icon={<Inbox />} />
      </Badge.Counter>
    </Wrapper>
  );
};
`,
  demoName: 'With Badge',
}

export const WithIcon = {
  code: `import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Button } from '@fork-ui/core';
import { Power } from '@fork-ui/icons/lazy';

export default () => {
  return (
    <Wrapper>
      <Button icon={<Power />} />
      <Button rounded icon={<Power />} />
      <Button>
        <Power />
        <span>Shutdown</span>
      </Button>
      <Button>
        <span>Shutdown</span>
        <Power />
      </Button>
      <Button>
        <Power />
        <span>Shutdown</span>
        <Power />
      </Button>
    </Wrapper>
  );
};
`,
  demoName: 'With Icon',
}

export const WithLoader = {
  code: `import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Button } from '@fork-ui/core';
import { Power } from '@fork-ui/icons/lazy';

export default () => {
  return (
    <Wrapper>
      <Button loading>Basic</Button>
      <Button loading rounded icon={<Power />} />
    </Wrapper>
  );
};
`,
  demoName: 'With Loader',
}

