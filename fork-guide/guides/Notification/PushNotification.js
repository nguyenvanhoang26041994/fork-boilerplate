import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { PureNotification, Avatar, Notification, Button } from '@fork-ui/core';
import { Photo, Video, User } from '@fork-ui/icons/lazy';
import {
  avatarLink,
  avatarLink2,
  avatarLink3
} from '@fork-guide/staff';

const notifications = [
  {
    avatar: avatarLink,
    icon: <Photo />,
    content: (
      <div style={{ color: 'var(--heading-color)' }}>
        <b>Hoàng Nguyễn</b> and <b>Minh Nguyễn</b>
        <span> added to their stories. You can reply or react them.</span>
        <br />
        <small>5 hours ago</small>
      </div>
    )
  },
  {
    avatar: avatarLink2,
    icon: <Video />,
    content: (
      <div style={{ color: 'var(--heading-color)' }}>
        <b>Nguồn Hàng Khởi Nghiệp</b>
        <span> is livelive now: "Xả Hàng Giày 39k dành cho các t/y"</span>
        <br />
        <small style={{ color: 'var(--primary)' }}>about an hour ago</small>
      </div>
    )
  },
  {
    avatar: avatarLink3,
    icon: <User />,
    content: (
      <div style={{ color: 'var(--heading-color)' }}>
        <b>Phạm Như Ngọc</b>
        <span> send you a friendiend request.</span>
        <br />
        <small>a day ago</small>
        <br />
        <div className="flex items-center mt-2">
          <Button color="primary" className="mr-2">Confirm</Button>
          <Button>Delete</Button>
        </div>
      </div>
    )
  },
]
const randomNoti = () => {
  const min = 0;
  const max = notifications.length - 1;
  return notifications[Math.floor(Math.random() * (max - min + 1)) + min];
};
const pushNotification = () => {
  const { content, icon, avatar } = randomNoti();

  Notification.push(({ doClose }) => (
    (
      <Notification style={{ width: 400 }} className="ml-20 mb-2">
        <Notification.Header>
          Notification
          <Notification.Closer onClick={doClose} />
        </Notification.Header>
        <Notification.Body>
          <PureNotification hasDot>
            <PureNotification.BadgeAvatar
              className="mr-5"
              badge={icon}
            >
              <Avatar src={avatar} size={55} />
            </PureNotification.BadgeAvatar>
            {content}
          </PureNotification>
        </Notification.Body>
      </Notification>
    )
  ));
};

export default () => {
  return (
    <Wrapper>
      <Button color="primary" onClick={pushNotification}>Click Me</Button>
    </Wrapper>
  );
};
