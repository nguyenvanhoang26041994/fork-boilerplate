export const Avatar = {
  code: `import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Avatar, AvatarGroup, Badge } from '@fork-ui/core';
import {
  avatarLink,
  avatarLink2,
  avatarLink3
} from '@fork-guide/staff';

export default () => {
  return (
    <Wrapper>
      <Avatar shape="square">OP</Avatar>
      <Avatar src={avatarLink}>H</Avatar>
      <AvatarGroup>
        <Avatar src={avatarLink2}>HG</Avatar>
        <Avatar src={avatarLink3}>OP</Avatar>
        <Badge.Dot color="#0df316" overlap placement="bottom-end">
          <Avatar src={avatarLink}>OP</Avatar>
        </Badge.Dot>
      </AvatarGroup>
    </Wrapper>
  );
};
`,
  demoName: 'Avatar',
}

export const AvatarGroup = {
  code: `import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Avatar, AvatarGroup, Badge } from '@fork-ui/core';
import { avatarLink } from '@fork-guide/staff';

export default () => {
  return (
    <Wrapper>
      <AvatarGroup>
        <Avatar>HG</Avatar>
        <Avatar>OP</Avatar>
        <Badge.Dot color="#0df316" overlap placement="bottom-end">
          <Avatar src={avatarLink}>OP</Avatar>
        </Badge.Dot>
      </AvatarGroup>
    </Wrapper>
  );
};
`,
  demoName: 'Avatar Group',
}

export const Color = {
  code: `import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Avatar } from '@fork-ui/core';
import { avatarLink } from '@fork-guide/staff';

export default () => {
  return (
    <Wrapper>
      <Avatar color="var(--primary)">OP</Avatar>
      <Avatar color="purple">OP</Avatar>
      <Avatar color="purple" src={avatarLink}>H</Avatar>
    </Wrapper>
  );
};
`,
  demoName: 'Color',
}

export const CustomAvatarGroup = {
  code: `import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '@fork-guide/components';
import { Avatar, AvatarGroup, Badge } from '@fork-ui/core';
import {
  avatarLink,
  avatarLink2,
  avatarLink3
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
export default () => {
  return (
    <Wrapper>
      <Badge.Dot overlap placement="bottom-end" color="var(--green-6)">
        <StyledAvatarGroup>
          <Avatar src={avatarLink} size={40} />
          <Avatar src={avatarLink2} size={40} />
        </StyledAvatarGroup>
      </Badge.Dot>
    </Wrapper>
  );
};
`,
  demoName: 'Custom Avatar Group',
}

export const Size = {
  code: `import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Avatar } from '@fork-ui/core';

export default () => {
  return (
    <Wrapper>
      <Avatar size={40}>SM</Avatar>
      <Avatar size={70}>MD</Avatar>
      <Avatar size={100}>LG</Avatar>
    </Wrapper>
  );
};
`,
  demoName: 'Size',
}

export const WithBadge = {
  code: `import React from 'react';
import { Wrapper } from '@fork-guide/components';
import { Avatar, Badge } from '@fork-ui/core';
import { avatarLink } from '@fork-guide/staff';

export default () => {
  return (
    <Wrapper>
      <Badge.Dot color="#0df316" overlap placement="bottom-end">
        <Avatar src={avatarLink}>H</Avatar>
      </Badge.Dot>
      <Badge.Dot color="var(--primary)" overlap placement="bottom-end">
        <Avatar>H</Avatar>
      </Badge.Dot>
    </Wrapper>
  );
};
`,
  demoName: 'With Badge',
}

