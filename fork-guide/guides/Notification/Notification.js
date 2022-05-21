import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Dialog, Avatar, Notification } from 'fork-design';
import { Photo } from 'fork-design/icons/lazy';
import {
  avatarLink,
  avatarLink2,
  avatarLink3
} from '@fork-guide/staff';

export default () => {
  return (
    <Wrapper col span="20px">
      <Dialog style={{ boxShadow: 'var(--popover-box-shadow)' }}>
        <Dialog.Header>
          Notification
          <Dialog.Closer />
        </Dialog.Header>
        <Dialog.Body>
          <Notification hasDot>
            <Notification.Avatar
              className="mr-5"
              badge={<Photo />}
            >
              <Avatar src={avatarLink} size={55} />
            </Notification.Avatar>
            <div>
              <b>Hoàng Nguyễn</b> and <b>Minh Nguyễn</b>
              <span> added to their stories. You can reply or react them.</span>
              <br />
              <small>5 hours ago</small>
            </div>
          </Notification>
        </Dialog.Body>
      </Dialog>
      <Notification hasDot>
        <Notification.Avatar
          className="mr-5"
          badge={<Photo />}
        >
          <Avatar src={avatarLink} size={55} />
        </Notification.Avatar>
        <div>
          <b>Hoàng Nguyễn</b> and <b>Minh Nguyễn</b>
          <span> added to their stories. You can reply or react them.</span>
          <br />
          <small>5 hours ago</small>
        </div>
      </Notification>
    </Wrapper>
  );
};
