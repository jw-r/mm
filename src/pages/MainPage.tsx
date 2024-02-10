import { FileUploadDialog } from '@/components/createDocument/FileUploadDialog';
import { Txt } from '@/components/shared/Txt';
import { useGetDocuments } from '@/remotes/document/getDocuments';
import { useCategoryStore } from '@/stores/categoryStore';

export function MainPage() {
  const { selectedCategory } = useCategoryStore();
  const { data } = useGetDocuments({ categoryId: selectedCategory?.id });

  return (
    <main className="flex w-full max-w-3xl flex-col p-12">
      <div className="flex justify-between">
        <Txt typography="h1">{selectedCategory?.name || '카테고리'}</Txt>
        <FileUploadDialog />
      </div>
      <div className="mt-8 space-y-2">
        {data?.documents.map((document) => (
          <article
            key={document.id}
            className="cursor-pointer rounded-lg border-2 p-4 transition-all hover:bg-foreground/5"
          >
            <div className="flex items-center justify-between">
              <Txt typography="large">{document.documentName}</Txt>
              <Txt typography="small" className="text-foreground/40">
                {document.createdAt}
              </Txt>
            </div>
            {document.summary && (
              <Txt className="line-clamp-2 text-sm font-medium text-foreground/80">{document.summary}</Txt>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}
