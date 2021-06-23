import React, { useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { Flex, Sticky, Button, ButtonGroup } from '@fork-ui/core';
import { Copy } from '@fork-ui/icons/lazy';
import copyToClipboard from '@fork-ui/utils/copyToClipboard';
import DemoBox from '@style-guide/components/DemoBox';
import SyntaxHighlighter from '@style-guide/components/SyntaxHighlighter';

const DemoBoxList = styled(Flex)`
  > * {
    margin-bottom: 2px;
  }
`;

const DemoDetailBoxWrapper = styled.div`
  position: relative;
  .__float-actions {
    position: absolute;
    right: 0;
    left: auto;
    top: 0;
    margin: 8px;
  }
`;

const Wrapper = styled(Flex)`
`;

const DemoDetailBox = ({ code }) => {
  const onClick = useCallback(() => {
    copyToClipboard(code);
  }, [code]);
  return (
    <DemoDetailBoxWrapper>
      {/* <div className="__float-actions">
        <Button rounded icon={<Copy />} onClick={onClick} />
      </div> */}
      {/* <div className="__tabs">
        <ButtonGroup>
          <Button>Prop Types</Button>
          <Button>Code</Button>
        </ButtonGroup>
      </div> */}
      <SyntaxHighlighter code={code} />
    </DemoDetailBoxWrapper>
  );
};

export default (demos, allCode) => () => {
  const [selectedName, setSelectedName] = useState(demos[0].name);
  const onViewCodeClick = useCallback((name) => {
    setSelectedName(name);
  }, [setSelectedName]);

  return (
    <Wrapper wrap>
      <DemoBoxList col w="1/2" style={{ paddingRight: '2px' }}>
        {demos.map((Demo) => (
          <DemoBox
            name={allCode[Demo.name].demoName}
            onViewCodeClick={() => onViewCodeClick(Demo.name)}
            key={Demo.name}
            isActive={selectedName === Demo.name}
          >
            <Demo.Component />
          </DemoBox>
        ))}
      </DemoBoxList>
      <Flex col w="1/2" style={{ backgroundColor: 'var(--bg)' }}>
        <Sticky stickyClass="__demo-detail-box--stucked" className="__demo-detail-box">
          <DemoDetailBox code={allCode[selectedName].code} />
        </Sticky>
      </Flex>
    </Wrapper>
  );
};
