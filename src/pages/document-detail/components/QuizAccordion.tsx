import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Question } from '@/models/type';

interface QuizAccordionProps {
  questions: Question[];
}

export default function QuizAccordion({ questions }: QuizAccordionProps) {
  return (
    <Accordion
      type="multiple"
      className="sticky top-24 mt-24 hidden max-h-[650px] w-full max-w-md overflow-y-scroll border-b-2 border-foreground/40 px-0 pb-0 scrollbar-hide xl:block"
    >
      {questions.map((question, index) => (
        <AccordionItem key={question.id} value={String(question.id)} className="last:border-none">
          <AccordionTrigger className="text-start">{`${index + 1}. ${question.question}`}</AccordionTrigger>
          <AccordionContent>
            <div>{question.answer}</div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
