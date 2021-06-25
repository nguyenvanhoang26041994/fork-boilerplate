import React from 'react';
import styled from 'styled-components';
import { Dialog, Avatar, Badge } from '@fork-ui/core';

const Header = styled(Dialog.Header)`
  height: 80px;
  border-bottom: 1px solid var(--skeleton-color);
  background-color: var(--bg);
`;

const StyledDialog = styled(Dialog)`
  height: 100vh;
  border-radius: 0;
  background-color: transparent;
`;
const Wrapper = styled.div`
  padding-left: 2px;
`;

const RightSidebar = ({ className }) => {
  return (
    <Wrapper className={className}>
      <StyledDialog>
        {/* <Header></Header> */}
        <Dialog.Body style={{ padding: 0, backgroundColor: 'var(--bg)' }}>
          <div className="flex flex-col items-center justify-center p-5">
              <Badge.Dot color="var(--green-6)" overlap placement="bottom-end">
                <Avatar size={100} src="https://avatars.githubusercontent.com/u/20764362?v=4" />
              </Badge.Dot>
              <div style={{ fontWeight: '600' }} className="mt-5">Hoàng Nguyễn</div>
              <div>Active Now</div>
          </div>
        </Dialog.Body>
      </StyledDialog>
    </Wrapper>
  );
};

export default RightSidebar;
