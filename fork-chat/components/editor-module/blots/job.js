import Quill from 'quill';
let BlockEmbed = Quill.import('blots/embed');

class JobBlot extends BlockEmbed {
  static create(data) {
    let node = super.create(data.id);
    node.setAttribute('data-value', data.id);
    node.innerHTML = `
      <span class="entity-wrapper">
        <i class="entity__icon fas fa-user"></i>
        <span>${data.name} (ID: ${data.id})</span>
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

JobBlot.blotName = 'job';
JobBlot.tagName = 'div';
JobBlot.className = 'ql-job';

Quill.register(JobBlot, true);
export default JobBlot;
