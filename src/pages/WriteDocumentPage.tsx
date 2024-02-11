import { useState } from 'react';
// import MarkdownIt from 'markdown-it';
// import MdEditor from 'react-markdown-editor-lite';
// import 'react-markdown-editor-lite/lib/index.css';

// const mdParser = new MarkdownIt();

import { MarkdownEditor } from '@/components/createDocument/MarkdownEditor';

export function WriteDocumentPage() {
  const [value, setValue] = useState('');

  return <MarkdownEditor value={value} setValue={setValue} />;
}
