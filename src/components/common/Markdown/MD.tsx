import { HTMLProps, ReactNode, useEffect } from 'react';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';
import '@uiw/react-markdown-preview/markdown.css';
import './styles/editor.css';
import { useState } from 'react';
import { MAX_CONTENT_LENGTH, STYLE } from '@/constants';
import { toast } from '@/components/ui/use-toast';

document.documentElement.setAttribute('data-color-mode', 'light');

export function MD({ children }: { children: ReactNode }) {
  return children;
}

function Editor({ value, setValue }: { value: string; setValue: (newValue: string) => void }) {
  const [isMobile, setIsMobile] = useState(false);
  const [editorHeight, setEditorHeight] = useState(0);

  const textareaStyle = `pt-4 bg-[#FAFDFC] ${!isMobile && 'w-[50%]'}`;

  useEffect(() => {
    const handleHeightResize = () => {
      const windowHeight = window.innerHeight;
      setEditorHeight(windowHeight - STYLE.HEADER_HEIGHT - STYLE.FIXED_BUTTON_HEIGHT);
    };

    handleHeightResize();

    window.addEventListener('resize', handleHeightResize);

    return () => window.removeEventListener('resize', handleHeightResize);
  }, []);

  useEffect(() => {
    const handleWithResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    handleWithResize();

    window.addEventListener('resize', handleWithResize);

    return () => window.removeEventListener('resize', handleWithResize);
  }, []);

  return (
    <MDEditor
      className="px-3 shadow-none *:border-none"
      height={editorHeight}
      minHeight={window.innerHeight - STYLE.HEADER_HEIGHT - STYLE.FIXED_BUTTON_HEIGHT}
      autoFocus
      value={value}
      onChange={(value?: string) => {
        if (Number(value?.length) > MAX_CONTENT_LENGTH) {
          toast({ title: '최대 15,000자까지 입력할 수 있어요!' });
          setValue(value?.slice(0, MAX_CONTENT_LENGTH) || '');
        } else {
          setValue(value || '');
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
