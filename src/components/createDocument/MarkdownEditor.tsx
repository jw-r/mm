/* eslint-disable @typescript-eslint/no-explicit-any */
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';
import '@uiw/react-markdown-preview/markdown.css';

import './styles/editor.css';
import { useState } from 'react';

type Preview = 'edit' | 'live';

document.documentElement.setAttribute('data-color-mode', 'light');

export function MarkdownEditor({ value, setValue }: any) {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <MDEditor
        className="p-3 shadow-none *:border-none"
        height="calc(100vh - 74px)"
        autoFocus
        value={value}
        onChange={setValue as any}
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
        }}
        visibleDragbar={false}
        extraCommands={[]}
        preview={isMobile ? 'edit' : 'live'}
      />
      {!isMobile && <div className="absolute right-0 top-0 h-screen w-[50%] bg-foreground/5" />}
    </>
  );
}
