import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '@fork-guide/components';
import { Notification, Avatar, AvatarGroup } from 'fork-design';
import { Bell } from 'fork-design/icons/lazy';
import {
  avatarLink,
  avatarLink2,
} from '@fork-guide/staff';

const StyledAvatarGroup = styled(AvatarGroup)`
  --size: 60px;
  position: relative;
  width: var(--size);
  height: var(--size);
  cursor: pointer;

  > * {
    margin: 0;
    position: absolute;
  }

  > *:nth-child(1) {
    bottom: 0;
    left: 0;
  }

  > *:nth-child(2) {
    top: 0;
    right: 0;
  }
`;

const StyledNotification = styled(Notification)`
  width: 400px;
  box-shadow: var(--popover-box-shadow);

  &:before {
    background-color: var(--green-6);
  }

  .fnotification-avatar {
    .fbadge-ui {
      background-color: var(--green-6);
    }
  }
`;
export default () => {
  return (
    <Wrapper>
      <StyledNotification hasDot>
        <Notification.Avatar
          className="mr-5"
          badge={<Bell />}
        >
          <StyledAvatarGroup>
            <Avatar src={avatarLink} size={40} />
            <Avatar src={avatarLink2} size={40} />
          </StyledAvatarGroup>
        </Notification.Avatar>
        <div>
          <b>Hoàng Nguyễn</b> and <b>Minh Nguyễn</b>
          <span> added to their stories. You can reply or react them.</span>
          <br />
          <small style={{ color: 'var(--primary)' }}>5 hours ago</small>
        </div>
      </StyledNotification>
    </Wrapper>
  );
};
