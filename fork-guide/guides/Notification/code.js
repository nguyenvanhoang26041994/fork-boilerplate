export const Custom = {
  code: `import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '@fork-guide/components';
import { Notification, Avatar } from 'fork-design';
import { Video } from 'fork-design/icons/lazy';
import {
  avatarLink,
  avatarLink2,
  avatarLink3
} from '@fork-guide/staff';

const StyledNotification = styled(Notification)\`
  width: 400px;
  box-shadow: var(--popover-box-shadow);

  &:before {
    background-color: var(--green-6);
  }

  .fnotification-avatar {
    .fbadge-ui {
      background-color: var(--red-6);
    }
  }
\`;
export default () => {
  return (
    <Wrapper>
      <StyledNotification hasDot>
        <Notification.Avatar
          className="mr-5"
          badge={<Video />}
        >
          <Avatar src={avatarLink2} size={55} />
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
`,
  demoName: 'Custom',
}

export const Notification = {
  code: `import React from 'react';
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
`,
  demoName: 'Notification',
}

export const PushNotification = {
  code: `import React from 'react';
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
`,
  demoName: 'Push Notification',
}

export const UpdateNotification = {
  code: `import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Wrapper } from '@fork-guide/components';
import { Dialog, Avatar, Notification, Button } from 'fork-design';
import { Photo } from 'fork-design/icons/lazy';
import {
  avatarLink,
  avatarLink2,
  avatarLink3
} from '@fork-guide/staff';

const StyledNotification = styled(Notification)\`
  &:before {
    background-color: var(--green-6);
  }

  .fnotification-avatar {
    .fbadge-ui {
      background-color: var(--green-6);
    }
  }
\`;
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
`,
  demoName: 'Update Notification',
}

export const WithAvatarGroup = {
  code: `import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '@fork-guide/components';
import { Notification, Avatar, AvatarGroup } from 'fork-design';
import { Bell } from 'fork-design/icons/lazy';
import {
  avatarLink,
  avatarLink2,
} from '@fork-guide/staff';

const StyledAvatarGroup = styled(AvatarGroup)\`
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
\`;

const StyledNotification = styled(Notification)\`
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
\`;
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
`,
  demoName: 'With Avatar Group',
}

