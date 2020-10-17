import React, { Component } from 'react';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';

import createEmojiPlugin from 'draft-js-emoji-plugin';

import './editorStyles.css';
import 'draft-js/dist/Draft.css';
import 'draft-js-emoji-plugin/lib/plugin.css';
import { EditorState } from 'draft-js';

const emojiPlugin = createEmojiPlugin({
  useNativeArt: true,
});
const { EmojiSuggestions, EmojiSelect } = emojiPlugin;
const plugins = [emojiPlugin];
const text = ``;

export default class SimpleEmojiEditor extends Component {
  state = {
    editorState: createEditorStateWithText(text),
  };

  componentDidMount() {
    setTimeout(() => {
      this.editor.focus();
    }, 0);
  }

  componentDidUpdate(prevpro, prevState) {
    if (this.state.editorState !== prevState.editorState) {
      this.props.setinputValue(
        this.state.editorState.getCurrentContent().getPlainText(''),
      );
    }
  }

  componentWillUnmount() {
    this.setState({
      editorState: EditorState.createEmpty(''),
    });
  }

  onChange = editorState => {
    this.setState({
      editorState,
    });
  };

  focus = () => {
    this.editor.focus();
  };

  render() {
    return (
      <div>
        <div className="editor" onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            ref={element => {
              this.editor = element;
            }}
            placeholder="enter note!!"
            autoFocus
          />
          <EmojiSuggestions />
        </div>
      </div>
    );
  }
}
