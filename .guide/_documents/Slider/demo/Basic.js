import React, { useState, useCallback }  from 'react';
import { Slider, Button, ButtonGroup, Switch } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="flex flex-col w-full">
      <Slider defaultValue={77} />
    </div>
  );
};

export default Demo;
Demo.header = 'BASIC';
Demo.anchorTitle = 'Basic';
Demo.href = 'slider-basic';

Demo.code = `import React, { useState, useCallback }  from 'react';
import { Slider, Button, ButtonGroup, Switch } from 'rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="flex flex-col w-full">
      <Slider defaultValue={77} />
    </div>
  );
};

export default Demo;
`;
