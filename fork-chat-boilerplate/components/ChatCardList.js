import React from 'react';
import styled from 'styled-components';
import {
  ChatCardUser,
  ChatCardGroup,
 } from '../core';

import { channels, users, groups } from '../fake';

const _users = users.reduce((rs, user) => {
  rs[user.id] = user;
  return rs;
}, {});
const _groups = groups.reduce((rs, group) => {
  rs[group.id] = group;
  return rs;
}, {});


const ChatCardListWrapper = styled.div``;
const ChatCardList = ({ className, ...otherProps }) => {
  return (
    <ChatCardListWrapper className={className} {...otherProps}>
      {channels.map((channel) => {
        if (channel.type === 'user') {
          return (
            <ChatCardUser
              key={channel.id}
              channel={channel}
              user={_users[channel.metaData.user.id]}
            />
          );
        }
        if (channel.type === 'group') {
          return (
            <ChatCardGroup
              key={channel.id}
              channel={channel}
              group={_groups[channel.metaData.group.id]}
            />
          );
        }
        return null;
      })}
    </ChatCardListWrapper>
  );
};

export default ChatCardList;
