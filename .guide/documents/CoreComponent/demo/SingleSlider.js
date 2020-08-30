import React from 'react';
import { Slider } from '@@/fork-ui/src/components/core';

const Demo = () => {
  const [props] = Slider.useSingleSlider({ initialValue: 50 });
  return (
    <Slider.Single {...props} />
  );
};

export default Demo;
