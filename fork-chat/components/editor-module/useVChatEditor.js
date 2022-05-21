import { useLayoutEffect, useRef, useMemo, useCallback } from 'react';
import Quill from 'quill';
import MarkdownActivity from './MarkdownActivity';
import { uniqueId } from 'fork-design/utils/helpers';

import './blots';
import './mention-user';

const suggestPeople = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      { id: '01', value: 'Hoang Nguyen' },
      { id: '02', value: 'Hoang Nguyen 2' },
      { id: '03', value: 'Hoang Nguyen 3' },
    ])
  }, 100);
});

export default ({ placeholder }) => {
  const editorRef = useRef({}).current;
  const emojiButtonRef = useRef();
  const containerId = useMemo(() => uniqueId('containerId'), []);
  const toolbarId = useMemo(() => uniqueId('toolbarId'), []);

  useLayoutEffect(() => {
    editorRef.editor = new Quill(`#${containerId}`, {
      modules: {
        toolbar: `#${toolbarId}`,
        mentionUser: {
          source: async function(searchTerm, renderList) {
            const matchedPeople = await suggestPeople(searchTerm);
            renderList(matchedPeople);
          }
        },
      },
      placeholder,
    });
    // editorRef.markdownActivity = new MarkdownActivity(editorRef.editor, {});
    window.editorRef = editorRef
  }, []);

  const insertEntity = useCallback((entity, data) => {
    const selection = editorRef.editor.getSelection();
    const insertIndex = selection ? selection.index : 1;
    editorRef.editor.insertEmbed(insertIndex, entity, data, 'api');
    editorRef.editor.setSelection(insertIndex + 1, 0);
  }, []);

  const insertMentionUser = useCallback((data) => {
    const selection = editorRef.editor.getSelection();
    const insertIndex = selection ? selection.index : 1;
    editorRef.editor.insertEmbed(insertIndex, 'mentionUser', data, 'api');
    editorRef.editor.setSelection(insertIndex + 1, 0);
  }, []);

  const onCommit = useCallback(() => {
    const delta = editorRef.editor.getContents();
    let md = ``;
    for (let i = 0; i < delta.ops.length; i++) {
      const op = delta.ops[i];
      if (typeof op.insert === 'string') {
        if (op.attributes) {
          if (op.attributes.bold) {
            md = md.concat(`**${op.insert}**`);
          }
          if (op.attributes.italic) {
            md = md.concat(`*${op.insert}*`);
          }
        } else {
          md = md.concat(op.insert);
        }

        continue;
      }

      if (typeof op.insert === 'object') {
        if (op.insert.job) {
          md = md.concat(`[~job~${op.insert.job}]`);
          continue;
        }
        if (op.insert.candidate) {
          md = md.concat(`[~candidate~${op.insert.candidate}]`);
          continue;
        }
        if (op.insert.contact) {
          md = md.concat(`[~contact~${op.insert.contact}]`);
          continue;
        }
        if (op.insert.placement) {
          md = md.concat(`[~placement~${op.insert.placement}]`);
          continue;
        }
        if (op.insert.file) {
          md = md.concat(`[~file~${op.insert.file}]`);
          continue;
        }
        if (op.insert.mentionUser) {
          md = md.concat(`@${op.insert.mentionUser}`);
          continue;
        }
        continue;
      }
    }

    console.log(md);
  }, []);

  const onEmojiSelect = useCallback((emoji) => {
    emojiButtonRef.current._tippy.hide();
    const selection = editorRef.editor.getSelection();
    const insertIndex = selection ? selection.index : 1;
    editorRef.editor.insertEmbed(insertIndex, 'emoji', emoji, 'api');
    editorRef.editor.setSelection(insertIndex + 1, 0);
  }, []);

  return {
    containerId,
    toolbarId,
    insertEntity,
    insertMentionUser,
    onCommit,
    onEmojiSelect,
    emojiButtonRef,
  };
};
