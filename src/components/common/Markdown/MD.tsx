import { ReactNode } from 'react';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';
import '@uiw/react-markdown-preview/markdown.css';
import './styles/editor.css';
import { useState } from 'react';
import { STYLE } from '@/constants';

document.documentElement.setAttribute('data-color-mode', 'light');

export function MD({ children }: { children: ReactNode }) {
  return children;
}

function Editor({ value, setValue }: { value: string; setValue: (newValue: string) => void }) {
  const [isMobile, setIsMobile] = useState(false);
  console.log(setIsMobile);

  const textareaStyle = `pt-4 h-full bg-[#FAFDFC] ${!isMobile && 'w-[50%]'}`;
  const editorHeight = `calc(100vh - ${STYLE.HEADER_HEIGHT}px - ${STYLE.FIXED_BUTTON_HEIGHT}px)`;

  return (
    <MDEditor
      className="px-3 shadow-none *:border-none"
      height={editorHeight}
      autoFocus
      value={value}
      onChange={(value?: string) => setValue(value || '')}
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

function Viewer({ content }: { content: string }) {
  return <MDEditor.Markdown className="mt-6 max-w-4xl" source={content} rehypePlugins={[[rehypeSanitize]]} />;
}

MD.Editor = Editor;
MD.Viewer = Viewer;
