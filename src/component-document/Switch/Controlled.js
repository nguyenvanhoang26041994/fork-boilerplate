import React, { useState } from 'react';
import { Switch } from '@/components';

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
