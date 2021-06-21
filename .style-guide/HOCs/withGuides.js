import React, { useState } from 'react';
import styled from 'styled-components';
import { Flex } from '@fork-ui/core';
import DemoBox from '@style-guide/containers/DemoBox';
import SyntaxHighlighter from '@style-guide/components/SyntaxHighlighter';

const DemoBoxList = styled(Flex)`
> * {
  margin-bottom: 2px;
}
`;

export default (demos, allCode) => () => {
  const [code, setCode] = useState(allCode[demos[0].name].code);

  return (
    <Flex wrap>
      <DemoBoxList col w="1/2" style={{ paddingRight: '2px' }}>
        {demos.map((Demo) => (
          <DemoBox
            name={allCode[Demo.name].demoName}
            onViewCodeClick={() => setCode(allCode[Demo.name].code)}
            key={Demo.name}
          >
            <Demo.Component />
          </DemoBox>
        ))}
      </DemoBoxList>
      <Flex col w="1/2">
        <SyntaxHighlighter code={code} />
      </Flex>
    </Flex>
  );
};
