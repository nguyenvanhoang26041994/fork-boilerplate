import Quill from 'quill';
let BlockEmbed = Quill.import('blots/embed');

class MentionUserBlot extends BlockEmbed {
  static create(data) {
    let node = super.create(data.id);
    node.setAttribute('data-value', data.id);
    node.innerHTML = `
      <span class="mention-wrapper">
        <span>@${data.name}</span>
      </span>
    `;

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

MentionUserBlot.blotName = 'mentionUser';
MentionUserBlot.tagName = 'div';
MentionUserBlot.className = 'ql-mention-user';

Quill.register(MentionUserBlot, true);
export default MentionUserBlot;
