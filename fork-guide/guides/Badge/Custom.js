import React from 'react';
import { Wrapper, FancyBox } from '@fork-guide/components';
import { Badge, Avatar } from '@fork-ui/core';
import { Stars } from '@fork-ui/icons/lazy';

const PureBadge = Badge.PureBadge;

export default () => {
  return (
    <Wrapper span="2rem">
      <PureBadge
        overlap
        placement="bottom-end"
        badge={(
          <Avatar
            style={{ border: '2px solid var(--bg)' }}
            className="fbadge-ui"
            color="var(--primary)"
            size="0.5em"
          >
            HG
          </Avatar>
        )}
      >
        <FancyBox circle size="50px" />
      </PureBadge>
      <PureBadge
        placement="top-end"
        badge={<Stars className="fbadge-ui" color="var(--primary)" />}
      >
        <FancyBox size="50px" />
      </PureBadge>
    </Wrapper>
  );
};
