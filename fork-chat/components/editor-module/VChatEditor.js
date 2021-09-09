import React from 'react';
import styled from 'styled-components';
import {
  Bold, Italic, Send, Paperclip,
  MoodSmile, At, Speakerphone, Strikethrough,
  Bolt, CirclePlus, Code, Link,
} from '@fork-ui/icons/lazy';
import useVChatEditor from './useVChatEditor';

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
  const { containerId, toolbarId } = useVChatEditor({ placeholder: 'Aa' });
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
          <ToobarButton>
            <CirclePlus />
          </ToobarButton>
          <ToobarButton>
            <Speakerphone />
          </ToobarButton>
          <ToobarButton>
            <At />
          </ToobarButton>
          <ToobarButton>
            <MoodSmile />
          </ToobarButton>
          <ToobarButton>
            <Paperclip />
          </ToobarButton>
          <ToobarButton style={{ marginLeft: 30 }}>
            <Send />
          </ToobarButton>
        </Toobar.Right>
      </Toobar>
    </VChatEditorWrapper>
  );
};

export default VChatEditor;
