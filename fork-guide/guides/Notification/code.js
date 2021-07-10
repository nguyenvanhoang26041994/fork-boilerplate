export const Custom = {
  code: `import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '@fork-guide/components';
import { PureNotification, Avatar } from '@fork-ui/core';
import { Video } from '@fork-ui/icons/lazy';
import {
  avatarLink,
  avatarLink2,
  avatarLink3
} from '@fork-guide/staff';

const StyledNotification = styled(PureNotification)\`
  width: 400px;
  box-shadow: var(--popover-box-shadow);

  &:before {
    background-color: var(--green-6);
  }

  .fbadge-avatar {
    .fbadge-ui {
      background-color: var(--red-6);
    }
  }
\`;
export default () => {
  return (
    <Wrapper>
      <StyledNotification hasDot>
        <PureNotification.BadgeAvatar
          className="mr-5"
          badge={<Video />}
        >
          <Avatar src={avatarLink2} size={55} />
        </PureNotification.BadgeAvatar>
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
`,
  demoName: 'Notification',
}

export const PushNotification = {
  code: `import React, { useCallback } from 'react';
import { Wrapper } from '@fork-guide/components';
import { PureNotification, Avatar, Notification, Button } from '@fork-ui/core';
import { Photo } from '@fork-ui/icons/lazy';
import {
  avatarLink,
  avatarLink2,
  avatarLink3
} from '@fork-guide/staff';

export default () => {
  const pushNotification = useCallback(() => {
    Notification.push(({ doClose }) => (
      (
        <Notification style={{ width: 400 }}>
          <Notification.Header>
            Notification
            <Notification.Closer onClick={doClose} />
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
      )
    ), {
      autoClose: 5000,
    })
  }, []);

  return (
    <Wrapper>
      <Button color="primary" onClick={pushNotification}>Click Me</Button>
    </Wrapper>
  );
};
`,
  demoName: 'Push Notification',
}

export const WithAvatarGroup = {
  code: `import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '@fork-guide/components';
import { PureNotification, Avatar, AvatarGroup } from '@fork-ui/core';
import { Bell } from '@fork-ui/icons/lazy';
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

const StyledNotification = styled(PureNotification)\`
  width: 400px;
  box-shadow: var(--popover-box-shadow);

  &:before {
    background-color: var(--green-6);
  }

  .fbadge-avatar {
    .fbadge-ui {
      background-color: var(--green-6);
    }
  }
\`;
export default () => {
  return (
    <Wrapper>
      <StyledNotification hasDot>
        <PureNotification.BadgeAvatar
          className="mr-5"
          badge={<Bell />}
        >
          <StyledAvatarGroup>
            <Avatar src={avatarLink} size={40} />
            <Avatar src={avatarLink2} size={40} />
          </StyledAvatarGroup>
        </PureNotification.BadgeAvatar>
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

