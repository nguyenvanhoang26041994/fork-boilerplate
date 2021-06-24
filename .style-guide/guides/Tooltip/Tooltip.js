import React from 'react';
import { Wrapper } from '@style-guide/components';

export default () => {
  return (
    <Wrapper span="20px">
      <div
        className="tippy-box ftooltip"
        data-placement="top"
        style={{ maxWidth: '200px', boxShadow: 'var(--popover-box-shadow)' }}
      >
        <div className="tippy-content">
          <b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry
        </div>
        <div
          className="tippy-arrow"
          style={{
            position: 'absolute',
            left: '0px',
            transform: 'translate3d(90px, 0px, 0px)',
          }}
        />
      </div>
      <div
        className="tippy-box ftooltip"
        data-placement="top"
      >
        <div className="tippy-content"
          style={{
            maxWidth: '200px',
            backgroundColor: 'var(--skeleton-color)',
            color: 'var(--color)',
          }}
        >
          <b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry
        </div>
        <div
          className="tippy-arrow"
          style={{
            position: 'absolute',
            left: '0px',
            transform: 'translate3d(170px, 0px, 0px)',
            color: 'var(--skeleton-color)',
          }}
        />
      </div>
    </Wrapper>
  );
};
