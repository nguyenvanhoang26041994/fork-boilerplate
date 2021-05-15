import React from 'react';
import ComponentIntroduction from '../../components/ComponentIntroduction';

import Skeleton from './Skeleton';
import Animated from './Animated';
import CustomColor from './CustomColor';

export default () => {
  return (
    <ComponentIntroduction
      IntroductionComponent={Skeleton}
      header={Skeleton.header}
    >
    </ComponentIntroduction>
  );
};
