import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Wrapper } from '@fork-guide/components';
import { Dialog, Avatar, Notification, Button } from 'fork-design';
import { Photo } from '@fork-ui/icons/lazy';
import {
  avatarLink,
  avatarLink2,
  avatarLink3
} from '@fork-guide/staff';

const StyledNotification = styled(Notification)`
  &:before {
    background-color: var(--green-6);
  }

  .fnotification-avatar {
    .fbadge-ui {
      background-color: var(--green-6);
    }
  }
`;
const pushNotification = ({ id, avatar, content }) => {
  Notification.ref.push(({ doClose }) => {
    return (
      <Dialog style={{ width: 400, boxShadow: 'var(--popover-box-shadow)' }} className="mx-2 my-1">
        <Dialog.Header>
          Notification
          <Dialog.Closer onClick={doClose} />
        </Dialog.Header>
        <Dialog.Body>
          <StyledNotification hasDot>
            <Notification.Avatar
              className="mr-5"
              badge={<Photo />}
            >
              <Avatar src={avatar} size={55} />
            </Notification.Avatar>
            {content}
          </StyledNotification>
        </Dialog.Body>
      </Dialog>
    )
  }, {
    id,
  });
};

const notifications = [
  {
    id: 'id001',
    avatar: avatarLink,
    content: (
      <div>
        <b>Phạm Như Ngọc</b>
        <span> like your photo.</span>
        <br />
        <small>1 minues ago</small>
      </div>
    ),
  },
  {
    id: 'id001',
    avatar: avatarLink2,
    content: (
      <div>
        <b>Phạm Như Ngọc</b> and <b>Hoàng Nguyễn</b>
        <span> like your photo.</span>
        <br />
        <small>3 minues ago</small>
      </div>
    ),
  },
  {
    id: 'id001',
    avatar: avatarLink3,
    content: (
      <div>
        <b>Phạm Như Ngọc</b>, <b>Hoàng Nguyễn</b>
        <span> and 12 peoples like your photo.</span>
        <br />
        <small>2 minues ago</small>
      </div>
    ),
  },
];

const randomNoti = () => {
  const min = 0;
  const max = notifications.length - 1;
  return notifications[Math.floor(Math.random() * (max - min + 1)) + min];
};

export default () => {
  const _pushNotification = useCallback(() => {
    pushNotification(randomNoti());
  }, []);

  return (
    <Wrapper>
      <Button color="primary" onClick={_pushNotification}>Push notification</Button>
      <Button onClick={() => Notification.ref.closeById('id001')}>Close</Button>
    </Wrapper>
  );
};
