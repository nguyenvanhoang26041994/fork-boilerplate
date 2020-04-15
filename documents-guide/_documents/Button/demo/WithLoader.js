import React from 'react';
import { Button } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="flex flex-col">
      <div className="flex mb-2">
        <Button loading className="mr-2">Basic</Button>
        <Button loading pressed className="mr-2">Pressed</Button>
        <Button loading disabled className="mr-2">Disabled</Button>
        <Button loading rounded className="mr-2">Rounded</Button>
      </div>
      <div className="flex">
        <Button loading circle icon="power" className="mr-2" />
        <Button loading primary className="mr-2">PRIMARY</Button>
        <Button loading danger className="mr-2">DANGER</Button>
        <Button loading glassed className="mr-2">GLASSED</Button>
      </div>
    </div>

  );
};

export default Demo;
Demo.header = 'With Loader';
Demo.href = 'button-with-loader';

Demo.code = `import React from 'react';
import { Button } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <div className="flex flex-col">
      <div className="flex mb-2">
        <Button loading className="mr-2">Basic</Button>
        <Button loading pressed className="mr-2">Pressed</Button>
        <Button loading disabled className="mr-2">Disabled</Button>
        <Button loading rounded className="mr-2">Rounded</Button>
      </div>
      <div className="flex">
        <Button loading circle icon="power" className="mr-2" />
        <Button loading primary className="mr-2">PRIMARY</Button>
        <Button loading danger className="mr-2">DANGER</Button>
        <Button loading glassed className="mr-2">GLASSED</Button>
      </div>
    </div>

  );
};

export default Demo;
`;
