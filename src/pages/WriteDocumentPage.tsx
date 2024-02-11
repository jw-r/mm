import { Txt } from '@/components/shared/Txt';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

const mdParser = new MarkdownIt();

export function WriteDocumentPage() {
  const handleEditorChange = () => {};

  return (
    <div className="h-full p-4">
      <MdEditor
        className="rounded-md border-r-0"
        // canView={{ menu: false, md: false, html: false, both: false, fullScreen: false, hideMenu: false }}
        view={{
          menu: false,
          md: false,
          html: true,
        }}
        defaultValue="# sadasda"
        renderHTML={(text) => mdParser.render(text)}
        onChange={handleEditorChange}
      />
    </div>
  );
}
