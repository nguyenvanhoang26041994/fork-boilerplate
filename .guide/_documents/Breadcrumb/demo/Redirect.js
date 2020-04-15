import React from 'react';
import { useHistory } from 'react-router-dom';

import { Breadcrumb } from '@/rc-neumorphism/core';

const Demo = () => {
  const history = useHistory();

  return (
    <Breadcrumb>
      <Breadcrumb.Item title="No Redirect" />
      <Breadcrumb.Item
        title="Reload Page"
        href="/document/breadcrumb"
      />
      <Breadcrumb.Item
        title="CSR"
        onClick={() => history.push('/')}
      />
    </Breadcrumb>
  );
};

export default Demo;
Demo.header = 'REDIRECT';
Demo.anchorTitle = 'Redirect';
Demo.href = 'breadcrumb-redirect';

Demo.code = `import React from 'react';
import { useHistory } from 'react-router-dom';

import { Breadcrumb } from '@/rc-neumorphism/core';

const Demo = () => {
  const history = useHistory();

  return (
    <Breadcrumb>
      <Breadcrumb.Item title="No Redirect" />
      <Breadcrumb.Item
        title="Reload Page"
        href="/document/breadcrumb"
      />
      <Breadcrumb.Item
        title="CSR"
        onClick={() => history.push('/')}
      />
    </Breadcrumb>
  );
};

export default Demo;
`;
