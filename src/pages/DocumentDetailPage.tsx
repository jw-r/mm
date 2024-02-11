import { Txt } from '@/components/shared/Txt';
import { useGetDocument } from '@/remotes/document/getDocument';
import { formatDate } from '@/utils/formatDate';
import { useParams } from 'react-router-dom';

import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

const mdParser = new MarkdownIt();

export function DocumentDetailPage() {
  const { id } = useParams();
  const documentId = id ? Number(id) : undefined;

  const { data } = useGetDocument({ documentId });

  if (!data) return null;
  return (
    <main className="flex w-screen justify-center">
      <div className="flex w-full max-w-4xl flex-col items-center justify-center p-8">
        <Txt typography="h2">{data.documentName}</Txt>
        <div className="mt-2 flex w-full flex-col items-end">
          <Txt typography="large">{data.category.name}</Txt>
          <Txt typography="small" className="text-foreground/40">
            {formatDate(data.createdAt)}
          </Txt>
        </div>
        <MdEditor
          id={String(data.id)}
          className="mt-4 rounded-md border-none"
          view={{
            menu: false,
            md: false,
            html: true,
          }}
          defaultValue={data.content}
          renderHTML={(text) => mdParser.render(text)}
          readOnly
        />
      </div>
    </main>
  );
}
