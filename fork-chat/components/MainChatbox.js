import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { trim } from 'lodash';

import { Button, Textbox } from 'fork-design';
import { Plus, Photo, ThumbUp, Send, Location, MoodSmile } from 'fork-design/icons/lazy';
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

const MainChatbox = React.forwardRef(({ scrollToBottom, className, onSubmit }, ref) => {
  const [isShowSending, setIsShowSending] = useState(false);

  return (
    <MainChatboxWrapper className={className}>
      <Button rounded icon={<Plus />} className="mr-2" />
      <Button rounded icon={<Photo />} className="mr-2" />
      <Button rounded icon={<MoodSmile />} className="mr-2" />
      <StyledChatInputWrapper>
        <StyledChatInput
          ref={ref}
          placeholder="Aa"
          spellCheck={false}
          onChange={e => {
            setIsShowSending(!!trim(e.target.value));
          }}
          onKeyPress={(e) => {
            const message = trim(e.target.value);
            if (e.code === 'Enter' && message) {
              Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set.call(e.target, '');
              e.target.dispatchEvent(new Event('input', { bubbles: true }));
              onSubmit({ message });
              setTimeout(() => {
                scrollToBottom();
              }, 200);
            }
          }}
        />
      </StyledChatInputWrapper>
      <Button color="primary" rounded icon={isShowSending ? <Send /> : <ThumbUp />} className="ml-2" onClick={() => {
        const message = trim(e.target.value);
        if (message) {
          Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set.call(ref.current, '');
          ref.current.dispatchEvent(new Event('input', { bubbles: true }));
          onSubmit({ message });
          setTimeout(() => {
            scrollToBottom();
          }, 200);
        }
      }} />
    </MainChatboxWrapper>
  );
});

export default MainChatbox;
