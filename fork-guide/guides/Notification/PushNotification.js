import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Dialog, Avatar, Notification, Button, ButtonGroup } from 'fork-design';
import { Photo, Video, User } from 'fork-design/icons/lazy';
import {
  avatarLink,
  avatarLink2,
  avatarLink3
} from '@fork-guide/staff';

const notifications = [
  {
    avatar: avatarLink,
    icon: <Photo />,
    content: () => (
      <div>
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
    content: () => (
      <div>
        <b>Nguồn Hàng Khởi Nghiệp</b>
        <span> is livelive now: "Xả Hàng Giày 39k dành cho các t/y"</span>
        <br />
        <small style={{ color: 'var(--primary)' }}>about an hour ago</small>
      </div>
    )
  },
  {
    isLockBodyClick: true,
    avatar: avatarLink3,
    icon: <User />,
    content: ({ doClose }) => (
      <div>
        <b>Phạm Như Ngọc</b>
        <span> send you a friendiend request.</span>
        <br />
        <small>a day ago</small>
        <br />
        <div className="flex items-center mt-2">
          <Button color="primary" className="mr-2" onClick={doClose}>Confirm</Button>
          <Button onClick={doClose}>Delete</Button>
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
const pushNotification = (placement) => {
  const { content, icon, avatar, isLockBodyClick } = randomNoti();

  Notification.ref.push(({ doClose }) => {
    const _doClose = () => {
      if (!isLockBodyClick) {
        doClose();
      }
    };

    return (
      <Dialog style={{ width: 400, boxShadow: 'var(--popover-box-shadow)' }} className="mx-2 my-1">
        <Dialog.Header>
          Notification
          <Dialog.Closer onClick={doClose} />
        </Dialog.Header>
        <Dialog.Body>
          <Notification hasDot onClick={_doClose}>
            <Notification.Avatar
              className="mr-5"
              badge={icon}
            >
              <Avatar src={avatar} size={55} />
            </Notification.Avatar>
            {content({ doClose })}
          </Notification>
        </Dialog.Body>
      </Dialog>
    )
  }, {
    placement: placement,
  });
};

const closeAll = () => Notification.ref.closeAll();
export default () => {
  return (
    <Wrapper>
      <Button color="primary" onClick={() => pushNotification('bottom-left')}>Click Me</Button>
      <Button onClick={closeAll}>Close All</Button>
      <ButtonGroup>
        <Button onClick={() => pushNotification('bottom-right')}>Bottom Right</Button>
        <Button onClick={() => pushNotification('top-left')}>Top Left</Button>
        <Button onClick={() => pushNotification('top-right')}>Top Right</Button>
      </ButtonGroup>
    </Wrapper>
  );
};
