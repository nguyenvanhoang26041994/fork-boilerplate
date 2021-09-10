import Quill from 'quill';
import AbstractTag from '../AbstractTag'
import meta from './meta'

class Bold extends AbstractTag {
  constructor (quillJS, options = {}) {
    super()
    this.quillJS = quillJS
    this.name = 'emoji'
    this.pattern = this._getCustomPatternOrDefault(options, this.name, /(:([a-zA-Z0-9_\-d\+]+):)/g)
    this.getAction.bind(this)
    this._meta = meta()
    this.activeTags = this._getActiveTagsWithoutIgnore(this._meta.applyHtmlTags, options.ignoreTags)
  }

  getAction () {
    return {
      name: this.name,
      pattern: this.pattern,
      action: (text, selection, pattern, lineStart) => new Promise((resolve) => {
        let match = pattern.exec(text)

        const [annotatedText, , matchedText] = match
        const startIndex = lineStart + match.index
        if (!match || !this.activeTags.length) {
          resolve(false)
          return
        }

        setTimeout(() => {
          this.quillJS.deleteText(startIndex, annotatedText.length)
          setTimeout(() => {
            this.quillJS.insertEmbed(startIndex, 'emoji', { name: matchedText }, Quill.sources.USER);
            resolve(true);
          })
        }, 0)
      })
    }
  }
}

export default Bold
