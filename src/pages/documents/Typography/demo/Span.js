import React from 'react';
import { Typo } from '@/components';

const Demo = () => {
  return (
    <div
      className="flex w-full"
      style={{
        height: '200px'
      }}
    >
      <div className="w-full">
        <Typo span>Neumorphism Pro Span</Typo>
        <br />
        <Typo span underline>
          Neumorphism Pro Underline
        </Typo>
        <br />
        <Typo span disabled>
          Neumorphism Pro Disabled
        </Typo>
        <br />
        <Typo span lineTrough>
          Neumorphism Pro Line-Through
        </Typo>
        <br />
        <Typo span strong>
          Neumorphism Pro Strong
        </Typo>
        <br />
        <Typo span italic>
          Neumorphism Pro Strong
        </Typo>
        <br />
        <Typo span style={{ color: '#d800ff' }}>
          Neumorphism Pro Customized Style
        </Typo>
        <br />
      </div>
    </div>
  );
};

export default Demo;
