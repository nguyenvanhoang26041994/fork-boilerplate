import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Wrapper } from '@fork-guide/components';
import { NoticeNotification, Avatar, Notification, Button } from '@fork-ui/core';
import { Photo } from '@fork-ui/icons/lazy';
import {
  avatarLink,
  avatarLink2,
  avatarLink3
} from '@fork-guide/staff';

const StyledNotification = styled(NoticeNotification)`
  &:before {
    background-color: var(--green-6);
  }

  .fnotice-badge-avatar {
    .fbadge-ui {
      background-color: var(--green-6);
    }
  }
`;
const pushNotification = ({ avatar, content }) => {
  Notification.ref.push(({ doClose }) => {
    return (
      <Notification style={{ width: 400 }} className="mx-2 my-1">
        <Notification.Header>
          Notification
          <Notification.Closer onClick={doClose} />
        </Notification.Header>
        <Notification.Body>
          <StyledNotification hasDot>
            <NoticeNotification.BadgeAvatar
              className="mr-5"
              badge={<Photo />}
            >
              <Avatar src={avatar} size={55} />
            </NoticeNotification.BadgeAvatar>
            {content}
          </StyledNotification>
        </Notification.Body>
      </Notification>
    )
  }, {
    id: 'id001',
  });
};

const notifications = [
  {
    avatar: avatarLink,
    content: (
      <div style={{ color: 'var(--heading-color)' }}>
        <b>Phạm Như Ngọc</b>
        <span> like your photo.</span>
        <br />
        <small>1 minues ago</small>
      </div>
    ),
  },
  {
    avatar: avatarLink2,
    content: (
      <div style={{ color: 'var(--heading-color)' }}>
        <b>Phạm Như Ngọc</b> and <b>Hoàng Nguyễn</b>
        <span> like your photo.</span>
        <br />
        <small>3 minues ago</small>
      </div>
    ),
  },
  {
    avatar: avatarLink3,
    content: (
      <div style={{ color: 'var(--heading-color)' }}>
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
    </Wrapper>
  );
};
