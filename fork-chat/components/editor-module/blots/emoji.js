import Quill from 'quill';
import { Emoji } from 'emoji-mart';
let BlockEmbed = Quill.import('blots/embed');

class EmojiBlot extends BlockEmbed {
  static create(data) {
    let node = super.create(data.id);
    node.setAttribute('data-value', data.id);
    node.innerHTML = Emoji({
      html: true,
      set: 'facebook',
      emoji: data.id,
      size: 20,
    });
    node.setAttribute('spellcheck', 'false');
    node.setAttribute('autocomplete', 'off');
    node.setAttribute('autocorrect', 'off');
    node.setAttribute('autocapitalize', 'off');
    node.setAttribute('contenteditable', 'false');
    return node;
  }

  static value(domNode) {
    return domNode.getAttribute('data-value');
  }
}

EmojiBlot.blotName = 'emoji';
EmojiBlot.tagName = 'span';
EmojiBlot.className = 'ql-emoji';

Quill.register(EmojiBlot, true);
export default EmojiBlot;
