import React from 'react';
import cn from 'classnames';
import Wrapper from '@@/.guide/shared/Wrapper';

const classes = 'fui-overlay fui-overlay--arrow fui-tooltip';

const Demo = () => {
  return (
    <Wrapper span="1em">
      <div
        className={cn(classes, 'fui-overlay--top')}
        style={{ position: 'relative' }}
      >
        Top Tooltip
      </div>
      <div
        className={cn(classes, 'fui-overlay--right')}
        style={{ position: 'relative' }}
      >
        Right Tooltip
      </div>
      <div
        className={cn(classes, 'fui-overlay--bottom')}
        style={{ position: 'relative' }}
      >
        Bottom Tooltip
      </div>
      <div
        className={cn(classes, 'fui-overlay--left')}
        style={{ position: 'relative' }}
      >
        Left Tooltip
      </div>
    </Wrapper>
  );
};

export default Demo;
