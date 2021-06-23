import React from 'react';
import { DemoContentV2 } from '@style-guide/components';

export default () => {
  return (
    <div
      className="tippy-box fpopover"
      data-placement="top"
      style={{ width: '100%' }}
    >
      <div className="tippy-content p-5">
        <DemoContentV2 />
      </div>
      <div
        className="tippy-arrow"
        style={{
          position: 'absolute',
          left: '0px',
          transform: 'translate3d(20px, 0px, 0px)',
        }}
      />
    </div>
  );
};
