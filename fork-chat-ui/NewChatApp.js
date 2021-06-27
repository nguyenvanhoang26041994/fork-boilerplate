import React, { useState, useRef, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import {
  Button, Badge, Avatar, AvatarGroup,
  Dialog, Textarea, Textbox, Collapse,
  Loader,
} from '@fork-ui/core';
import {
  Settings, Plus, Photo, ThumbUp, Moon, Search,
  Phone, Video, ChevronDown, AlertCircle, Dots
} from '@fork-ui/icons/lazy';
import { ChatCard } from './core';
import DarkMode from '@contexts/DarkMode';

const channels = [
  {

  }
];

const SearchboxWrapper = styled.div`
  position: relative;
  .search-icon {
    position: absolute;
    left: 0;
    top: 50%;
    padding: 3px;
    transform: translate(50%, -50%);
  }
  .search-input {
    border: 0;
    background-color: transparent;
    border-radius: 999px;
    min-height: 45px;
    padding-left: 40px;
    padding-right: 20px;

    &:hover,
    &:focus {
      background-color: var(--btn-bg);
    }
  }
`;
const Searchbox = () => {
  return (
    <SearchboxWrapper className="w-full">
      <div className="search-icon">
        <Search />
      </div>
      <Textbox className="search-input" placeholder="Search..." />
    </SearchboxWrapper>
  );
};

const Wrapper = styled.div`
  .header-wrapper {
    background-color: var(--bg);
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    height: 80px;
    border-bottom: 1px solid var(--skeleton-color);
  }

  .header__middle {
    flex: 1;
  }

  .body-wrapper {
    height: calc(100vh - 80px);
  }

  .body {
    display: flex;
    height: 100%;
  }

  .header__left,
  .left-section {
    width: 420px;
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
    width: 420px;
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
  padding-left: 25px;
  padding-right: 25px;
`;
const ChatBody = styled(Dialog.Body)`
  .chat-lists {
    margin: 0 auto;
    min-height: 100%;
    padding-left: 25px;
    padding-right: 25px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;
const ChatFooter = styled(Dialog.Footer)`
  padding-left: 25px;
  padding-right: 25px;
  /* border-top: 1px solid var(--skeleton-color); */
`;

const StyledChatInput = styled(Textbox)`
  border-color: transparent;
  border: 0;
  background-color: var(--btn-bg);
  border-radius: 999px;
  resize: none;
  min-height: 45px;
  padding: 0 20px;
  box-sizing: border-box;
`;

const ChatSession = styled.div`
  display: flex;
  .chat-sesstion-body {
    display: flex;
    align-items: flex-start;
  }
  .chat-sesstion-sender {
    visibility: hidden;
  }
  .chat-content-wapper {
    display: flex;
    flex-direction: column;
    margin: 0 8px;
  }
  .chat-content {
    padding: 18px;
    display: inline-block;
    max-width: 550px;
  }

  .chat-meta {
    display: none;
    padding: 4px 0;
  }

  &.--incomming.--start {
    .chat-sesstion-sender {
      visibility: visible;
    }
  }

  &.--outcomming {
    .chat-sesstion-sender {
      display: none;
    }
  }

  &.--outcomming {
    justify-content: flex-end;
    .chat-sesstion-body {
      flex-direction: row-reverse;
    }
    .chat-content-wapper {
      align-items: flex-end;
    }
    .chat-content {
      background-color: var(--primary);
      color: var(--white);
      border-radius: 16px 0 0 16px;
    }
  }

  &.--outcomming.--start {
    .chat-content {
      border-radius: 16px 16px 0 16px;
    }
  }
  &.--outcomming.--end {
    .chat-content {
      border-radius: 16px 0 16px 16px;
    }
    .chat-meta {
      display: block;
    }
  }

  &.--incomming {
    justify-content: flex-start;
    .chat-content-wapper {
      align-items: flex-start;
    }
    .chat-content {
      border-radius: 0 16px 16px 0;
      background-color: var(--btn-bg);
    }
  }
  &.--incomming.--start {
    .chat-content {
      border-radius: 16px 16px 16px 0;
    }
  }
  &.--incomming.--end {
    .chat-content {
      border-radius: 0 16px 16px 16px;
    }
    .chat-meta {
      display: block;
    }
  }
`;

const StyledAvatarGroup = styled(AvatarGroup)`
  position: relative;
  width: 60px;
  height: 60px;
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
`;
const NewChatApp = () => {
  const { toggleDark } = DarkMode.useContext();
  const [isRightbarOpen, setRightbarOpen] = useState(true);
  const ref = useRef();
  const scrollToBottom = useCallback(() => {
    ref.current && ref.current.scrollTo({
      top: 9999999,
      behavior: 'smooth',
    });
  }, [ref]);

  useEffect(() => {
    scrollToBottom();
  }, [])

  return (
    <Wrapper>
      <div className="header-wrapper">
        <header className="header">
          <div className="header__left"></div>
          <div className="header__middle">
            <Searchbox />
          </div>
          <div className="header__left flex items-center justify-end pl-5 pr-5">
            <Button size="18px" rounded color="transparent" icon={<Settings />} />
            <Badge.Dot color="var(--green-6)" overlap placement="bottom-end" className="ml-3">
              <Avatar size={45} loading="lazy" src="https://avatars.githubusercontent.com/u/20764362?v=4" />
            </Badge.Dot>
          </div>
        </header>
      </div>
      <div className="body-wrapper">
        <div className="body">
          <div className="left-section">
            <Dialog style={{ height: '100%' }}>
              <Dialog.Body className="common-scrollbar common-scrollbar--hover p-0">
                <div className="w-full" style={{ height: '100%' }}>
                  <div className="chat-card-list">
                    <ChatCard>
                      <ChatCard.Avatar>
                        <Badge.Dot color="var(--green-6)" overlap placement="bottom-end">
                          <Avatar size={50} src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/c0.3.100.100a/p100x100/118778813_1296512784041875_3829794088342017355_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_ohc=N4v7qSIU508AX-_GAhb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=27&oh=a282cd27c0b613d66f39698a22763231&oe=60DBA385" />
                        </Badge.Dot>
                      </ChatCard.Avatar>
                      <ChatCard.Content>
                        <ChatCard.Name isHighlight>Tùng Lê</ChatCard.Name>
                        <ChatCard.Message>H về đợi vé mòn mắt &bull; 05:43 AM</ChatCard.Message>
                      </ChatCard.Content>
                      <ChatCard.Meta>
                        <ChatCard.Unread>2</ChatCard.Unread>
                      </ChatCard.Meta>
                    </ChatCard>
                      {/* 
                      <div className="flex-1 flex flex-col justify-center ml-3">
                        <div style={{ fontWeight: '600' }}>Tùng Lê</div>
                        <p className="__recent-message">H về đợi vé mòn mắt</p>
                      </div>
                      <div className="flex flex-col justify-center items-end ml-3">
                        <div className="__time">07:23 AM</div>
                        <div className="__unread-count">2</div>
                      </div> */}

                    <ChatCard>
                      <div className="__avatar">
                        <Badge.Dot color="var(--orange-6)" overlap placement="bottom-end">
                          <Avatar size={50} src="https://scontent.xx.fbcdn.net/v/t1.6435-1/p100x100/148962648_1904322393054746_5039216451616807960_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=gnHyYyj-r3wAX8ISWuP&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=6&oh=1e85474e8f2e6e15fe660984b366e707&oe=60D9E8D4" />
                        </Badge.Dot>
                      </div>
                      <div className="flex-1 flex flex-col justify-center ml-3">
                        <div style={{ fontWeight: '600' }}>Thái Sơn</div>
                        <p className="__recent-message">Cho em hỏi cái này với anh?</p>
                      </div>
                      <div className="flex flex-col justify-center items-end ml-3">
                        <div className="__time">05:43 AM</div>
                        <div className="__unread-count">6</div>
                      </div>
                    </ChatCard>

                    <ChatCard>
                      <div className="__avatar">
                        <Badge.Dot color="var(--green-6)" overlap placement="bottom-end">
                          <Avatar size={50} src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.6435-1/p100x100/143865111_3746460238794789_1710538082440547779_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=7206a8&_nc_ohc=9WgBlVUihKAAX8tF4W9&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-sin6-1.xx&tp=6&oh=01f24b8e880ec29878ca0d1258624b55&oe=60DAD231" />
                        </Badge.Dot>
                      </div>
                      <div className="flex-1 flex flex-col justify-center ml-3">
                        <div style={{ fontWeight: '600' }}>Nguyễn Ngọc Hân</div>
                        <p className="__recent-message">OK thank dude</p>
                      </div>
                      <div className="flex flex-col justify-center items-end ml-3">
                        <div className="__time">06:03 PM</div>
                        <div>&nbsp;</div>
                      </div>
                    </ChatCard>

                    <ChatCard>
                      <div className="__avatar">
                        <Badge.Dot color="var(--green-6)" overlap placement="bottom-end">
                          <Avatar size={50} src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/p100x100/180904085_3892238354216551_318542444565664736_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=7206a8&_nc_ohc=MgrLjXsMiXMAX-WWTgL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=6&oh=157a71f6ef6f7cc305f7195d1c82ee10&oe=60DAA837" />
                        </Badge.Dot>
                      </div>
                      <div className="flex-1 flex flex-col justify-center ml-3">
                        <div style={{ fontWeight: '600' }}>Ngô Nhật Minh</div>
                        <p className="__recent-message">Tối về nghiên cứu cách thức vận hành xem sao</p>
                      </div>
                      <div className="flex flex-col justify-center items-end ml-3">
                        <div className="__time">06:03 PM</div>
                        <div>&nbsp;</div>
                      </div>
                    </ChatCard>

                    <ChatCard>
                      <div className="__avatar">
                        <Badge.Dot color="var(--green-6)" overlap placement="bottom-end">
                          <Avatar size={50} src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/c11.0.100.100a/p100x100/30742449_1491970024265673_1550576325926846464_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=7206a8&_nc_ohc=2oMnvtTy_7wAX-DJr5m&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=27&oh=b8099de9faa431c553b0ef32be399495&oe=60DB688A" />
                        </Badge.Dot>
                      </div>
                      <div className="flex-1 flex flex-col justify-center ml-3">
                        <div style={{ fontWeight: '600' }}>Lê Thuận</div>
                        <p className="__recent-message">You: hả</p>
                      </div>
                      <div className="flex flex-col justify-center items-end ml-3">
                        <div className="__time">3 weeks ago</div>
                        <div>&nbsp;</div>
                      </div>
                    </ChatCard>
                    <ChatCard>
                      <div className="__avatar">
                        <Badge.Dot color="var(--green-6)" overlap placement="bottom-end">
                          <StyledAvatarGroup>
                            <Avatar src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/c11.0.100.100a/p100x100/30742449_1491970024265673_1550576325926846464_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=7206a8&_nc_ohc=2oMnvtTy_7wAX-DJr5m&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=27&oh=b8099de9faa431c553b0ef32be399495&oe=60DB688A">OP</Avatar>
                            <Avatar src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/p100x100/180904085_3892238354216551_318542444565664736_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=7206a8&_nc_ohc=MgrLjXsMiXMAX-WWTgL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=6&oh=157a71f6ef6f7cc305f7195d1c82ee10&oe=60DAA837">H</Avatar>
                          </StyledAvatarGroup>
                        </Badge.Dot>
                      </div>
                      <div className="flex-1 flex flex-col justify-center ml-3">
                        <div style={{ fontWeight: '600' }}>Hội Bang Cuối Tuần</div>
                        <p className="__recent-message">Ái Vân: OK</p>
                      </div>
                      <div className="flex flex-col justify-center items-end ml-3">
                        <div className="__time">3 mins ago</div>
                        <div className="__unread-count">6</div>
                      </div>
                    </ChatCard>
                  </div>
                </div>
                
              </Dialog.Body>
              <Dialog.Footer className="justify-start">
                <Button rounded color="transparent" icon={<Moon />} onClick={toggleDark} />
              </Dialog.Footer>
            </Dialog>
          </div>
          <main className="main">
            <ChatContainer>
              <ChatHeader>
                <div className="flex items-center justify-between w-full">
                  <div>
                    <div className="flex items-center">
                      <Badge.Dot color="var(--green-6)" overlap placement="bottom-end">
                        <StyledAvatarGroup>
                          <Avatar src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/c11.0.100.100a/p100x100/30742449_1491970024265673_1550576325926846464_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=7206a8&_nc_ohc=2oMnvtTy_7wAX-DJr5m&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=27&oh=b8099de9faa431c553b0ef32be399495&oe=60DB688A">OP</Avatar>
                          <Avatar src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/p100x100/180904085_3892238354216551_318542444565664736_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=7206a8&_nc_ohc=MgrLjXsMiXMAX-WWTgL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=6&oh=157a71f6ef6f7cc305f7195d1c82ee10&oe=60DAA837">H</Avatar>
                        </StyledAvatarGroup>
                      </Badge.Dot>
                      <h1 className="ml-3" style={{ fontSize: '16px', color: 'var(--heading-color)' }}>Hội Bang Cuối Tuần</h1>
                    </div>
                  </div>
                  <div>
                    <Button rounded icon={<Phone />} />
                    <Button rounded icon={<Video />} className="ml-3" />
                    <Button rounded icon={<AlertCircle />} className="ml-3" onClick={() => setRightbarOpen(prev => !prev)} />
                  </div>
                </div>
              </ChatHeader>
              <ChatBody className="common-scrollbar common-scrollbar--hover" ref={ref}>
                <div className="w-full" style={{ maxWidth: '900px', height: '100%', margin: '0 auto' }}>
                  <div data-id="loadMoreTop" className="flex items-center justify-center">
                    <Loader.Spinner className="p-3" />
                  </div>
                  <div className="chat-lists">
                    <ChatSession className="--incomming --start mb-2">
                      <div className="chat-sesstion-body">
                        <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/c0.3.100.100a/p100x100/118778813_1296512784041875_3829794088342017355_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_ohc=N4v7qSIU508AX-_GAhb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=27&oh=a282cd27c0b613d66f39698a22763231&oe=60DBA385" />
                        <div className="chat-content-wapper">
                          <div className="chat-content">
                            Dropping' baby off at home before my night shift.
                          </div>
                          <div className="chat-meta">Message send 0:30 PM</div>
                        </div>
                      </div>
                    </ChatSession>
                    <ChatSession className="--incomming mb-2">
                      <div className="chat-sesstion-body">
                        <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/c0.3.100.100a/p100x100/118778813_1296512784041875_3829794088342017355_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_ohc=N4v7qSIU508AX-_GAhb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=27&oh=a282cd27c0b613d66f39698a22763231&oe=60DBA385" />
                        <div className="chat-content-wapper">
                          <div className="chat-content">
                            Dropping'
                          </div>
                          <div className="chat-meta">Message send 0:30 PM</div>
                        </div>
                      </div>
                    </ChatSession>
                    <ChatSession className="--incomming --end mb-8">
                      <div className="chat-sesstion-body">
                        <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/c0.3.100.100a/p100x100/118778813_1296512784041875_3829794088342017355_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_ohc=N4v7qSIU508AX-_GAhb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=27&oh=a282cd27c0b613d66f39698a22763231&oe=60DBA385" />
                        <div className="chat-content-wapper">
                          <div className="chat-content">
                            Dropping' baby off at home before my night shift. You known i can't hear none of that spend the night stuff. That kumbaya stuff wanna see nirana, but don't wanna die yet. Wanna feel that nana thought, could you come by?
                          </div>
                          <div className="chat-meta">Message send 0:30 PM</div>
                        </div>
                      </div>
                    </ChatSession>
                    <ChatSession className="--outcomming --start mb-2">
                      <div className="chat-sesstion-body">
                        <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://avatars.githubusercontent.com/u/20764362?v=4" />
                        <div className="chat-content-wapper">
                          <div className="chat-content">
                            Purchasing crappy things with haft the hand of cash in hand
                          </div>
                          <div className="chat-meta">Message send 0:40 PM</div>
                        </div>
                      </div>
                    </ChatSession>
                    <ChatSession className="--outcomming mb-2">
                      <div className="chat-sesstion-body">
                        <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://avatars.githubusercontent.com/u/20764362?v=4" />
                        <div className="chat-content-wapper">
                          <div className="chat-content">
                            Now i have some thing to tell you.
                          </div>
                          <div className="chat-meta">Message send 1:40 PM</div>
                        </div>
                      </div>
                    </ChatSession>
                    <ChatSession className="--outcomming --end mb-8">
                      <div className="chat-sesstion-body">
                        <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://avatars.githubusercontent.com/u/20764362?v=4" />
                        <div className="chat-content-wapper">
                          <div className="chat-content">
                            All my night, been ready for you all my night. Been waitin' on you all my night. I'll buzz you in, just let me known when you outside. All my night you.
                          </div>
                          <div className="chat-meta">Message send 1:46 PM</div>
                        </div>
                      </div>
                    </ChatSession>



                    <ChatSession className="--incomming --start mb-2">
                      <div className="chat-sesstion-body">
                        <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/c0.3.100.100a/p100x100/118778813_1296512784041875_3829794088342017355_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_ohc=N4v7qSIU508AX-_GAhb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=27&oh=a282cd27c0b613d66f39698a22763231&oe=60DBA385" />
                        <div className="chat-content-wapper">
                          <div className="chat-content">
                            Dropping' baby off at home before my night shift.
                          </div>
                          <div className="chat-meta">Message send 0:30 PM</div>
                        </div>
                      </div>
                    </ChatSession>
                    <ChatSession className="--incomming mb-2">
                      <div className="chat-sesstion-body">
                        <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/c0.3.100.100a/p100x100/118778813_1296512784041875_3829794088342017355_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_ohc=N4v7qSIU508AX-_GAhb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=27&oh=a282cd27c0b613d66f39698a22763231&oe=60DBA385" />
                        <div className="chat-content-wapper">
                          <div className="chat-content">
                            Dropping'
                          </div>
                          <div className="chat-meta">Message send 0:30 PM</div>
                        </div>
                      </div>
                    </ChatSession>
                    <ChatSession className="--incomming --end mb-8">
                      <div className="chat-sesstion-body">
                        <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/c0.3.100.100a/p100x100/118778813_1296512784041875_3829794088342017355_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_ohc=N4v7qSIU508AX-_GAhb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=27&oh=a282cd27c0b613d66f39698a22763231&oe=60DBA385" />
                        <div className="chat-content-wapper">
                          <div className="chat-content">
                            Dropping' baby off at home before my night shift. You known i can't hear none of that spend the night stuff. That kumbaya stuff wanna see nirana, but don't wanna die yet. Wanna feel that nana thought, could you come by?
                          </div>
                          <div className="chat-meta">Message send 0:30 PM</div>
                        </div>
                      </div>
                    </ChatSession>
                    <ChatSession className="--outcomming --start mb-2">
                      <div className="chat-sesstion-body">
                        <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://avatars.githubusercontent.com/u/20764362?v=4" />
                        <div className="chat-content-wapper">
                          <div className="chat-content">
                            Purchasing crappy things with haft the hand of cash in hand
                          </div>
                          <div className="chat-meta">Message send 0:40 PM</div>
                        </div>
                      </div>
                    </ChatSession>
                    <ChatSession className="--outcomming mb-2">
                      <div className="chat-sesstion-body">
                        <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://avatars.githubusercontent.com/u/20764362?v=4" />
                        <div className="chat-content-wapper">
                          <div className="chat-content">
                            Now i have some thing to tell you.
                          </div>
                          <div className="chat-meta">Message send 1:40 PM</div>
                        </div>
                      </div>
                    </ChatSession>
                    <ChatSession className="--outcomming --end mb-8">
                      <div className="chat-sesstion-body">
                        <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://avatars.githubusercontent.com/u/20764362?v=4" />
                        <div className="chat-content-wapper">
                          <div className="chat-content">
                            All my night, been ready for you all my night. Been waitin' on you all my night. I'll buzz you in, just let me known when you outside. All my night you.
                          </div>
                          <div className="chat-meta">Message send 1:46 PM</div>
                        </div>
                      </div>
                    </ChatSession><ChatSession className="--incomming --start mb-2">
                      <div className="chat-sesstion-body">
                        <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/c0.3.100.100a/p100x100/118778813_1296512784041875_3829794088342017355_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_ohc=N4v7qSIU508AX-_GAhb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=27&oh=a282cd27c0b613d66f39698a22763231&oe=60DBA385" />
                        <div className="chat-content-wapper">
                          <div className="chat-content">
                            Dropping' baby off at home before my night shift.
                          </div>
                          <div className="chat-meta">Message send 0:30 PM</div>
                        </div>
                      </div>
                    </ChatSession>
                    <ChatSession className="--incomming mb-2">
                      <div className="chat-sesstion-body">
                        <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/c0.3.100.100a/p100x100/118778813_1296512784041875_3829794088342017355_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_ohc=N4v7qSIU508AX-_GAhb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=27&oh=a282cd27c0b613d66f39698a22763231&oe=60DBA385" />
                        <div className="chat-content-wapper">
                          <div className="chat-content">
                            Dropping'
                          </div>
                          <div className="chat-meta">Message send 0:30 PM</div>
                        </div>
                      </div>
                    </ChatSession>
                    <ChatSession className="--incomming --end mb-8">
                      <div className="chat-sesstion-body">
                        <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/c0.3.100.100a/p100x100/118778813_1296512784041875_3829794088342017355_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_ohc=N4v7qSIU508AX-_GAhb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=27&oh=a282cd27c0b613d66f39698a22763231&oe=60DBA385" />
                        <div className="chat-content-wapper">
                          <div className="chat-content">
                            Dropping' baby off at home before my night shift. You known i can't hear none of that spend the night stuff. That kumbaya stuff wanna see nirana, but don't wanna die yet. Wanna feel that nana thought, could you come by?
                          </div>
                          <div className="chat-meta">Message send 0:30 PM</div>
                        </div>
                      </div>
                    </ChatSession>
                    <ChatSession className="--outcomming --start mb-2">
                      <div className="chat-sesstion-body">
                        <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://avatars.githubusercontent.com/u/20764362?v=4" />
                        <div className="chat-content-wapper">
                          <div className="chat-content">
                            Purchasing crappy things with haft the hand of cash in hand
                          </div>
                          <div className="chat-meta">Message send 0:40 PM</div>
                        </div>
                      </div>
                    </ChatSession>
                    <ChatSession className="--outcomming mb-2">
                      <div className="chat-sesstion-body">
                        <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://avatars.githubusercontent.com/u/20764362?v=4" />
                        <div className="chat-content-wapper">
                          <div className="chat-content">
                            Now i have some thing to tell you.
                          </div>
                          <div className="chat-meta">Message send 1:40 PM</div>
                        </div>
                      </div>
                    </ChatSession>
                    <ChatSession className="--outcomming --end mb-8">
                      <div className="chat-sesstion-body">
                        <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://avatars.githubusercontent.com/u/20764362?v=4" />
                        <div className="chat-content-wapper">
                          <div className="chat-content">
                            All my night, been ready for you all my night. Been waitin' on you all my night. I'll buzz you in, just let me known when you outside. All my night you.
                          </div>
                          <div className="chat-meta">Message send 1:46 PM</div>
                        </div>
                      </div>
                    </ChatSession><ChatSession className="--incomming --start mb-2">
                      <div className="chat-sesstion-body">
                        <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/c0.3.100.100a/p100x100/118778813_1296512784041875_3829794088342017355_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_ohc=N4v7qSIU508AX-_GAhb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=27&oh=a282cd27c0b613d66f39698a22763231&oe=60DBA385" />
                        <div className="chat-content-wapper">
                          <div className="chat-content">
                            Dropping' baby off at home before my night shift.
                          </div>
                          <div className="chat-meta">Message send 0:30 PM</div>
                        </div>
                      </div>
                    </ChatSession>
                    <ChatSession className="--incomming mb-2">
                      <div className="chat-sesstion-body">
                        <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/c0.3.100.100a/p100x100/118778813_1296512784041875_3829794088342017355_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_ohc=N4v7qSIU508AX-_GAhb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=27&oh=a282cd27c0b613d66f39698a22763231&oe=60DBA385" />
                        <div className="chat-content-wapper">
                          <div className="chat-content">
                            Dropping'
                          </div>
                          <div className="chat-meta">Message send 0:30 PM</div>
                        </div>
                      </div>
                    </ChatSession>
                    <ChatSession className="--incomming --end mb-8">
                      <div className="chat-sesstion-body">
                        <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/c0.3.100.100a/p100x100/118778813_1296512784041875_3829794088342017355_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_ohc=N4v7qSIU508AX-_GAhb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=27&oh=a282cd27c0b613d66f39698a22763231&oe=60DBA385" />
                        <div className="chat-content-wapper">
                          <div className="chat-content">
                            Dropping' baby off at home before my night shift. You known i can't hear none of that spend the night stuff. That kumbaya stuff wanna see nirana, but don't wanna die yet. Wanna feel that nana thought, could you come by?
                          </div>
                          <div className="chat-meta">Message send 0:30 PM</div>
                        </div>
                      </div>
                    </ChatSession>
                    <ChatSession className="--outcomming --start mb-2">
                      <div className="chat-sesstion-body">
                        <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://avatars.githubusercontent.com/u/20764362?v=4" />
                        <div className="chat-content-wapper">
                          <div className="chat-content">
                            Purchasing crappy things with haft the hand of cash in hand
                          </div>
                          <div className="chat-meta">Message send 0:40 PM</div>
                        </div>
                      </div>
                    </ChatSession>
                    <ChatSession className="--outcomming mb-2">
                      <div className="chat-sesstion-body">
                        <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://avatars.githubusercontent.com/u/20764362?v=4" />
                        <div className="chat-content-wapper">
                          <div className="chat-content">
                            Now i have some thing to tell you.
                          </div>
                          <div className="chat-meta">Message send 1:40 PM</div>
                        </div>
                      </div>
                    </ChatSession>
                    <ChatSession className="--outcomming --end mb-8">
                      <div className="chat-sesstion-body">
                        <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://avatars.githubusercontent.com/u/20764362?v=4" />
                        <div className="chat-content-wapper">
                          <div className="chat-content">
                            All my night, been ready for you all my night. Been waitin' on you all my night. I'll buzz you in, just let me known when you outside. All my night you.
                          </div>
                          <div className="chat-meta">Message send 1:46 PM</div>
                        </div>
                      </div>
                    </ChatSession>
                  </div>
                  <div data-id="loadMoreBottom" className="flex items-center justify-center">
                    <Loader.Spinner className="p-2" />
                  </div>
                </div>
              </ChatBody>
              <ChatFooter>
                <div className="w-full flex items-center justify-center" style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    top: '-40px',
                    right: 0,
                    left: 'auto',
                  }}>
                    <Badge.Counter count={2} overlap placement="top-end">
                      <Button rounded icon={<ChevronDown />} onClick={scrollToBottom} />
                    </Badge.Counter>
                  </div>
                  <div style={{
                    position: 'absolute',
                    top: '-40px',
                    right: 'auto',
                    left: 0,
                  }}>
                    <div className="flex items-center">
                      <AvatarGroup>
                        <Avatar size={25} loading="lazy" src="https://avatars.githubusercontent.com/u/20764362?v=4" />
                        <Avatar size={25} loading="lazy" src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/c11.0.100.100a/p100x100/30742449_1491970024265673_1550576325926846464_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=7206a8&_nc_ohc=2oMnvtTy_7wAX-DJr5m&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=27&oh=b8099de9faa431c553b0ef32be399495&oe=60DB688A" />
                      </AvatarGroup>
                      <Loader.Dots className="ml-3" size="7px" color="var(--primary)" />
                    </div>
                  </div>
                  <div className="flex items-center w-full">
                    <Button rounded icon={<Plus />} className="mr-2" />
                    <Button rounded icon={<Photo />} className="mr-2" />
                    <StyledChatInput placeholder="Aa" spellCheck={false} />
                    <Button color="primary" rounded icon={<ThumbUp />} className="ml-2" />
                  </div>
                </div>
              </ChatFooter>
            </ChatContainer>
          </main>
          {isRightbarOpen && (
            <div className="right-section">
              <Dialog style={{ height: '100%' }}>
                <Dialog.Body className="common-scrollbar common-scrollbar--hover p-0" style={{ height: '100%' }}>
                  <div className="flex items-center justify-center">
                    <AvatarGroup className="mt-10">
                      <Avatar size={80} loading="lazy" alt="" src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/c0.3.100.100a/p100x100/118778813_1296512784041875_3829794088342017355_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_ohc=N4v7qSIU508AX-_GAhb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=27&oh=a282cd27c0b613d66f39698a22763231&oe=60DBA385" />
                      <Avatar size={80} loading="lazy" alt="" src="https://scontent.xx.fbcdn.net/v/t1.6435-1/p100x100/148962648_1904322393054746_5039216451616807960_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=gnHyYyj-r3wAX8ISWuP&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=6&oh=1e85474e8f2e6e15fe660984b366e707&oe=60D9E8D4" />
                    </AvatarGroup>
                  </div>
                </Dialog.Body>
              </Dialog>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default NewChatApp;
