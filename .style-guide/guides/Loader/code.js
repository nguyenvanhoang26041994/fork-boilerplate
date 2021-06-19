export const Attract = {
  code: `import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Loader } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper span="40px">
      <Loader.Attract />
      <Loader.Attract size={50} />
    </Wrapper>
  );
};
`,
  demoName: 'Attract',
}

export const Dot = {
  code: `import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Loader } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper span="20px">
      <Loader.Dots />
      <Loader.Dots color="var(--red)" size="20px" />
      <Loader.Dots color="purple" size="2.5em" />
    </Wrapper>
  );
};
`,
  demoName: 'Dot',
}

export const Loader = {
  code: `import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Loader } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper span="3rem" className="items-center justify-center">
      <Loader.Dots />
      <Loader.Dots animation="wave" />
      <Loader.Dots animation="move" />
      <Loader.Spinner />
      <Loader.NiceSpinner />
      <Loader.Attract />
    </Wrapper>
  );
};
`,
  demoName: 'Loader',
}

export const Spinner = {
  code: `import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Loader } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper span="20px">
      <Loader.Spinner />
      <Loader.Spinner color="var(--red)" size="50px" />
      <Loader.Spinner color="pink" size="5em" />
    </Wrapper>
  );
};
`,
  demoName: 'Spinner',
}

export const Wave = {
  code: `import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Loader } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper span="20px">
      <Loader.Dots animation="wave" />
      <Loader.Dots animation="wave" color="var(--green)" size="32px" />
    </Wrapper>
  );
};
`,
  demoName: 'Wave',
}

