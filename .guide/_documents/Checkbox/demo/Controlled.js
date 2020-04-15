import React, { useState } from 'react';
import { Checkbox } from '@/rc-neumorphism/core';

const Demo = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex">
      <Checkbox
        checked={checked}
        className="mr-5"
        onChange={e => setChecked(e.target.checked)}
      />
      <Checkbox
        checked={checked}
        className="mr-5"
        onChange={e => setChecked(e.target.checked)}
      />
    </div>
  );
};

export default Demo;
Demo.header = 'CONTROLLED';
Demo.anchorTitle = 'Controlled';
Demo.href = 'checkbox-controlled';

Demo.code = `import React, { useState } from 'react';
import { Checkbox } from '@/rc-neumorphism/core';

const Demo = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex">
      <Checkbox
        checked={checked}
        className="mr-5"
        onChange={e => setChecked(e.target.checked)}
      />
      <Checkbox
        checked={checked}
        className="mr-5"
        onChange={e => setChecked(e.target.checked)}
      />
    </div>
  );
};

export default Demo;
`;
