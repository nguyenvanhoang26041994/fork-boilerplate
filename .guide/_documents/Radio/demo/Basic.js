import React, { useState } from 'react';
import { Radio } from '@/rc-neumorphism/core';

const Demo = () => {
  const [value, setValue] = useState();

  return (
    <div className="flex">
      <Radio
        className="mr-5"
        name="same"
        value="value-1"
        onChange={e => setValue(e.target.value)}
      />
      <Radio
        className="mr-5"
        name="same"
        value="value-2"
        onChange={e => setValue(e.target.value)}
      />
      <Radio
        className="mr-5"
        name="same"
        value="value-3"
        disabled
        onChange={e => setValue(e.target.value)}
      />
    </div>
  );
};

export default Demo;
Demo.header = 'BASIC';
Demo.anchorTitle = 'Basic';
Demo.href = 'radio-basic';

Demo.code = `import React, { useState } from 'react';
import { Radio } from 'rc-neumorphism/core';

const Demo = () => {
  const [value, setValue] = useState();

  return (
    <div className="flex">
      <Radio
        className="mr-5"
        name="same"
        value="value-1"
        onChange={e => setValue(e.target.value)}
      />
      <Radio
        className="mr-5"
        name="same"
        value="value-2"
        onChange={e => setValue(e.target.value)}
      />
      <Radio
        className="mr-5"
        name="same"
        value="value-3"
        disabled
        onChange={e => setValue(e.target.value)}
      />
    </div>
  );
};

export default Demo;
`;
