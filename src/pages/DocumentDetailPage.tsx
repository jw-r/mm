import { MD } from '@/features/markdown/MD';
import { SEO } from '@/components/SEO';
import { Txt } from '@/components/Txt';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useGetDocument } from '@/remotes/document/getDocument';
import { formatDate } from '@/utils/formatDate';
import { useParams } from 'react-router-dom';

export function DocumentDetailPage() {
  const { id } = useParams();
  const documentId = id ? Number(id) : undefined;

  const { data } = useGetDocument({ documentId });

  if (!data) return null;
  return (
    <main className="flex w-full justify-center">
      <SEO title={`Document/${documentId}`} description="모든 문서" image="" />
      <div className="flex w-full max-w-4xl flex-col items-center justify-center p-8">
        <Txt typography="h2" className="text-center">
          {data.documentName}
        </Txt>
        <div className="mt-2 flex w-full flex-col items-end">
          <Txt typography="large">{data.category.name}</Txt>
          <Txt typography="small" className="text-foreground/40">
            {formatDate(data.createdAt)}
          </Txt>
        </div>
        <MD.Viewer content={data.content} className="mt-6 w-full" />
      </div>
      <div>
        <Accordion
          type="multiple"
          className="sticky top-24 mt-24 hidden max-h-[650px] w-full max-w-md overflow-y-scroll border-b-2 border-foreground/40 px-0 pb-0 scrollbar-hide xl:block"
        >
          {data.questions.map((question, index) => (
            <AccordionItem key={question.id} value={String(question.id)} className="last:border-none">
              <AccordionTrigger className="text-start">{`${index + 1}. ${question.question}`}</AccordionTrigger>
              <AccordionContent>
                <div>{question.answer}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </main>
  );
}
