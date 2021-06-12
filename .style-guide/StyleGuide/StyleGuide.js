import React from 'react';
import { Switch } from 'react-router-dom';
import { StyleGuideWrapper } from './styled';
import * as allIcons from '@fork-ui/icons/lazy';

const icons = Object.keys(allIcons);

const StyleGuide = () => {
  return (
    <StyleGuideWrapper>
      {icons.map((name) => {
        const C = allIcons[name];
        return (
          <div style={{
            width: '50px',
            height: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <C key={name} />
          </div>
        );
      })}
    </StyleGuideWrapper>
  );
};

export default StyleGuide;
