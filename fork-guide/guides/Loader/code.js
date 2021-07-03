export const Dot = {
  code: `import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Loader } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper span="20px">
      <Loader.Dots />
      <Loader.Dots color="var(--red-6)" size="20px" />
      <Loader.Dots color="purple" size="2.5em" />
    </Wrapper>
  );
};
`,
  demoName: 'Dot',
}

export const Loader = {
  code: `import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Loader } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper span="3rem" className="items-center justify-center">
      <Loader.Dots />
      <Loader.Dots animation="wave" />
      <Loader.Spinner />
      <Loader.NiceSpinner />
    </Wrapper>
  );
};
`,
  demoName: 'Loader',
}

export const NiceSpinner = {
  code: `import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Loader } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper span="30px">
      <Loader.NiceSpinner />
      <Loader.NiceSpinner size="100" color="var(--green-6)" />
      <Loader.NiceSpinner size="150" color="skeleton" />
    </Wrapper>
  );
};
`,
  demoName: 'Nice Spinner',
}

export const Spinner = {
  code: `import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Loader } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper span="20px">
      <Loader.Spinner />
      <Loader.Spinner color="var(--red-6)" size="50px" />
      <Loader.Spinner color="pink" size="5em" />
    </Wrapper>
  );
};
`,
  demoName: 'Spinner',
}

export const Wave = {
  code: `import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Loader } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper span="20px">
      <Loader.Dots animation="wave" />
      <Loader.Dots animation="wave" color="var(--green-6)" size="32px" />
    </Wrapper>
  );
};
`,
  demoName: 'Wave',
}

