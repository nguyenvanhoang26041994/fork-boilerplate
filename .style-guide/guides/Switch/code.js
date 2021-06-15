export const Switch = {
  code: `import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Switch } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper>
      <Switch defaultChecked />
      <Switch />
      <Switch disabled />
      <Switch disabled defaultChecked />
      <Switch loading />
      <Switch loading checked />
    </Wrapper>
  );
};
`,
  demoName: 'Switch',
}
