import { MD } from '@/components/MD';
import { CreateDocumentDialog } from '@/components/FileUploadDialog';
import { DocumentLimitProtecter } from '@/components/DocumentLimitProtecter';
import { SEO } from '@/components/SEO';
import { Txt } from '@/components/Txt';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { MAX_CONTENT_LENGTH, MIN_CONTENT_LENGTH } from '@/constants';
import { ButtonHTMLAttributes, useState } from 'react';

export function WriteDocumentPage() {
  const [value, setValue] = useState('');

  return (
    <div>
      <SEO title="Write doc" description="문서 직접 작성하기" image="" />
      <MD.Editor value={value} setValue={setValue} />
      <div className="absolute bottom-0 flex h-16 w-full items-center justify-between bg-foreground p-4">
        <Txt typography="small" className="font-semibold text-background">
          {value.length} / {MAX_CONTENT_LENGTH.toLocaleString('ko-kr')}
        </Txt>
        {value.length < MIN_CONTENT_LENGTH ? (
          <UploadButton
            onClick={() =>
              toast({
                title: `${MIN_CONTENT_LENGTH.toLocaleString('ko-ro')} 이상 입력해주세요`,
                description: `사용자님께 도움이 되는 퀴즈를 생성하기 위해 최소 ${MIN_CONTENT_LENGTH.toLocaleString('ko-ro')}자의 컨텐츠가 필요해요 😭`,
              })
            }
          />
        ) : (
          <DocumentLimitProtecter fakeTrigger={<UploadButton />}>
            <CreateDocumentDialog type="content" content={value} trigger={<UploadButton />} />
          </DocumentLimitProtecter>
        )}
      </div>
    </div>
  );
}

function UploadButton({ ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button variant="secondary" className="px-6 py-3 font-semibold" {...props}>
      업로드
    </Button>
  );
}
