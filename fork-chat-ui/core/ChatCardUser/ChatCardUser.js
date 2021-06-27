import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import PropType from 'prop-types';
import { Badge, Avatar } from '@fork-ui/core';

import ChatCard from '../ChatCard';

const mStatus = Object.freeze({
  online: 'var(--green-6)',
  away: 'var(--orange-6)',
  offline: 'transparent',
});

const ChatCardUser = ({ className, user, channel }) => {
  return (
    <ChatCard key={channel.id} className={cn('chat-card-group', className)}>
      <ChatCard.Avatar>
        <Badge.Dot color={mStatus[user.status]} overlap placement="bottom-end">
          <Avatar loading="lazy" size={50} src={user.avatar} />
        </Badge.Dot>
      </ChatCard.Avatar>
      <ChatCard.Content>
        <ChatCard.Name isHighlight={channel.unread.count}>{user.name}</ChatCard.Name>
        <ChatCard.Message>{channel.recent.message} &bull; 05:43 AM</ChatCard.Message>
      </ChatCard.Content>
      <ChatCard.Meta>
        {channel.unread.count ?
          <ChatCard.Unread>{channel.unread.count}</ChatCard.Unread>
          : <span>&nbsp;</span>
        }
      </ChatCard.Meta>
    </ChatCard>
  );
};

ChatCardUser.defaultProps = {
  status: 'online',
};

export default ChatCardUser;
