export const Color = {
  code: `import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Radio } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper>
      <Radio name="custom" color="pink" value="value-1" defaultChecked />
      <Radio name="custom" color="red" value="value-2" />
      <Radio name="custom" color="var(--green-6)" value="value-3" />
      <Radio name="custom" color="#ff5722" value="value-4" />
      <Radio
        name="custom2"
        color="#ff5722"
        disabled
        value="value-5"
        defaultChecked
      />
    </Wrapper>
  );
};
`,
  demoName: 'Color',
}

export const Controlled = {
  code: `import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Radio } from '@fork-ui/core';

export default () => {
  const [{ value, onChange }] = Radio.useRadioGroup('value-2');

  return (
    <Wrapper>
      <Radio
        value="value-1"
        checked={'value-1' === value}
        onChange={onChange}
      />
      <Radio
        value="value-2"
        checked={'value-2' === value}
        onChange={onChange}
      />
      <Radio
        value="value-3"
        checked={'value-3' === value}
        onChange={onChange}
      />
    </Wrapper>
  );
};
`,
  demoName: 'Controlled',
}

export const Radio = {
  code: `import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Radio } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper>
      <Radio name="basic" value="value-1" defaultChecked />
      <Radio name="basic" value="value-2" />
      <Radio name="basic2" value="value-3" disabled defaultChecked />
      <Radio name="basic2" value="value-4" disabled />
    </Wrapper>
  );
};
`,
  demoName: 'Radio',
}

export const Size = {
  code: `import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Radio } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper>
      <Radio name="size" value="value-1" defaultChecked />
      <Radio name="size" value="value-2" size={20} />
      <Radio name="size" value="value-3" size={30} />
    </Wrapper>
  );
};
`,
  demoName: 'Size',
}

