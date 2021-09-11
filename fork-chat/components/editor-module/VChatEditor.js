import React, { useCallback } from 'react';
import data from 'emoji-mart/data/google.json';
import styled from 'styled-components';
import {
  Bold, Italic, Send, Paperclip,
  MoodSmile, At, Speakerphone, Strikethrough,
  Bolt, CirclePlus, Code, Link,
} from '@fork-ui/icons/lazy';
import { Popover } from '@fork-ui/core';
import { NimblePicker } from 'emoji-mart';
import useVChatEditor from './useVChatEditor';

const StyledEmojiPopover = styled(Popover)`
  button {
    outline: 0 !important;
  }
  .tippy-content {
    padding: 0;
  }
  .emoji-mart {
    border: 0;
    border-radius: 0;
    font-size: inherit;
    color: var(--color);
    background-color: var(--bg);
  }
  .emoji-mart-search input {
    background-color: transparent;
    border-color: var(--border-color);
  }
  .emoji-mart-search-icon {
    fill: currentColor;
  }
  .emoji-mart-category-label span {
    background-color: var(--bg);
  }
  .emoji-mart-bar {
    border-color: var(--border-color);
  }
  .emoji-mart-anchor-icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .emoji-mart-category .emoji-mart-emoji:hover:before{
    background-color: var(--bg-hover);
  }
`;
const Container = styled.div`
  &.ql-container {
    border: 1px solid var(--border-color);
    border-bottom: 0;
    border-top-left-radius: var(--editor-border-radius);
    border-top-right-radius: var(--editor-border-radius);
  }

  .ql-editor {
    max-height: var(--editor-max-height);

    &.ql-blank::before {
      color: inherit;
    }
  }

  .entity-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    .entity__icon {
      margin-right: 5px;
    }
  }

  .mention-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ql-candidate,
  .ql-job,
  .ql-placement,
  .ql-file,
  .ql-contact,
  .ql-mention-user {
    min-height: 25px;
    min-width: 100px;
    font-weight: 600;
    border-radius: 3px;
    display: inline-flex;
    padding: 3px 5px;
    cursor: pointer;
    margin: 2px;

    > span[contenteditable] {
      display: inline-flex;
    }
  }

  .ql-candidate,
  .ql-placement,
  .ql-job {
    border: 1px solid var(--blue-5);
    color: var(--blue-5);
  }

  .ql-contact,
  .ql-file {
    border: 1px solid var(--orange-5);
    color: var(--orange-5);
  }

  .ql-mention-user {
    background-color: var(--blue-1);
    color: var(--blue-5);
    border-radius: 5px;
  }

  .ql-emoji {
    display: inline-flex;
    cursor: default;
    margin: 2px;
  }
`;
const ToobarButton = styled.button`
  outline: 0 !important;
  width: var(--editor-toolbar-btn-size);
  height: var(--editor-toolbar-btn-size);

  &.ql-active,
  &:hover {
    background-color: var(--primary-hover);
    color: #fff;
    border-radius: 3px;
  }
`;
const Toobar = styled.div`
  display: flex;
  justify-content: space-between;

  &.ql-toolbar {
    padding: 8px;
    border: 1px solid var(--border-color);
    border-bottom-left-radius: var(--editor-border-radius);
    border-bottom-right-radius: var(--editor-border-radius);
  }
`;

Toobar.Left = styled.div`
  ${ToobarButton} {
    margin-right: 5px;
  }
`;

Toobar.Right = styled.div`
  display: flex;
  justify-content: flex-end;

  ${ToobarButton} {
    margin-left: 5px;
  }
`;

const VChatEditorWrapper = styled.div`
  --editor-border-radius: 5px;
  --editor-toolbar-btn-size: 25px;
  --editor-max-height: 200px;
  width: 100%;
`;

const VChatEditor = () => {
  const {
    containerId,
    toolbarId,
    insertEntity,
    onCommit,
    insertMentionUser,
    onEmojiSelect,
    emojiButtonRef,
  } = useVChatEditor({ placeholder: 'Aa' });

  return (
    <VChatEditorWrapper>
      <Container id={containerId} />
      <Toobar id={toolbarId}>
        <Toobar.Left>
          <ToobarButton>
            <Bolt />
          </ToobarButton>
          <ToobarButton className="ql-bold">
            <Bold />
          </ToobarButton>
          <ToobarButton className="ql-italic">
            <Italic />
          </ToobarButton>
          <ToobarButton className="ql-strike">
            <Strikethrough />
          </ToobarButton>
          <ToobarButton className="ql-code-block">
            <Code />
          </ToobarButton>
          <ToobarButton>
            <Link />
          </ToobarButton>
        </Toobar.Left>
        <Toobar.Right>
          <ToobarButton onClick={() => insertMentionUser({ id: 'kuser002', name: 'Hoang Nguyen 007' })}>
            <CirclePlus />
          </ToobarButton>
          <ToobarButton onClick={() => insertEntity('file', { id: 'file0012', name: 'ABC.pdf' })}>
            <CirclePlus />
          </ToobarButton>
          <ToobarButton onClick={() => insertEntity('placement', { id: 'placment012', name: 'Placement 2021' })}>
            <CirclePlus />
          </ToobarButton>
          <ToobarButton onClick={() => insertEntity('job', { id: 'job0121', name: 'Frontend Developer' })}>
            <CirclePlus />
          </ToobarButton>
          <ToobarButton onClick={() => insertEntity('contact', { id: 'contact110', name: 'Hoàng Nguyễn Contact' })}>
            <CirclePlus />
          </ToobarButton>
          <ToobarButton onClick={() => insertEntity('candidate', { id: 'candidate001', name: 'Hoàng Nguyễn' })}>
            <CirclePlus />
          </ToobarButton>
          <ToobarButton>
            <Speakerphone />
          </ToobarButton>
          <ToobarButton>
            <At />
          </ToobarButton>
          <StyledEmojiPopover
            placement="top"
            overlay={(
              <NimblePicker
                theme="fork-ui"
                set="facebook"
                data={data}
                title=""
                emoji=""
                showSkinTones={false}
                onSelect={onEmojiSelect}
              />
            )}
          >
            <ToobarButton ref={emojiButtonRef}>
              <MoodSmile />
            </ToobarButton>
          </StyledEmojiPopover>
          <ToobarButton>
            <Paperclip />
          </ToobarButton>
          <ToobarButton style={{ marginLeft: 30 }} onClick={onCommit}>
            <Send />
          </ToobarButton>
        </Toobar.Right>
      </Toobar>
    </VChatEditorWrapper>
  );
};

export default VChatEditor;
