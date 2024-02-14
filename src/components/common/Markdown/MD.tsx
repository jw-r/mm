import { HTMLProps, ReactNode, useEffect } from 'react';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';
import '@uiw/react-markdown-preview/markdown.css';
import './styles/editor.css';
import { useState } from 'react';
import { MAX_CONTENT_LENGTH, STYLE } from '@/constants';

document.documentElement.setAttribute('data-color-mode', 'light');

export function MD({ children }: { children: ReactNode }) {
  return children;
}

function Editor({ value, setValue }: { value: string; setValue: (newValue: string) => void }) {
  const [isMobile, setIsMobile] = useState(false);

  const editorHeight = `calc(100vh - ${STYLE.HEADER_HEIGHT}px - ${STYLE.FIXED_BUTTON_HEIGHT}px)`;
  const textareaStyle = `pt-4 bg-[#FAFDFC] ${!isMobile && 'w-[50%]'} h-full`;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <MDEditor
      className="px-3 shadow-none *:border-none"
      height={editorHeight}
      autoFocus
      value={value}
      onChange={(value?: string) => {
        if (value && value.length <= MAX_CONTENT_LENGTH) {
          setValue(value);
        }
      }}
      previewOptions={{
        rehypePlugins: [[rehypeSanitize]],
      }}
      textareaProps={{
        placeholder: '# 제목을 입력해주세요\n\n## 이미 작성한 글을 복사, 붙여넣기 하는 것을 추천해드려요!',
        className: textareaStyle,
      }}
      visibleDragbar={false}
      extraCommands={[]}
      preview={isMobile ? 'edit' : 'live'}
    />
  );
}

function Viewer({ content, className }: { content: string; className: HTMLProps<HTMLElement>['className'] }) {
  return <MDEditor.Markdown className={className} source={content} rehypePlugins={[[rehypeSanitize]]} />;
}

MD.Editor = Editor;
MD.Viewer = Viewer;
