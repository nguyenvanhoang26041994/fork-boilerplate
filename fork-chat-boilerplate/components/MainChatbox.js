import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { trim } from 'lodash';

import { Button, Textbox } from '@fork-ui/core';
import { Plus, Photo, ThumbUp, Send, Location, MoodSmile } from '@fork-ui/icons/lazy';
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

const MainChatboxWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const StyledChatInputWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const MainChatbox = ({ scrollToBottom, className }) => {
  const ref = useRef();
  const [isShowSending, setIsShowSending] = useState(false);

  return (
    <MainChatboxWrapper className={className}>
      <Button rounded icon={<Plus />} className="mr-2" />
      <Button rounded icon={<Photo />} className="mr-2" />
      <Button rounded icon={<Location />} className="mr-2" />
      <StyledChatInputWrapper>
        <StyledChatInput
          ref={ref}
          placeholder="Aa"
          spellCheck={false}
          onChange={e => {
            setIsShowSending(!!trim(e.target.value));
          }}
          onKeyPress={(e) => {
            if (e.code === 'Enter') {
              Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set.call(e.target, '');
              e.target.dispatchEvent(new Event('input', { bubbles: true }));
              setTimeout(() => {
                scrollToBottom();
              }, 200);
            }
          }}
        />
      </StyledChatInputWrapper>
      <Button rounded icon={<MoodSmile />} className="ml-2" />
      <Button color="primary" rounded icon={isShowSending ? <Send /> : <ThumbUp />} className="ml-2" onClick={() => {
        Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set.call(ref.current, '');
        ref.current.dispatchEvent(new Event('input', { bubbles: true }));
        setTimeout(() => {
          scrollToBottom();
        }, 200);
      }} />
    </MainChatboxWrapper>
  );
};

export default MainChatbox;
