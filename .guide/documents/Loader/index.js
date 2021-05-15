import React from 'react';
import Codebox from '../../Codebox';
import ComponentIntroduction from '../../components/ComponentIntroduction';

import Loader from './Loader';
import Dot from './Dot';
import Spinner from './Spinner';
import Wave from './Wave';
import CustomColor from './CustomColor';
import LiquidLoader from './LiquidLoader';
import AttractLoader from './AttractLoader';
import NiceSpinner from './NiceSpinner';

export default () => {
  return (
    <ComponentIntroduction
      IntroductionComponent={Loader}
      header={Loader.header}
      description={<b>LOADER UI SUCH AS SPINNER, FROM SIMPLE TO COMPLEX</b>}
    >
      <div className="flex flex-wrap">
        <div className="flex flex-col w-1/2">
          <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ Dot } />
          </div>
          <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ Spinner } />
          </div>
          <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ Wave } />
          </div>
        </div>
        <div className="flex flex-col w-1/2" style={ { paddingLeft: '1px' } }>
          <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ LiquidLoader } />
          </div>
          <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ AttractLoader } />
          </div>
          <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ NiceSpinner } />
          </div>
          {/* <div className="w-full" style={ { paddingBottom: '1px' } }>
            <Codebox Component={ CustomColor } />
          </div> */}
        </div>
      </div>
    </ComponentIntroduction>
  );
};
