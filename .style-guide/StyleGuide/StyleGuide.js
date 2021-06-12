import React from 'react';
import lazy from '@utils/lazy';
import { StyleGuideWrapper } from './styled';

const IconGuides = lazy(() => import('../guides/Icon'));

const StyleGuide = () => {
  return (
    <StyleGuideWrapper>
      <IconGuides />
    </StyleGuideWrapper>
  );
};

export default StyleGuide;
