import React, { useState, useCallback }  from 'react';
import { Slider, Button, ButtonGroup, Switch } from '@/rc-neumorphism/core';

const Demo = () => {
  const [value, setValue] = useState(77);
  const onChange = useCallback(_value => setValue(_value), [setValue]);

  return (
    <div className="flex flex-col w-full">
      <Slider value={value} onChange={onChange} />
    </div>
  );
};

export default Demo;
Demo.header = 'CONTROLLED';
Demo.anchorTitle = 'Controlled';
Demo.href = 'slider-controlled';

Demo.code = `import React, { useState, useCallback }  from 'react';
import { Slider, Button, ButtonGroup, Switch } from 'rc-neumorphism/core';

const Demo = () => {
  const [value, setValue] = useState(77);
  const onChange = useCallback(_value => setValue(_value), [setValue]);

  return (
    <div className="flex flex-col w-full">
      <Slider value={value} onChange={onChange} />
    </div>
  );
};

export default Demo;
`;
