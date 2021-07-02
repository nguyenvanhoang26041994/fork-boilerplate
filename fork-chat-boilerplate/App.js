import React, { useState, useRef, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { withContext as withChatContext} from './fork-chat-store';

import {
  Button,
  Badge,
  Avatar,
  Dialog,
  Textbox,
  Loader,
  Memo,
  Searchbox
} from '@fork-ui/core';
import {
  Settings, Moon, Search,
  Phone, Video, AlertCircle, Dots,
  Edit, VideoPlus, Bell,
} from '@fork-ui/icons/lazy';
import {
  AvatarGroup as RoundedAvatarGroup,
  FloatTyping,
  FloatUnread,
} from './core';
import ChatCardList from './components/ChatCardList';
import GroupChannelDetail from './components/GroupChannelDetail';
import MainChatbox from './components/MainChatbox';

import ChatSesstions from './ChatSesstions';
import DarkMode from '@contexts/DarkMode';

import { users } from './fake';

const _users = users.reduce((rs, user) => {
  rs[user.id] = user;
  return rs;
}, {});
const StyledSearchbox = styled(Searchbox)`
  .fsearchbox-textbox {
    border-radius: 999px;
    border-color: transparent;
    background-color: var(--btn-bg);
    border-color: var(--btn-bg);

    &:hover {
      border-color: var(--btn-bg);
    }
  }
`;
const Wrapper = styled.div`
  --header-height: 70px;
  --nice-spacing: 25px;
  .header-wrapper {
    background-color: var(--bg);
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    height: var(--header-height);
    border-bottom: 1px solid var(--skeleton-color);
  }

  .header__middle {
    flex: 1;
  }

  .body-wrapper {
    height: calc(100vh - var(--header-height));
  }

  .body {
    display: flex;
    height: 100%;
  }

  .header__left,
  .left-section {
    width: 400px;
  }
  .left-section {
    flex-shrink: 0;
    background-color: var(--bg);
    border-right: 1px solid var(--skeleton-color);
  }
  .main {
    flex: 1;
    background-color: var(--bg);
  }
  .header__right,
  .right-section {
    width: 400px;
  }
  .right-section {
    flex-shrink: 0;
    background-color: var(--bg);
    border-left: 1px solid var(--skeleton-color);
  }
`;

const ChatContainer = styled(Dialog)`
  height: 100%;
`;
const ChatHeader = styled(Dialog.Header)`
  height: 80px;
  padding-left: var(--nice-spacing);
  padding-right: var(--nice-spacing);
`;
const ChatBody = styled(Dialog.Body)`
  .chat-sessions {
    margin: 0 auto;
    min-height: 100%;
    padding-left: var(--nice-spacing);
    padding-right: var(--nice-spacing);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;
const ChatFooter = styled(Dialog.Footer)`
  padding-left: 25px;
  padding-right: 25px;
`;

const App = () => {
  const { toggleDark } = DarkMode.useContext();
  const [isRightbarOpen, setRightbarOpen] = useState(true);
  const [messages, setMessages] = useState([]);
  const inputRef = useRef();

  const ref = useRef();
  const scrollToBottom = useCallback(() => {
    ref.current && ref.current.scrollTo({
      top: 9999999,
      behavior: 'smooth',
    });
  }, [ref]);

  useEffect(() => {
    scrollToBottom();
    inputRef.current && inputRef.current.focus();
  }, []);

  const onSubmit = useCallback(({ message }) => {
    setMessages(prev => [...prev, message]);
  }, [setMessages]);

  return (
    <Wrapper>
      <div className="header-wrapper">
        <header className="header">
          <div className="header__left"></div>
          <div className="header__middle">
            <div>
              <StyledSearchbox placeholder="Aa" />
            </div>
          </div>
          <div className="header__left flex items-center justify-end pl-5 pr-5">
            <Badge.Dot color="var(--green-6)" overlap placement="bottom-end">
              <Avatar size={30} loading="lazy" src={_users['111'].avatar} />
            </Badge.Dot>
            <Button rounded icon={<Moon />} onClick={toggleDark} className="ml-3" />
            <Badge.Counter count={8} overlap placement="top-end" className="ml-3">
              <Button rounded icon={<Bell />}/>
            </Badge.Counter>
            <Button rounded icon={<Settings />} className="ml-3" />
          </div>
        </header>
      </div>
      <div className="body-wrapper">
        <div className="body">
          <div className="left-section">
            <Dialog style={{ height: '100%' }}>
              <Dialog.Header style={{ height: '80px' }}>
                <div className="w-full flex items-center justify-between">
                  <div>
                    <h2 style={{ fontSize: '18px', color: 'var(--heading-color)'}}>Chats</h2>
                  </div>
                  <div>
                    <Button color="transparent" rounded icon={<Dots />} />
                    <Button color="transparent" rounded icon={<VideoPlus />} className="ml-3" />
                    <Button color="transparent" rounded icon={<Edit />} className="ml-3" />
                  </div>
                </div>
              </Dialog.Header>
              <Dialog.Body className="p-0">
                <div className="w-full" style={{ height: '100%' }}>
                  <ChatCardList />
                </div>
              </Dialog.Body>
            </Dialog>
          </div>
          <main className="main">
            <ChatContainer>
              <ChatHeader>
                <div className="flex items-center justify-between w-full">
                  <div>
                    <div className="flex items-center">
                      <Badge.Dot color="var(--green-6)" overlap placement="bottom-end">
                        <RoundedAvatarGroup className="">
                          <Avatar loading="lazy" src="https://c.pxhere.com/photos/f8/4f/dog_pug_animal_pet_funny_cute_adorable_canine-1368002.jpg!d">OP</Avatar>
                          <Avatar loading="lazy" src="https://www.thekennelclub.org.uk/media/2470/essential-equipment-credit-vanessa-palmer-vines-the-kennel-club.jpg?mode=pad&width=1000&rnd=132139691680000000">H</Avatar>
                        </RoundedAvatarGroup>
                      </Badge.Dot>
                      <h1 className="ml-3" style={{ fontSize: '16px', color: 'var(--heading-color)' }}>Hội Bang Cuối Tuần</h1>
                    </div>
                  </div>
                  <div>
                    <Button color="transparent" rounded icon={<Phone />} />
                    <Button color="transparent" rounded icon={<Video />} className="ml-3" />
                    <Button color="transparent" rounded icon={<AlertCircle />} className="ml-3" onClick={() => setRightbarOpen(prev => !prev)} />
                  </div>
                </div>
              </ChatHeader>
              <ChatBody ref={ref}>
                <div className="w-full" style={{ maxWidth: '900px', height: '100%', margin: '0 auto' }}>
                  <div data-id="loadMoreTop" className="flex items-center justify-center">
                    <Loader.Spinner className="p-3" />
                  </div>
                  <ChatSesstions className="chat-sessions" messages={messages} />
                  <div data-id="loadMoreBottom" className="flex items-center justify-center">
                    <Loader.Spinner className="p-2" />
                  </div>
                </div>
              </ChatBody>
              <ChatFooter>
                <div className="w-full flex items-center justify-center" style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    top: '-47px',
                    right: 0,
                    left: 'auto',
                  }}>
                    <FloatUnread count={2} onClick={scrollToBottom} />
                  </div>
                  <div style={{
                    position: 'absolute',
                    top: '-40px',
                    right: 'auto',
                    left: 0,
                  }}>
                    <FloatTyping className="flex items-center">
                      <Avatar size={25} loading="lazy" src="https://avatars.githubusercontent.com/u/20764362?v=4" />
                      <Avatar size={25} loading="lazy" src="https://c.pxhere.com/photos/f8/4f/dog_pug_animal_pet_funny_cute_adorable_canine-1368002.jpg!d" />
                    </FloatTyping>
                  </div>
                  <MainChatbox ref={inputRef} scrollToBottom={scrollToBottom} onSubmit={onSubmit} />
                </div>
              </ChatFooter>
            </ChatContainer>
          </main>
          <Memo watch={isRightbarOpen}>
            <div className="right-section">
              <GroupChannelDetail />
            </div>
          </Memo>
        </div>
      </div>
    </Wrapper>
  );
};

export default withChatContext(App);
