import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { PureNotification, Avatar, Notification } from '@fork-ui/core';
import { Photo } from '@fork-ui/icons/lazy';
import {
  avatarLink,
  avatarLink2,
  avatarLink3
} from '@fork-guide/staff';

export default () => {
  return (
    <Wrapper>
      <Notification style={{ width: 400 }}>
        <Notification.Header>
          Notification
          <Notification.Closer />
        </Notification.Header>
        <Notification.Body>
          <PureNotification hasDot>
            <PureNotification.BadgeAvatar
              className="mr-5"
              badge={<Photo />}
            >
              <Avatar src={avatarLink} size={55} />
            </PureNotification.BadgeAvatar>
            <div>
              <b>Hoàng Nguyễn</b> and <b>Minh Nguyễn</b>
              <span> added to their stories. You can reply or react them.</span>
              <br />
              <small>5 hours ago</small>
            </div>
          </PureNotification>
        </Notification.Body>
      </Notification>
    </Wrapper>
  );
};
