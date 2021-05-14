import React, { useState } from 'react';
import styled from 'styled-components';
import { Rater } from '@fork-ui/components/core';
import MoodCry from '@fork-ui/components/icons/all/MoodCry';
import MoodSad from '@fork-ui/components/icons/all/MoodSad';
import MoodNeutral from '@fork-ui/components/icons/all/MoodNeutral';
import MoodKid from '@fork-ui/components/icons/all/MoodKid';
import MoodHappy from '@fork-ui/components/icons/all/MoodHappy';

const RaterItemStyled = styled(Rater.Item)`
  &.frater-item-light {
    color: var(--primary);
    .ficon > path:nth-child(2) {
      fill: none;
    }
  }
`;

const MoodCryRater = props => <RaterItemStyled {...props}><MoodCry /></RaterItemStyled>;
const MoodSadRater = props => <RaterItemStyled {...props}><MoodSad /></RaterItemStyled>;
const MoodNeutralRater = props => <RaterItemStyled {...props}><MoodNeutral /></RaterItemStyled>;
const MoodKidRater = props => <RaterItemStyled {...props}><MoodKid /></RaterItemStyled>;
const MoodHappyRater = props => <RaterItemStyled {...props}><MoodHappy /></RaterItemStyled>;

const Demo = () => {
  const [mood, setMood] = useState();

  return (
    <Rater size="2em">
      <MoodCryRater
        isLight={'MoodCryRater' === mood}
        onClick={() => setMood('MoodCryRater')}
      />
      <MoodSadRater
        isLight={'MoodSadRater' === mood}
        onClick={() => setMood('MoodSadRater')}
      />
      <MoodNeutralRater
        isLight={'MoodNeutralRater' === mood}
        onClick={() => setMood('MoodNeutralRater')}
      />
      <MoodKidRater
        isLight={'MoodKidRater' === mood}
        onClick={() => setMood('MoodKidRater')}
      />
      <MoodHappyRater
        isLight={'MoodHappyRater' === mood}
        onClick={() => setMood('MoodHappyRater')}
      />
    </Rater>
  );
};

export default Demo;
