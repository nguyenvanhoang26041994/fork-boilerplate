import React, { useState, useContext, Component } from 'react';
import useGroups from './useGroups';
import useChannels from './useChannels';
import useUsers from './useUsers';

const ChatContext = React.createContext({
  channels: [],
  groups: [],
  users: [],
});

const useStore = () => {
  const { channels, addChannel, removeChannel } = useChannels();
  const { groups } = useGroups();
  const { users } = useUsers();

  return {
    channels,
    addChannel,
    removeChannel,
    groups,
    users,
  };
};

export const Provider = ({ children }) => {
  const store = useStore();
  return (
    <ChatContext.Provider value={store}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  return useContext(ChatContext);
};

export const withContext = (InputComponent) => {
  const OutputComponent = (props) => (
    <Provider>
      <InputComponent {...props} />
    </Provider>
  );

  OutputComponent.displayName = `withChatContext(${InputComponent.displayName || InputComponent.name})`;
  return OutputComponent;
};
