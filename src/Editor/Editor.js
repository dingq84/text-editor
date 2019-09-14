import React from 'react'
import { Editor as Edit } from 'slate-react'
import { Value } from 'slate'

const existingValue = JSON.parse(localStorage.getItem('content'))
const initialValue = Value.fromJSON(
  existingValue || {
    document: {
      nodes: [
        {
          object: 'block',
          type: 'paragraph',
          nodes: [
            {
              object: 'text',
              text: '請寫下內容',
            },
          ]
        },
      ],
      mark: [
        {
          data: '',
          type: 'bold',
        }
      ],
    },
  })

function MarkHotkey(options) {
  const { type, key } = options

  // Return our "plugin" object, containing the `onKeyDown` handler.
  return {
    onKeyDown(event, editor, next) {
      // If it doesn't match our `key`, let other plugins handle it.
      console.log(editor)
      if (!event.ctrlKey || event.key !== key) return next()

      // Prevent the default characters from being inserted.
      event.preventDefault()

      // Toggle the mark `type`.
      editor.toggleMark(type)
    },
  }
}

const plugins = [
  MarkHotkey({ key: 'b', type: 'bold' }),
  MarkHotkey({ key: '`', type: 'code' }),
  MarkHotkey({ key: 'i', type: 'italic' }),
  MarkHotkey({ key: '~', type: 'strikethrough' }),
  MarkHotkey({ key: 'u', type: 'underline' }),
]

class Editor extends React.Component {

  state = {
    value: initialValue,
  }

  onChange = ({ value }) => {
    // Save the value to Local Storage.
    // const content = JSON.stringify(value.toJSON())
    // localStorage.setItem('content', content)

    this.setState({ value })
  }

  // Render the editor.
  render() {
    return (
      <Edit
        value={this.state.value}
        plugins={plugins}
        onChange={this.onChange}
        onClick={() => console.log('t')}
        renderMark={this.renderMark}
      />
    );
  }

  renderMark = (props, editor, next) => {
    switch (props.mark.type) {
      case 'bold':
        return <strong>{props.children}</strong>
      // Add our new mark renderers...
      case 'code':
        return <code>{props.children}</code>
      case 'italic':
        return <em>{props.children}</em>
      case 'strikethrough':
        return <del>{props.children}</del>
      case 'underline':
        return <u>{props.children}</u>
      default:
        return next()
    }
  }
}


export default Editor;