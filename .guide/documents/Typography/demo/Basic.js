import React from 'react';
import { Typo } from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <div className="w-full">
      <Typo h6>Heading</Typo>
      <Typo h5>Heading</Typo>
      <Typo h4>Heading</Typo>
      <Typo h3>Heading</Typo>
      <Typo h2>Heading</Typo>
      <Typo h1>Heading</Typo>
      <Typo p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Typo>
      <Typo p underline>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Typo>
      <Typo p through>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Typo>
      <Typo p italic>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Typo>
      <Typo p strong>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Typo>
    </div>
  );
};

export default Demo;
