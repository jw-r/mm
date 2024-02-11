import { ReactNode } from 'react';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';
import '@uiw/react-markdown-preview/markdown.css';
import './styles/editor.css';
import { useState } from 'react';

document.documentElement.setAttribute('data-color-mode', 'light');

type Preview = 'edit' | 'live';

export function MD({ children }: { children: ReactNode }) {
  return children;
}

function MarkdownEditor({ value, setValue }: any) {
  const [isMobile, setIsMobile] = useState(false);

  const textareaStyle = `pt-4 h-full bg-[#8f8f8f10] ${!isMobile && 'w-[50%]'}`;

  return (
    <MDEditor
      className="p-3 shadow-none *:border-none"
      height="calc(100vh - 74px)"
      autoFocus
      value={value}
      onChange={setValue as any}
      previewOptions={{
        rehypePlugins: [[rehypeSanitize]],
      }}
      textareaProps={{
        placeholder: '여기에 글을 작성해주세요...',
        className: textareaStyle,
      }}
      visibleDragbar={false}
      extraCommands={[]}
      preview={isMobile ? 'edit' : 'live'}
    />
  );
}

function MarkdownViewer({ content }: { content: string }) {
  return <MDEditor.Markdown className="mt-6 max-w-4xl" source={content} rehypePlugins={[[rehypeSanitize]]} />;
}

MD.Editor = MarkdownEditor;
MD.Viewer = MarkdownViewer;
