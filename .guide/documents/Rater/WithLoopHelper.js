import React from 'react';
import { Rater } from '@fork-ui/components/core';

const Demo = () => {
  const [raterProps, itemProps, helper] = Rater.useRater({
    value: 2,
    maxValue: 4,
  });

  return (
    <Rater {...raterProps}>
      {helper.loop((index) => {
        return (
          <Rater.Star
            isLight={itemProps.isLight[index]}
            onMouseEnter={itemProps.onMouseEnter[index]}
            onClick={itemProps.onClick[index]}
          />
        )
      })}
    </Rater>
  );
};

export default Demo;
