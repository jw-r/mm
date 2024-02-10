import { Txt } from '@/components/shared/Txt';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { useCategoryStore } from '@/stores/categoryStore';

interface Questions {
  documents: {
    id: number;
    documentName: string;
    createdAt: string;
    questions: {
      id: number;
      question: string;
      answer: string;
    }[];
  }[];
}

const data: Questions = {
  documents: [
    {
      id: 1,
      documentName: 'DNS(Domain Name System)이란?',
      createdAt: '2024-02-14',
      questions: [
        {
          id: 1,
          question: 'DNS 서버의 Cache 기능은 무엇인가요?',
          answer: `DNS(Domain Name System) 서버의 캐시 기능은 DNS 질의 결과를 일정 기간 동안 저장하고 재사용하는
          기능입니다. 이는 인터넷의 도메인 이름(예: www.example.com)을 해당하는 IP 주소(예: 192.0.2.1)로 변환하는
          과정에서 중요한 역할을 합니다. 캐시 기능을 통해 DNS 서버는 동일한 DNS 질의에 대한 반복적인 처리를
          피하고, DNS 질의 응답 시간을 단축하여 전반적인 인터넷 성능을 향상시킵니다.`,
        },
        {
          id: 2,
          question: 'DNS 서버의 Cache 기능은 무엇인가요?',
          answer: `DNS(Domain Name System) 서버의 캐시 기능은 DNS 질의 결과를 일정 기간 동안 저장하고 재사용하는
          기능입니다. 이는 인터넷의 도메인 이름(예: www.example.com)을 해당하는 IP 주소(예: 192.0.2.1)로 변환하는
          과정에서 중요한 역할을 합니다. 캐시 기능을 통해 DNS 서버는 동일한 DNS 질의에 대한 반복적인 처리를
          피하고, DNS 질의 응답 시간을 단축하여 전반적인 인터넷 성능을 향상시킵니다.`,
        },
        {
          id: 3,
          question: 'DNS 서버의 Cache 기능은 무엇인가요?',
          answer: `DNS(Domain Name System) 서버의 캐시 기능은 DNS 질의 결과를 일정 기간 동안 저장하고 재사용하는
          기능입니다. 이는 인터넷의 도메인 이름(예: www.example.com)을 해당하는 IP 주소(예: 192.0.2.1)로 변환하는
          과정에서 중요한 역할을 합니다. 캐시 기능을 통해 DNS 서버는 동일한 DNS 질의에 대한 반복적인 처리를
          피하고, DNS 질의 응답 시간을 단축하여 전반적인 인터넷 성능을 향상시킵니다.`,
        },
      ],
    },
    {
      id: 2,
      documentName: 'DNS(Domain Name System)이란?',
      createdAt: '2024-02-14',
      questions: [
        {
          id: 1,
          question: 'DNS 서버의 Cache 기능은 무엇인가요?',
          answer: `DNS(Domain Name System) 서버의 캐시 기능은 DNS 질의 결과를 일정 기간 동안 저장하고 재사용하는
          기능입니다. 이는 인터넷의 도메인 이름(예: www.example.com)을 해당하는 IP 주소(예: 192.0.2.1)로 변환하는
          과정에서 중요한 역할을 합니다. 캐시 기능을 통해 DNS 서버는 동일한 DNS 질의에 대한 반복적인 처리를
          피하고, DNS 질의 응답 시간을 단축하여 전반적인 인터넷 성능을 향상시킵니다.`,
        },
        {
          id: 2,
          question: 'DNS 서버의 Cache 기능은 무엇인가요?',
          answer: `DNS(Domain Name System) 서버의 캐시 기능은 DNS 질의 결과를 일정 기간 동안 저장하고 재사용하는
          기능입니다. 이는 인터넷의 도메인 이름(예: www.example.com)을 해당하는 IP 주소(예: 192.0.2.1)로 변환하는
          과정에서 중요한 역할을 합니다. 캐시 기능을 통해 DNS 서버는 동일한 DNS 질의에 대한 반복적인 처리를
          피하고, DNS 질의 응답 시간을 단축하여 전반적인 인터넷 성능을 향상시킵니다.`,
        },
        {
          id: 3,
          question: 'DNS 서버의 Cache 기능은 무엇인가요?',
          answer: `DNS(Domain Name System) 서버의 캐시 기능은 DNS 질의 결과를 일정 기간 동안 저장하고 재사용하는
          기능입니다. 이는 인터넷의 도메인 이름(예: www.example.com)을 해당하는 IP 주소(예: 192.0.2.1)로 변환하는
          과정에서 중요한 역할을 합니다. 캐시 기능을 통해 DNS 서버는 동일한 DNS 질의에 대한 반복적인 처리를
          피하고, DNS 질의 응답 시간을 단축하여 전반적인 인터넷 성능을 향상시킵니다.`,
        },
      ],
    },
    {
      id: 3,
      documentName: 'DNS(Domain Name System)이란?',
      createdAt: '2024-02-14',
      questions: [
        {
          id: 1,
          question: 'DNS 서버의 Cache 기능은 무엇인가요?',
          answer: `DNS(Domain Name System) 서버의 캐시 기능은 DNS 질의 결과를 일정 기간 동안 저장하고 재사용하는
          기능입니다. 이는 인터넷의 도메인 이름(예: www.example.com)을 해당하는 IP 주소(예: 192.0.2.1)로 변환하는
          과정에서 중요한 역할을 합니다. 캐시 기능을 통해 DNS 서버는 동일한 DNS 질의에 대한 반복적인 처리를
          피하고, DNS 질의 응답 시간을 단축하여 전반적인 인터넷 성능을 향상시킵니다.`,
        },
        {
          id: 2,
          question: 'DNS 서버의 Cache 기능은 무엇인가요?',
          answer: `DNS(Domain Name System) 서버의 캐시 기능은 DNS 질의 결과를 일정 기간 동안 저장하고 재사용하는
          기능입니다. 이는 인터넷의 도메인 이름(예: www.example.com)을 해당하는 IP 주소(예: 192.0.2.1)로 변환하는
          과정에서 중요한 역할을 합니다. 캐시 기능을 통해 DNS 서버는 동일한 DNS 질의에 대한 반복적인 처리를
          피하고, DNS 질의 응답 시간을 단축하여 전반적인 인터넷 성능을 향상시킵니다.`,
        },
        {
          id: 3,
          question: 'DNS 서버의 Cache 기능은 무엇인가요?',
          answer: `DNS(Domain Name System) 서버의 캐시 기능은 DNS 질의 결과를 일정 기간 동안 저장하고 재사용하는
          기능입니다. 이는 인터넷의 도메인 이름(예: www.example.com)을 해당하는 IP 주소(예: 192.0.2.1)로 변환하는
          과정에서 중요한 역할을 합니다. 캐시 기능을 통해 DNS 서버는 동일한 DNS 질의에 대한 반복적인 처리를
          피하고, DNS 질의 응답 시간을 단축하여 전반적인 인터넷 성능을 향상시킵니다.`,
        },
      ],
    },
  ],
};

export function RepositoryPage() {
  const { selectedCategory } = useCategoryStore();

  return (
    <div className="flex">
      <main className="flex w-full max-w-3xl flex-col p-12">
        <Txt typography="h1">{selectedCategory?.name || '카테고리'}</Txt>
        {data.documents.map((document) => (
          <div key={document.id} className="mt-8 space-y-2 rounded-lg border-2 p-4">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <Txt typography="large">{`Note: ${document.documentName}`}</Txt>
                <Txt typography="small" className="text-foreground/35">
                  {document.createdAt}
                </Txt>
              </div>
              <Button variant="outline">문서보기</Button>
            </div>
            <Accordion type="multiple" className="w-full pl-4">
              {document.questions.map((question, index) => (
                <AccordionItem key={question.id} value={String(question.id)} className="last:border-none">
                  <AccordionTrigger>{`${index + 1}. ${question.question}`}</AccordionTrigger>
                  <AccordionContent>{question.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </main>
    </div>
  );
}
