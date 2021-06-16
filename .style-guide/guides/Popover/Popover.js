import React from 'react';
import { DemoContent } from '@style-guide/components';

export default () => {
  return (
    <div
      className="tippy-box fpopover"
      data-placement="top"
      style={{ width: '100%' }}
    >
      <div className="tippy-content">
        <DemoContent />
      </div>
      <div
        className="tippy-arrow"
        style={{
          position: 'absolute',
          left: '0px',
          transform: 'translate3d(250px, 0px, 0px)',
        }}
      />
    </div>
  );
};
