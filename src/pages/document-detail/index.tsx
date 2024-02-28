import { MD } from '@/components/MD';
import { SEO } from '@/components/SEO';
import { useGetDocument } from '@/remotes/document/getDocument';
import { useParams } from 'react-router-dom';
import QuizAccordion from './components/QuizAccordion';
import DocumentHeader from './components/DocumentHeader';

export function DocumentDetailPage() {
  const { id } = useParams();
  const documentId = id ? Number(id) : undefined;

  const { data: document } = useGetDocument({ documentId });

  if (!document) return null;
  return (
    <>
      <SEO title={`Document/${documentId}`} description="모든 문서" image="" />
      <main className="flex w-full justify-center">
        <div className="flex w-full max-w-4xl flex-col items-center justify-center p-8">
          <DocumentHeader
            title={document.documentName}
            categoryName={document.category.name}
            createdAt={document.createdAt}
          />
          <MD.Viewer content={document.content} className="mt-6 w-full" />
        </div>
        <QuizAccordion questions={document.questions} />
      </main>
    </>
  );
}
