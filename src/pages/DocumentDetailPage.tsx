import { MarkdownRenderer } from '@/components/common/MarkdownRenderer';
import { Txt } from '@/components/shared/Txt';
import { useGetDocument } from '@/remotes/document/getDocument';
import { formatDate } from '@/utils/formatDate';
import { useParams } from 'react-router-dom';

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
        <div>
          <MarkdownRenderer content={data.content} />
        </div>
      </div>
    </main>
  );
}
