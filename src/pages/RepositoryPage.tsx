import { CreateDocumentMenu } from '@/components/createDocument/CreateDocumentMenu';
import { Txt } from '@/components/shared/Txt';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import useRouter from '@/hooks/useRouter';
import { useGetQuestions } from '@/remotes/question/getQuestions';
import { useCategoryStore } from '@/stores/categoryStore';
import { formatDate } from '@/utils/formatDate';
import { MouseEventHandler } from 'react';

export function RepositoryPage() {
  const { push } = useRouter();
  const { selectedCategory } = useCategoryStore();
  const { data } = useGetQuestions({ categoryId: selectedCategory?.id });

  const moveToDetail: MouseEventHandler<HTMLButtonElement> = (e) => {
    const button = e.target as HTMLButtonElement;
    const documentsId = Number(button.id);

    push(`/documents/${documentsId}`);
  };

  return (
    <main className="flex w-full max-w-[880px] flex-col p-4 md:p-8 lg:p-12">
      <div className="flex justify-between">
        <Txt typography="h1">📚 복습 창고</Txt>
        <CreateDocumentMenu />
      </div>
      {data?.documents.map((document) => (
        <div key={document.id} className="mt-8 space-y-2 rounded-lg border-2 p-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <Txt typography="large">{`Note: ${document.documentName}`}</Txt>
              <Txt typography="small" className="mt-1 text-foreground/35">
                {formatDate(document.createdAt)}
              </Txt>
            </div>
            <Button id={String(document.id)} variant="outline" onClick={moveToDetail}>
              문서보기
            </Button>
          </div>
          <Accordion type="multiple" className="w-full pl-4">
            {document.questions.map((question, index) => (
              <AccordionItem key={question.id} value={String(question.id)} className="last:border-none">
                <AccordionTrigger className="text-start">{`${index + 1}. ${question.question}`}</AccordionTrigger>
                <AccordionContent>{question.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}
    </main>
  );
}
