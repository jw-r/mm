import { CreateDocumentMenu } from '@/components/createDocument/CreateDocumentMenu';
import { SEO } from '@/components/shared/SEO';
import { Txt } from '@/components/shared/Txt';
import useRouter from '@/hooks/useRouter';
import { useGetDocuments } from '@/remotes/document/getDocuments';
import { useCategoryStore } from '@/stores/categoryStore';
import { formatDate } from '@/utils/formatDate';
import { MouseEventHandler } from 'react';

// access_token

export function MainPage() {
  const { push } = useRouter();
  const { selectedCategory } = useCategoryStore();
  const { data } = useGetDocuments({ categoryId: selectedCategory?.id });

  const moveToDetail: MouseEventHandler<HTMLElement> = (e) => {
    const button = e.currentTarget as HTMLButtonElement;
    const documentsId = Number(button.id);

    push(`/documents/${documentsId}`);
  };

  return (
    <main className="flex w-full max-w-[880px] flex-col p-4 md:p-8 lg:p-12">
      <SEO title="Documents" description="모든 문서" image="" />
      <div className="flex justify-between">
        <Txt typography="h1">문서</Txt>
        <CreateDocumentMenu />
      </div>
      <div className="mt-8 space-y-4">
        {data?.documents.map((document) => (
          <article
            key={document.id}
            id={String(document.id)}
            className="cursor-pointer rounded-lg border-2 p-4 transition-all hover:bg-foreground/5"
            onClick={moveToDetail}
          >
            <div className="flex items-center justify-between">
              <Txt typography="large">{document.documentName}</Txt>
              <Txt typography="small" className="text-foreground/40">
                {formatDate(document.createdAt)}
              </Txt>
            </div>
            {document.summary && (
              <Txt className="mt-[-20px] line-clamp-2 text-sm font-medium text-foreground/80">{document.summary}</Txt>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}
