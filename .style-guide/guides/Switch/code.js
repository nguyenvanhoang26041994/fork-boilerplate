export const Color = {
  code: `import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Switch } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper>
      <Switch color="var(--green)" defaultChecked />
      <Switch color="red" defaultChecked />
      <Switch color="#ff5722" loading defaultChecked />
    </Wrapper>
  );
};
`,
  demoName: 'Color',
}

export const Controlled = {
  code: `import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Switch } from '@fork-ui/core';

export default () => {
  const [{ checked, onChange }] = Switch.useSwitch(false);

  return (
    <Wrapper>
      <Switch
        checked={checked}
        onChange={onChange}
      />
      <Switch
        checked={checked}
        onChange={onChange}
      />
    </Wrapper>
  );
};
`,
  demoName: 'Controlled',
}

export const Disabled = {
  code: `import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Switch } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper>
      <Switch disabled />
      <Switch disabled checked />
      <Switch disabled checked loading />
    </Wrapper>
  );
};
`,
  demoName: 'Disabled',
}

export const Loading = {
  code: `import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Switch } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper>
      <Switch loading />
      <Switch loading checked />
    </Wrapper>
  );
};
`,
  demoName: 'Loading',
}

export const Size = {
  code: `import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Switch } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper>
      <Switch defaultChecked />
      <Switch defaultChecked size={35} />
      <Switch defaultChecked size={50}/>
    </Wrapper>
  );
};
`,
  demoName: 'Size',
}

export const Switch = {
  code: `import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Switch } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper>
      <Switch defaultChecked />
      <Switch disabled defaultChecked />
      <Switch loading checked />
    </Wrapper>
  );
};
`,
  demoName: 'Switch',
}

