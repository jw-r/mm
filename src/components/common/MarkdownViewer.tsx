import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';
import '@uiw/react-markdown-preview/markdown.css';

export function MarkdownViewer({ content }: { content: string }) {
  document.documentElement.setAttribute('data-color-mode', 'light');

  return <MDEditor.Markdown className="mt-6 max-w-4xl" source={content} rehypePlugins={[[rehypeSanitize]]} />;
}
