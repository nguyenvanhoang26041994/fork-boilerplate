import React from 'react';
import styled from 'styled-components';
import { Rater } from '@fork-ui/components/core';

const RedStar = styled(Rater.Star)`
  &.frater-item-light {
    color: var(--red);
  }
`;

const GreenStar = styled(Rater.Star)`
  &.frater-item-light {
    color: var(--green);
  }
`;

const PurpleStar = styled(Rater.Star)`
  &.frater-item-light {
    color: purple;
  }
`;

const Demo = () => {
  const [{
    onMouseLeave
  }, {
    isLight,
    onMouseEnter,
    onClick
  }] = Rater.useRater({
    index: 2,
    maxIndex: 4,
  });

  return (
    <Rater onMouseLeave={onMouseLeave}>
      <RedStar
        isLight={isLight[0]}
        onMouseEnter={onMouseEnter[0]}
        onClick={onClick[0]}
      />
      <GreenStar
        isLight={isLight[1]}
        onMouseEnter={onMouseEnter[1]}
        onClick={onClick[1]}
      />
      <Rater.Star
        isLight={isLight[2]}
        onMouseEnter={onMouseEnter[2]}
        onClick={onClick[2]}
      />
      <PurpleStar
        isLight={isLight[3]}
        onMouseEnter={onMouseEnter[3]}
        onClick={onClick[3]}
      />
      <Rater.Star
        isLight={isLight[4]}
        onMouseEnter={onMouseEnter[4]}
        onClick={onClick[4]}
      />
    </Rater>
  );
};

export default Demo;
