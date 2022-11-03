import React, { useState } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

export default function TextEditor({ height }) {
  const [text, setText] = useState('');
  const editorRef = React.createRef();
  const onChange = () => {
    const data = editorRef.current.getInstance().getHTML(); // getHTML or getMarkdown
    setText(data);
    console.log(text);
  };
  return (
    <>
      <Editor
        placeholder="내용을 입력해주세요."
        previewStyle="vertical" // vertical로 설정시 미리보기 화면 분할가능
        height={height}
        initialEditType="markdown" // markdown or wysiwyg
        toolbarItems={[
          // 툴바 옵션 설정
          ['heading', 'bold', 'italic', 'strike'],
          ['hr', 'quote'],
          ['ul', 'ol', 'task', 'indent', 'outdent'],
          ['table', 'link'],
          ['code', 'codeblock'],
        ]}
        ref={editorRef}
        onChange={onChange}
      />
    </>
  );
}
