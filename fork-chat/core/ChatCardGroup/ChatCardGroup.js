import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import PropType from 'prop-types';
import { Badge, Avatar } from 'fork-design';

import AvatarGroup from '../AvatarGroup';
import ChatCard from '../ChatCard';

const mStatus = Object.freeze({
  online: 'var(--green-6)',
  away: 'var(--orange-6)',
  offline: 'transparent',
});

const ChatCardGroup = ({ className, group, channel }) => {
  return (
    <ChatCard key={channel.id} className={cn('chat-card-group', className)}>
      <ChatCard.Avatar>
        <Badge.Dot color={mStatus[group.status]} overlap placement="bottom-end">
          <AvatarGroup>
            <Avatar loading="lazy" src="https://parade.com/wp-content/uploads/2021/03/Top-10-Puppy-Names-of-2021.jpg">OP</Avatar>
            <Avatar loading="lazy" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShph3ZbEptLqW-p-wY12RE2QvFWTjcqGWT9w&usqp=CAU">H</Avatar>
          </AvatarGroup>
        </Badge.Dot>
      </ChatCard.Avatar>
      <ChatCard.Content>
        <ChatCard.Name isHighlight={channel.unread.count}>{group.name}</ChatCard.Name>
        <ChatCard.Message>{channel.recent.message} &bull; 05:43 AM</ChatCard.Message>
      </ChatCard.Content>
      <ChatCard.Meta>
        {channel.unread.count ?
          <ChatCard.Unread count={channel.unread.count} />
          : <span>&nbsp;</span>
        }
      </ChatCard.Meta>
    </ChatCard>
  );
};

ChatCardGroup.defaultProps = {
  status: 'online',
};

export default ChatCardGroup;
