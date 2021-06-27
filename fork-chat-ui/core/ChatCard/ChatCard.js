import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import PropType from 'prop-types';

import Avatar from './Avatar';
import Content from './Content';
import Name from './Name';
import Message from './Message';
import Meta from './Meta';
import Unread from './Unread';

const ChatCard = ({ className, children }) => {
  return (
    <div className={cn('fchat-card', className)}>
      {children}
    </div>
  );
};
ChatCard.Avatar = Avatar;
ChatCard.Content = Content;
ChatCard.Name = Name;
ChatCard.Message = Message;
ChatCard.Meta = Meta;
ChatCard.Unread = Unread;

export default ChatCard;
