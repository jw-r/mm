import { CreateDocumentMenu } from '@/features/document/CreateDocumentMenu';
import { SEO } from '@/components/SEO';
import { Txt } from '@/components/Txt';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import useRouter from '@/hooks/useRouter';
import { useGetQuestions } from '@/remotes/question/getQuestions';
import { formatDate } from '@/utils/formatDate';
import { MouseEventHandler, useEffect } from 'react';
import { useCategoryStore } from '@/features/category/stores/categoryStore';

export function RepositoryPage() {
  const { push } = useRouter();
  const { selectedCategory } = useCategoryStore();
  const { data, refetch: refetchQuestions } = useGetQuestions({ categoryId: selectedCategory?.id });

  const moveToDetail: MouseEventHandler<HTMLButtonElement> = (e) => {
    const button = e.target as HTMLButtonElement;
    const documentsId = Number(button.id);

    push(`/documents/${documentsId}`);
  };

  useEffect(() => {
    if (!data) return;

    let retryCount = 0;
    let time = 2000;
    const interval = setInterval(() => {
      if (retryCount < 8) {
        refetchQuestions();
        retryCount++;
        time += 1000;
      } else {
        clearInterval(interval);
      }
    }, time);

    return () => clearInterval(interval);
  }, [refetchQuestions, data?.documents.length]);

  const hasNoContent = !data?.documents.length;

  return (
    <main className="flex w-full max-w-[880px] flex-col p-4 md:p-8 lg:p-12">
      <SEO title="Repository" description="복습 창고" image="" />
      <div className="flex flex-col">
        <div className="mb-4 flex justify-between">
          <Txt className="border-none text-4xl font-extrabold">📚 복습 창고</Txt>
          <CreateDocumentMenu />
        </div>
        <Txt typography="small" className="text-foreground/60">
          오늘의 퀴즈가 오픈될 때마다 새로운 퀴즈가 복습 창고에 추가돼요!
        </Txt>
      </div>
      {data?.documents.map((document) => (
        <div key={document.id} className="mt-6 space-y-2 rounded-lg border-2 p-4">
          <div className="table w-full table-fixed">
            <div className="flex items-center justify-between">
              <div className="flex w-full flex-col">
                <Txt typography="large" className="overflow-hidden overflow-ellipsis whitespace-nowrap pr-24">
                  {document.documentName}
                </Txt>
                <Txt typography="small" className="mt-1 text-foreground/35">
                  {formatDate(document.createdAt)}
                </Txt>
              </div>
              <Button id={String(document.id)} variant="outline" onClick={moveToDetail} className="-ml-24">
                문서보기
              </Button>
            </div>
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
      {hasNoContent && (
        <div className="mt-24 flex w-full flex-col items-center justify-center space-y-2 font-semibold text-foreground/50">
          <Txt>생성된 문서가 없어요</Txt>
          <Txt>문서를 업로드하시면 매일 새로운 퀴즈를 생성해서 알림을 보내드릴게요 🚀</Txt>
        </div>
      )}
    </main>
  );
}
