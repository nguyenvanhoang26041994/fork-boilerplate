import { useLayoutEffect, useRef, useMemo } from 'react';
import Quill from 'quill';
import MarkdownActivity from './MarkdownActivity';
import { uniqueId } from '@fork-ui/utils/helpers';

export default ({ placeholder }) => {
  const editorRef = useRef({}).current;
  const containerId = useMemo(() => uniqueId('containerId'), []);
  const toolbarId = useMemo(() => uniqueId('toolbarId'), []);
  useLayoutEffect(() => {
    editorRef.editor = new Quill(`#${containerId}`, {
      modules: {
        toolbar: `#${toolbarId}`,
      },
      placeholder,
    });
    editorRef.markdownActivity = new MarkdownActivity(editorRef.editor, {});
    window.editorRef = editorRef
  }, []);
  return {
    containerId,
    toolbarId,
  };
};
