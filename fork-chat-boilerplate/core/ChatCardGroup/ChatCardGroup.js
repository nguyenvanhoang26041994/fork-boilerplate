import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import PropType from 'prop-types';
import { Badge, Avatar } from '@fork-ui/core';

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
            <Avatar loading="lazy" src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/c11.0.100.100a/p100x100/30742449_1491970024265673_1550576325926846464_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=7206a8&_nc_ohc=2oMnvtTy_7wAX-DJr5m&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=27&oh=b8099de9faa431c553b0ef32be399495&oe=60DB688A">OP</Avatar>
            <Avatar loading="lazy" src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/p100x100/180904085_3892238354216551_318542444565664736_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=7206a8&_nc_ohc=MgrLjXsMiXMAX-WWTgL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=6&oh=157a71f6ef6f7cc305f7195d1c82ee10&oe=60DAA837">H</Avatar>
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
