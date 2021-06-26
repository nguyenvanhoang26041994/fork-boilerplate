import React from 'react';
import styled from 'styled-components';
import { Dialog, Button, Avatar, AvatarGroup, Badge, Textbox } from '@fork-ui/core';
import { MessageDots, Phone, Settings, Search } from '@fork-ui/icons/lazy';
const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  .__search-icon {
    position: absolute;
    left: 0;
    margin-left: 4px;
  }
`;
const StyledTextbox = styled(Textbox)`
  border-radius: 999px;
  padding-left: 38px;
  height: 40px;
`;

const Searchbox = ({ className }) => {
  return (
    <div className={className}>
      <Wrapper>
        <Button color="transparent" rounded icon={<Search />} className="__search-icon" />
        <StyledTextbox placeholder="Search message" />
      </Wrapper>
    </div>
  );
};

export default Searchbox;
