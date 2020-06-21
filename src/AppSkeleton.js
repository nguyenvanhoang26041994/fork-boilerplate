import React from 'react';

export default () => (
  <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#294158' }}>
    <div className="pre-skeleton" style={{ height: '5rem', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '0 1rem' }}>
      <div style={{ display: 'flex' }}>
        <div className="pre-skeleton pre-skeleton--circle" style={{ fontSize: '1.25rem' }}></div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '0.5rem' }}>
          <div className="pre-skeleton pre-skeleton--paragraph" style={{ width: '100px' }}></div>
          <div className="pre-skeleton pre-skeleton--rect" style={{ height: '10px' }}></div>
        </div>
      </div>
    </div>
    <div style={{ display: 'flex', flexGrow: 1 }}>
      <div className="pre-skeleton" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '5rem', height: '100%', padding: '0 0.5rem', fontSize: '1.5rem' }}>
        <div className="pre-skeleton pre-skeleton--circle"></div>
        <div className="pre-skeleton pre-skeleton--circle"></div>
        <div className="pre-skeleton pre-skeleton--circle"></div>
        <div className="pre-skeleton pre-skeleton--circle"></div>
      </div>
      <div style={{ display: 'flex', flexGrow: 1, flexDirection: 'column' }}>
        <div style={{ flexGrow: 1, width: '100%', padding: '1rem', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex' }}>
            <div className="pre-skeleton pre-skeleton--circle" style={{ fontSize: '1.5rem' }}></div>
            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, marginLeft: '1rem' }}>
              <div className="pre-skeleton pre-skeleton--paragraph" style={{ width: '50%' }}></div>
              <div className="pre-skeleton pre-skeleton--paragraph" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div className="pre-skeleton pre-skeleton--rect" style={{ flexGrow: 1 }}></div>
        </div>
        <div style={{ flexGrow: 1, width: '100%', padding: '1rem', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex' }}>
            <div className="pre-skeleton pre-skeleton--circle" style={{ fontSize: '1.5rem' }}></div>
            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, marginLeft: '1rem' }}>
              <div className="pre-skeleton pre-skeleton--paragraph" style={{ width: '50%' }}></div>
              <div className="pre-skeleton pre-skeleton--paragraph" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div className="pre-skeleton pre-skeleton--rect" style={{ flexGrow: 1 }}></div>
        </div>
      </div>
    </div>
  </div>
);
