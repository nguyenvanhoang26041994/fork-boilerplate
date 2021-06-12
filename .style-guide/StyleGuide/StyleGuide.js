import React from 'react';
import { StyleGuideWrapper } from './styled';
import * as allIcons from '@fork-ui/icons/lazy';

const icons = Object.keys(allIcons);

const StyleGuide = () => {
  return (
    <StyleGuideWrapper>
      {icons.map((name) => {
        const C = allIcons[name];
        return (
          <C key={name} />
        );
      })}
    </StyleGuideWrapper>
  );
};

export default StyleGuide;
