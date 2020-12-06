import React from 'react';
import { Typo, Flex } from '@fork-ui/components/core';

const Demo = () => {
  return (
    <Flex col span="full">
      <Typo h1>Lorem Ipsum</Typo>
      <Typo>
        <Typo span b color="var(--text-color--heading)">Lorem Ipsum </Typo>
        is a pseudo-Latin text used in web design, 
        typography, 
        layout, 
        and printing in place of English 
        to emphasise design elements over content
      </Typo>
      <br />
      <Typo i>
        In a professional context it often happens that private or 
        corporate clients corder a publication to be made and presented with 
        the actual content still not being ready. 
        Think of a news blog that's filled with content hourly 
        on the day of going live. 
        However, reviewers tend to be distracted by comprehensible content, say, 
        a random text copied from a newspaper or the internet. 
        The are likely to focus on the text, 
        disregarding the layout and its elements. 
        Besides, random text risks to be unintendedly humorous or offensive, 
        an unacceptable risk in corporate environments
      </Typo>
    </Flex>
  );
};

export default Demo;
