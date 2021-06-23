import React from 'react';
import { Wrapper } from '@style-guide/components';
import { Autocomplete, Textbox } from '@fork-ui/core';

const options = [
  { uid: 1, text: 'Hoang Nguyen' },
  { uid: 2, text: 'Son Le' },
  { uid: 3, text: 'Minh Nguyen' },
  { uid: 4, text: 'Chum chum' },
  { uid: 5, text: 'Fork Ui' },
  { uid: 6, text: 'Button' },
  { uid: 7, text: 'Icon' },
  { uid: 8, text: 'Autocomplete' },
  { uid: 9, text: 'Alo Alo' },
  { uid: 10, text: 'Tiki' },
  { uid: 11, text: 'Zalo' },
  { uid: 12, text: 'XRP' },
  { uid: 13, text: 'Bitcoin' },
  { uid: 14, text: 'Aloha' },
  { uid: 15, text: 'taolao' },
  { uid: 16, text: 'OK con de' },
];

export default () => {
  return (
    <Wrapper>
      <Autocomplete options={options}>
      </Autocomplete>
    </Wrapper>
  );
};
