import React, { useState, useCallback }  from 'react';
import { Slider, Button, ButtonGroup, Switch } from '@/components';

const Demo = () => {
  return (
    <div className="flex flex-col w-full">
      <Slider defaultValue={77} />
    </div>
  );
};

export default Demo;
