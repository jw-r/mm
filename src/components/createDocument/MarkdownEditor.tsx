/* eslint-disable @typescript-eslint/no-explicit-any */
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';
import '@uiw/react-markdown-preview/markdown.css';

type Preview = 'edit' | 'live';

export function MarkdownEditor({ value, setValue }: any) {
  document.documentElement.setAttribute('data-color-mode', 'light');

  return (
    <MDEditor
      value={value}
      onChange={setValue as any}
      previewOptions={{
        rehypePlugins: [[rehypeSanitize]],
      }}
      visibleDragbar={false}
      extraCommands={[]}
      preview="live"
    />
  );
}
