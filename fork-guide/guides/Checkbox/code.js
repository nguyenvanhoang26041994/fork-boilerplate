export const Checkbox = {
  code: `import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Checkbox } from 'fork-design';

export default () => {
  return (
    <Wrapper>
      <Checkbox />
      <Checkbox checked />
      <Checkbox disabled />
      <Checkbox disabled checked />
    </Wrapper>
  );
};
`,
  demoName: 'Checkbox',
}

export const Color = {
  code: `import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Checkbox } from 'fork-design';

export default () => {
  return (
    <Wrapper>
      <Checkbox color="pink" defaultChecked />
      <Checkbox color="var(--red-6)" defaultChecked />
      <Checkbox color="var(--green-6)" defaultChecked />
      <Checkbox color="#ff5722" defaultChecked />
      <Checkbox color="#ff5722" disabled defaultChecked />
    </Wrapper>
  );
};
`,
  demoName: 'Color',
}

export const Controlled = {
  code: `import React, { useState, useCallback } from 'react';
import { Wrapper } from '@fork-guide/components';
import { Checkbox } from 'fork-design';

export default () => {
  const [checked, setChecked] = useState(false);
  const onChange = useCallback(e => setChecked(e.target.checked), setChecked);

  return (
    <Wrapper>
      <Checkbox checked={checked} onChange={onChange} />
      <Checkbox checked={checked} onChange={onChange} />
    </Wrapper>
  );
};
`,
  demoName: 'Controlled',
}

export const Size = {
  code: `import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Checkbox } from 'fork-design';

export default () => {
  return (
    <Wrapper>
      <Checkbox defaultChecked />
      <Checkbox defaultChecked size={30} />
      <Checkbox defaultChecked size={40} />
    </Wrapper>
  );
};
`,
  demoName: 'Size',
}

export const UnControlled = {
  code: `import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Checkbox } from 'fork-design';

export default () => {
  return (
    <Wrapper>
      <Checkbox />
    </Wrapper>
  );
};
`,
  demoName: 'Un Controlled',
}

