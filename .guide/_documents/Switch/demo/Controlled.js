import React, { useState } from 'react';
import { Switch } from '@/rc-neumorphism/core';

const Demo = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex">
      <Switch checked={checked} className="mr-5" onChange={e => setChecked(e.target.checked)} />
      <Switch checked={checked} className="mr-5" onChange={e => setChecked(e.target.checked)} />
    </div>
  );
};

export default Demo;
Demo.header = 'CONTROLLED';
Demo.anchorTitle = 'Controlled';
Demo.href = 'switch-controlled';

Demo.code = `import React, { useState } from 'react';
import { Switch } from 'rc-neumorphism/core';

const Demo = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex">
      <Switch checked={checked} className="mr-5" onChange={e => setChecked(e.target.checked)} />
      <Switch checked={checked} className="mr-5" onChange={e => setChecked(e.target.checked)} />
    </div>
  );
};

export default Demo;
`;
