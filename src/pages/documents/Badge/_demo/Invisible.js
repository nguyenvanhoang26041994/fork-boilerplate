import React, { useState } from 'react';
import { Badge, Switch } from '@/components';

const FancyBox = ({ size }) => (
  <div
    className="neumorphism--500"
    style={{ height: size, width: size }}
  />
);

const Demo = () => {
  const [invisible, setInvisible] = useState(true);

  return (
    <div>
      <Badge count={999} invisible={invisible}>
        <FancyBox size="50px" />
      </Badge>
      <Switch
        className="mt-10"
        checked={invisible}
        onChange={e => setInvisible(e.target.checked)}
      />
    </div>
  );
};

export default Demo;

Demo.header = 'INVISIBLE';
Demo.href = 'badge-invisible';
Demo.code = `import React, { useState } from 'react';
import { Badge, Switch } from '@/components';

const FancyBox = ({ size }) => (
  <div
    className="neumorphism--500"
    style={{ height: size, width: size }}
  />
);

const Demo = () => {
  const [invisible, setInvisible] = useState(true);

  return (
    <div>
      <Badge count={999} invisible={invisible}>
        <FancyBox size="50px" />
      </Badge>
      <Switch
        className="mt-10"
        checked={invisible}
        onChange={e => setInvisible(e.target.checked)}
      />
    </div>
  );
};

export default Demo;
`;
