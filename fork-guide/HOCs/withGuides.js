import React, { useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { Flex, Sticky, Button, ButtonGroup } from 'fork-design';
import { Copy } from 'fork-design/icons/lazy';
import copyToClipboard from '@fork-ui/utils/copyToClipboard';
import DemoBox from '@fork-guide/components/DemoBox';
import SyntaxHighlighter from '@fork-guide/components/SyntaxHighlighter';

const DemoBoxList = styled(Flex)`
  max-height: calc(100vh - 72px);

  > * {
    margin-bottom: 2px;
  }
`;

const DemoDetailBoxWrapper = styled.div`
  position: relative;
  max-height: calc(100vh - 72px);

  .__actions {
    position: absolute;
    left: auto;
    right: 0;
    top: 0;
    margin: 8px;
    z-index: 1;
  }
`;

const Wrapper = styled(Flex)`
`;

const DemoDetailBox = ({ className, code }) => {
  const onClick = useCallback(() => {
    copyToClipboard(code);
  }, [code]);
  return (
    <DemoDetailBoxWrapper className={className}>
      <div className="__actions">
        <Button icon={<Copy />} onClick={onClick} />
      </div>
      <SyntaxHighlighter code={code} />
    </DemoDetailBoxWrapper>
  );
};

const mode = {
  normal: {
    left: '6/12',
    right: '6/12',
  }
};
export default (demos, allCode) => () => {
  const [selectedName, setSelectedName] = useState(demos[0].name);
  const onViewCodeClick = useCallback((name) => {
    setSelectedName(name);
  }, [setSelectedName]);

  return (
    <Wrapper wrap>
      <DemoBoxList col w={mode.normal.left} style={{ paddingRight: '2px' }} className="common-scrollbar">
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
      <Flex col w={mode.normal.right} style={{ backgroundColor: 'var(--bg)' }}>
        <DemoDetailBox code={allCode[selectedName].code} className="common-scrollbar" />
      </Flex>
    </Wrapper>
  );
};
