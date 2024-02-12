import { X } from 'lucide-react';
import { Button } from '../ui/button';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog';
import { Input } from '../ui/input';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { FormEventHandler, ReactNode, useEffect, useState } from 'react';
import { useCreateDocument } from '@/remotes/document/createDocument';
import { useCategoryStore } from '@/stores/categoryStore';
import { DialogTrigger } from '@radix-ui/react-dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { useGetCategories } from '@/remotes/category/getCategories';
import { Txt } from '../shared/Txt';
import { useGetDocument } from '@/remotes/document/getDocument';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import useRouter from '@/hooks/useRouter';

export function CreateDocumentDialog({ children }: { children: ReactNode }) {
  return children;
}

function FileUpload({ trigger }: { trigger?: ReactNode }) {
  const { selectedCategory } = useCategoryStore();
  const { mutate: createDocument } = useCreateDocument();

  const [uploadProcess, setUploadProcess] = useState<'NOT_START' | 'PROGRESSING' | 'DONE'>('NOT_START');
  const [documentId, setDocumentId] = useState<number | undefined>();

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setUploadProcess('PROGRESSING');

    const formData = new FormData(e.currentTarget);
    const file = formData.get('file') as File;
    const userDocumentName = formData.get('userDocumentName') as string;

    if (file.type !== 'text/markdown') {
      alert('마크다운 문서를 업로드해주세요');
      return;
    }

    createDocument(
      {
        file,
        userDocumentName,
        categoryId: Number(selectedCategory?.id),
        documentFormat: 'MARKDOWN',
      },
      {
        onSuccess: ({ id }) => {
          setDocumentId(id);
        },
      },
    );
  };

  const ProcessContent = () => {
    if (uploadProcess === 'PROGRESSING') {
      return <Progressing documentId={documentId} next={() => setUploadProcess('DONE')} />;
    } else if (uploadProcess === 'DONE') {
      return <Done documentId={documentId} />;
    }
  };

  return (
    <Dialog
      open={uploadProcess === 'PROGRESSING' ? true : undefined}
      onOpenChange={() => {
        setDocumentId(undefined);
        setUploadProcess('NOT_START');
      }}
    >
      <DialogTrigger asChild>
        {trigger ? (
          trigger
        ) : (
          <Button variant="ghost" className="h-full">
            md 파일 업로드
          </Button>
        )}
      </DialogTrigger>
      <DialogContent>
        {uploadProcess === 'NOT_START' ? (
          <>
            <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X className="h-4 w-4" />
            </DialogClose>
            <DialogHeader>
              <DialogTitle className="text-center">문서 업로드</DialogTitle>
              <DialogDescription className="text-center">
                MARKDOWN 문서를 업로드하면 질문을 생성해서 매일 알림을 보내드려요!
                <br /> 학습 창고에서 등록한 모든 문서와 질문을 확인할 수 있어요
              </DialogDescription>
            </DialogHeader>
            <form className="flex min-h-48 flex-col justify-end" onSubmit={onSubmit}>
              <TooltipProvider>
                <Tooltip open>
                  <TooltipTrigger asChild>
                    <Input
                      type="file"
                      name="file"
                      className="mt-8 hover:bg-foreground/10"
                      accept=".md"
                      placeholder=".md 확장자 파일을 업로드해주세요"
                      required
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      <strong>.md 확장자</strong> 파일을 업로드해주세요!
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <Input name="userDocumentName" placeholder="문서 이름을 작성해주세요!" className="mt-2" required />
              <Button className="mt-6">문서 등록하고 질문 받아보기</Button>
            </form>
          </>
        ) : (
          <ProcessContent />
        )}
      </DialogContent>
    </Dialog>
  );
}

function Write({ content }: { content: string }) {
  const { selectedCategory } = useCategoryStore();
  const { data } = useGetCategories();
  const { mutate: createDocument } = useCreateDocument();

  const [uploadProcess, setUploadProcess] = useState<'NOT_START' | 'PROGRESSING' | 'DONE'>('NOT_START');
  const [documentId, setDocumentId] = useState<number | undefined>();

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const blob = new Blob([content], { type: 'text/markdown' });
    const file = new File([blob], `${Date.now()}.md`, { type: blob.type });

    const formData = new FormData(e.currentTarget);
    formData.append('file', file);
    const userDocumentName = formData.get('userDocumentName') as string;
    const categoryId = Number(formData.get('category'));

    createDocument(
      {
        file,
        userDocumentName,
        categoryId,
        documentFormat: 'MARKDOWN',
      },
      {
        onSuccess: ({ id }) => {
          setDocumentId(id);
        },
      },
    );

    setUploadProcess('PROGRESSING');
  };

  const ProcessContent = () => {
    if (uploadProcess === 'PROGRESSING') {
      return <Progressing documentId={documentId} next={() => setUploadProcess('DONE')} />;
    } else if (uploadProcess === 'DONE') {
      return <Done documentId={documentId} />;
    }
  };

  if (!data) return null;
  return (
    <Dialog
      onOpenChange={() => {
        setDocumentId(undefined);
        setUploadProcess('NOT_START');
      }}
    >
      <DialogTrigger asChild>
        <Button variant="outline">문서 업로드하기</Button>
      </DialogTrigger>
      {uploadProcess === 'NOT_START' ? (
        <DialogContent>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
          </DialogClose>
          <DialogHeader>
            <DialogTitle className="text-center">문서 업로드</DialogTitle>
            <DialogDescription className="text-center">
              매일 질문을 생성해서 매일 알림을 보내드려요!
              <br /> 학습 창고에서 등록한 모든 문서와 질문을 확인할 수 있어요
            </DialogDescription>
          </DialogHeader>
          <form className="flex min-h-48 flex-col justify-end" onSubmit={onSubmit}>
            <Input name="userDocumentName" placeholder="문서 이름을 작성해주세요!" required />
            <div className="mt-4 flex items-center justify-between">
              <Txt typography="small">카테고리를 선택해주세요</Txt>
              <Select name="category" defaultValue={String(selectedCategory?.id)}>
                <SelectTrigger className="w-[180px] focus:ring-0">
                  <SelectValue placeholder={selectedCategory?.name} />
                </SelectTrigger>
                <SelectContent>
                  {data.categories.map((category) => (
                    <SelectItem key={category.id} value={String(category.id)}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button className="mt-10">문서 등록하고 질문 받아보기</Button>
          </form>
        </DialogContent>
      ) : (
        <ProcessContent />
      )}
    </Dialog>
  );
}

function Progressing({ documentId, next }: { documentId: number | undefined; next: () => void }) {
  const { data } = useGetDocument({ documentId, polling: true });

  useEffect(() => {
    if (!data) return;

    if (data?.questions.length >= 3) {
      next();
    }
  }, [data?.questions.length]);

  return <div>문제 생성중</div>;
}

function Done({ documentId }: { documentId: number | undefined }) {
  const { push } = useRouter();
  const { data } = useGetDocument({ documentId });

  if (!data) return null;
  return (
    <div className="flex max-h-screen flex-col overflow-y-scroll">
      <DialogHeader>
        <DialogTitle className="text-center">질문 생성을 완료했어요 🎉</DialogTitle>
        <DialogDescription className="text-center">오늘의 퀴즈에 아래의 질문들이 추가되어요!</DialogDescription>
      </DialogHeader>
      <Accordion type="multiple" className="w-full pl-4">
        {data.questions.slice(0, 3).map((question, index) => (
          <AccordionItem key={question.id} value={String(question.id)} className="last:border-none">
            <AccordionTrigger className="text-start">{`${index + 1}. ${question.question}`}</AccordionTrigger>
            <AccordionContent>{question.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <DialogClose asChild>
        <Button onClick={() => push('/')}>홈으로 이동</Button>
      </DialogClose>
    </div>
  );
}

CreateDocumentDialog.FileUpload = FileUpload;
CreateDocumentDialog.Write = Write;
