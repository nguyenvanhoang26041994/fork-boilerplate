import React, { useState } from 'react';
import styled from 'styled-components';
import { Flex, Sticky } from '@fork-ui/core';
import DemoBox from '@style-guide/containers/DemoBox';
import SyntaxHighlighter from '@style-guide/components/SyntaxHighlighter';

const DemoBoxList = styled(Flex)`
  > * {
    margin-bottom: 2px;
  }
`;

export default (demos, allCode) => () => {
  const [selectedName, setSelectedName] = useState(demos[0].name);

  return (
    <Flex wrap>
      <DemoBoxList col w="1/2" style={{ paddingRight: '2px' }}>
        {demos.map((Demo) => (
          <DemoBox
            name={allCode[Demo.name].demoName}
            onViewCodeClick={() => setSelectedName(Demo.name)}
            key={Demo.name}
            isActive={selectedName === Demo.name}
          >
            <Demo.Component />
          </DemoBox>
        ))}
      </DemoBoxList>
      <Flex col w="1/2" style={{ backgroundColor: 'var(--bg)' }}>
        <Sticky>
          <SyntaxHighlighter code={allCode[selectedName].code} />
        </Sticky>
      </Flex>
    </Flex>
  );
};
