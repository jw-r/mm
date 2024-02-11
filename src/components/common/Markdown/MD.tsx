import { ReactNode } from 'react';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';
import '@uiw/react-markdown-preview/markdown.css';
import './styles/editor.css';
import { useState } from 'react';
import { STYLE } from '@/constants';

document.documentElement.setAttribute('data-color-mode', 'light');

type Preview = 'edit' | 'live';

export function MD({ children }: { children: ReactNode }) {
  return children;
}

function MarkdownEditor({ value, setValue }: any) {
  const [isMobile, setIsMobile] = useState(false);

  const textareaStyle = `pt-4 h-full bg-[#FAFDFC] ${!isMobile && 'w-[50%]'}`;
  const editorHeight = `calc(100vh - ${STYLE.HEADER_HEIGHT}px - ${STYLE.FIXED_BUTTON_HEIGHT}px)`;

  return (
    <MDEditor
      className="px-3 shadow-none *:border-none"
      height={editorHeight}
      autoFocus
      value={value}
      onChange={setValue as any}
      previewOptions={{
        rehypePlugins: [[rehypeSanitize]],
      }}
      textareaProps={{
        placeholder: '# 제목을 입력해주세요',
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
