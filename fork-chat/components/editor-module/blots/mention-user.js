import Quill from 'quill';

const Embed = Quill.import('blots/embed');

class MentionUserBlot extends Embed {
  constructor(scroll, node) {
    super(scroll, node);
    this.clickHandler = null;
  }

  static create(data) {
    const node = super.create();
    node.innerHTML = `
      <span class="mention-wrapper">
        <span>@${data.value}</span>
      </span>
    `;
    return MentionUserBlot.setDataValues(node, data);
  }

  static setDataValues(element, data) {
    const domNode = element;
    Object.keys(data).forEach(key => {
      domNode.dataset[key] = data[key];
    });
    return domNode;
  }

  static value(domNode) {
    return domNode.dataset;
  }

  attach() {
    super.attach();
    this.clickHandler = e => {
      const event = new Event('mention-clicked', {
        bubbles: true,
        cancelable: true
      });
      event.value = Object.assign({}, this.domNode.dataset);
      event.event = e;
      window.dispatchEvent(event);
      e.preventDefault();
    };
    this.domNode.addEventListener('click', this.clickHandler, false);
  }

  detach() {
    super.detach();
    if (this.clickHandler) {
      this.domNode.removeEventListener('click', this.clickHandler);
      this.clickHandler = null;
    }
  }
}

MentionUserBlot.blotName = 'mentionUser';
MentionUserBlot.tagName = 'div';
MentionUserBlot.className = 'ql-mention-user';

Quill.register(MentionUserBlot);

export default MentionUserBlot;
