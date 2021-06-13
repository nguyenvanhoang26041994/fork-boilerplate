export const Button = {
  code: `import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Button, ButtonGroup } from '@fork-ui/core';
import { Power, Message, Bell } from '@fork-ui/icons/lazy';

export default () => {
  return (
    <Wrapper className="mb-5">
      <Button>Basic</Button>
      <Button color="primary">Primary</Button>
      <Button shape="rounded" color="primary">Primary</Button>
      <Button color="danger">Danger</Button>
      <Button shape="circle" icon={<Power />} />
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
      <Button />
    </Wrapper>
  );
};
`,
  demoName: 'Color',
}

export const Size = {
  code: `import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Button } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper>
      <Button />
    </Wrapper>
  );
};
`,
  demoName: 'Size',
}

