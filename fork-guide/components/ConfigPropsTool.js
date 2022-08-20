import React from 'react';
import styled from 'styled-components';
import { Textbox, Switch, Radio, Flex } from 'fork-design';
import { X } from 'fork-design/icons/lazy';

const StyledTextbox = styled(Textbox)`
  border-color: transparent;
  background-color: var(--btn-bg);

  &:hover,
  &:focus {
    border-color: transparent;
  }
`;

const Wrapper = styled(Flex)`
  padding: 15px;
`;
const ConfigPropsTool = () => {
  return (
    <Wrapper>
      <Flex direction="col" w="1/2" className="p-2">
        <StyledTextbox defaultValue="Don't touch me!" className="mb-2" />
        <StyledTextbox />
      </Flex>
      <Flex w="1/2" className="p-2">
        
      </Flex>
    </Wrapper>
  );
};

export default ConfigPropsTool;
