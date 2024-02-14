import { MD } from '@/components/common/Markdown/MD';
import { Txt } from '@/components/shared/Txt';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useGetDocument } from '@/remotes/document/getDocument';
import { formatDate } from '@/utils/formatDate';
import { useParams } from 'react-router-dom';

export function DocumentDetailPage() {
  const { id } = useParams();
  const documentId = id ? Number(id) : undefined;

  const { data } = useGetDocument({ documentId });
  console.log(data);

  if (!data) return null;
  return (
    <main className="flex w-full justify-center">
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
        <Accordion type="multiple" className="sticky top-24 mt-24 hidden w-full max-w-xl p-8 xl:block">
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
