import Header from './header';
import Bold from './bold';
import Italics from './italics';
import Strikethrough from './strikethrough';

class TagsOperators {
  constructor (quillJS, options = { tags: {} }) {
    this.quillJS = quillJS
    this.getOperatorsAll.bind(this)
    this.supportInlineTags = [
      new Header(this.quillJS, options).getAction(),
      new Bold(this.quillJS, options).getAction(),
      new Strikethrough(this.quillJS, options).getAction(),
      new Italics(this.quillJS, options).getAction()
    ]

    this.supportfullTextTags = [
      new Header(this.quillJS, options).getAction(),
      new Bold(this.quillJS, options).getAction(),
      new Strikethrough(this.quillJS, options).getAction(),
      new Italics(this.quillJS, options).getAction()
    ]

    this.tags = [...this.supportInlineTags]
    this.fullTextTags = [...this.supportfullTextTags]
  }

  getOperatorsAll () {
    return this.tags
  }

  getFullTextOperatorsAll () {
    return this.fullTextTags
  }
}

export default TagsOperators
