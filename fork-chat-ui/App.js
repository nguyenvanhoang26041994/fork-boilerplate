import React from 'react';
import styled from 'styled-components';
import { Dialog, Textarea, Avatar, Badge, Button } from '@fork-ui/core';
import { Phone, Video, Dots, MoodSmile, Microphone, Send, InfoCircle } from '@fork-ui/icons/lazy';

import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';

const Wrapper = styled.div`
  display: flex;

  .left-side-container {
    width: 400px;
  }

  .chat-main {
    flex: 1;
  }

  .right-side-container {
    width: 450px;
  }
`;
const Inputbox = styled(Textarea)`
  min-height: 50px;
  border-radius: 10px;
  margin: 0;
  border: 0;
  resize: none;
`;
const ChatContainer = styled(Dialog)`
  height: 100vh;
  border-radius: 0;
`;
const ChatBody = styled(Dialog.Body)`
  background-color: var(--bg);
`;
const ChatHeader = styled(Dialog.Header)`
  height: 80px;
  border-bottom: 1px solid var(--skeleton-color);
`;
const ChatFooter = styled(Dialog.Footer)``;
const Chatbox = styled.div`
  border: 1px solid var(--skeleton-color);
  border-radius: 10px;
`;

const StyledSendButton = styled(Button)`
  border-color: transparent;
  background-size: 200% auto;
  transition: 0.5s;
  color: var(--white);
  background-image: linear-gradient(to right, #1FA2FF 0%, #12D8FA  51%, #1FA2FF  100%);

  &:hover,
  &:focus {
    border-color: transparent;
    background-position: right center;
  }
`;

const MessageWrapper = styled.div`
  padding: 10px;
  background: var(--body-bg);
  margin-bottom: 4px;
  border-radius: 10px;
  max-width: 300px;
`;
const MessageContainer = styled.div`
  display: flex;
  &.--right {
    justify-content: flex-end;
    ${MessageWrapper} {
      /* background: rgb(218,34,255);
      background: linear-gradient(90deg, rgba(218,34,255,1) 52%, rgba(157,49,240,1) 92%); */
      color: var(--white);
      background-color: var(--primary);
    }
  }
`;

const Message = ({ children, width, className }) => {
  return (
    <MessageContainer className={className}>
      <MessageWrapper style={{ width: width }}>
        {children}
      </MessageWrapper>
    </MessageContainer>
  );
};

const App = () => {
  return (
    <Wrapper>
      <LeftSidebar className="left-side-container" />
      <main className="chat-main">
        <ChatContainer>
          <ChatHeader>
            <div className="flex">
              <Badge.Dot color="var(--green-6)" overlap placement="bottom-end">
                <Avatar src="https://avatars.githubusercontent.com/u/20764362?v=4" />
              </Badge.Dot>
              <div className="flex flex-col justify-center ml-5">
                <div>Hoàng Nguyễn</div>
                <div style={{ fontSize: '11px' }}>Active Now</div>
              </div>
            </div>
            <div className="flex items-center">
              <Button rounded color="transparent" icon={<Phone />} />
              <Button rounded color="transparent" icon={<Video />} className="ml-2" />
              <Button rounded color="transparent" icon={<InfoCircle />} className="ml-2" />
              <Button rounded color="transparent" icon={<Dots />} className="ml-2" />
            </div>
          </ChatHeader>
          <ChatBody className="common-scrollbar common-scrollbar--hover">
            <div className="h-full flex flex-col justify-end">
              <Message width={256}>sắp phỏng vấn r, lát nữa thử xem sao :v</Message>
              <Message width={282}>quái lạ là trước đó vẫn build dc bình thường</Message>
              <Message width={150}>chỉ là page trắng thôi</Message>
              <Message width={137}>giờ éo build dc luôn</Message>
              <Message width={189}>có vẻ hơi lag :v do server cùi</Message>
              <Message className="--right" width={139}>vercel build lau lam</Message>
              <Message width={38}>đù</Message>
              <Message width={190}>sao flex-direction: column nó khiến mình ko scroll dc ta :v</Message>
              <Message className="--right" width={283}>scroll phai co mex height cho thang wrapper</Message>
              <Message className="--right" width={146}>overflow: scoll moi co</Message>
              <Message className="--right" width={252}>lam gi co chuyen scroll tu co cho em dc</Message>
              <Message width={39}>ùm</Message>
              <Message width={128}>thì e có height rồi</Message>
              <Message width={173}>có overflow: scroll rồi luôn</Message>
              <Message width={129}>do cái display flex</Message>
              <Message className="--right" width={44}>thoi</Message>
              <Message className="--right" width={159}>cho cai height 100vh di </Message>
              <Message className="--right" width={104}>khoi flex-grow</Message>
              <Message width={38}>ùm</Message>
              <Message width={38}>:v</Message>
              <Message width={256}>sắp phỏng vấn r, lát nữa thử xem sao :v</Message>
              <Message width={282}>quái lạ là trước đó vẫn build dc bình thường</Message>
              <Message width={150}>chỉ là page trắng thôi</Message>
              <Message width={137}>giờ éo build dc luôn</Message>
              <Message width={189}>có vẻ hơi lag :v do server cùi</Message>
              <Message className="--right" width={139}>vercel build lau lam</Message>
              <Message width={38}>đù</Message>
              <Message width={190}>sao flex-direction: column nó khiến mình ko scroll dc ta :v</Message>
              <Message className="--right" width={283}>scroll phai co mex height cho thang wrapper</Message>
              <Message className="--right" width={146}>overflow: scoll moi co</Message>
              <Message className="--right" width={252}>lam gi co chuyen scroll tu co cho em dc</Message>
              <Message width={39}>ùm</Message>
              <Message width={128}>thì e có height rồi</Message>
              <Message width={173}>có overflow: scroll rồi luôn</Message>
              <Message width={129}>do cái display flex</Message>
              <Message className="--right" width={44}>thoi</Message>
              <Message className="--right" width={159}>cho cai height 100vh di </Message>
              <Message className="--right" width={104}>khoi flex-grow</Message>
              <Message width={38}>ùm</Message>
              <Message width={38}>:v</Message>
            </div>
          </ChatBody>
          <ChatFooter>
            <Chatbox className="w-full">
              <Inputbox spellCheck={false} />
              <div className="w-full flex items-center justify-end" style={{ padding: '4px 10px '}}>
                <div>
                  <Button rounded color="transparent" icon={<MoodSmile />} />
                  <Button rounded color="transparent" icon={<Microphone />} className="ml-2" />
                  <StyledSendButton rounded icon={<Send />} className="ml-2" />
                </div>
              </div>
            </Chatbox>
          </ChatFooter>
        </ChatContainer>
      </main>
      <RightSidebar className="right-side-container" />
    </Wrapper>
  );
};

export default App;
