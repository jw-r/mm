import { MD } from '@/components/common/Markdown/MD';
import { CreateDocumentDialog } from '@/components/createDocument/FileUploadDialog';
import { ProtectLimitProvider } from '@/components/createDocument/ProtectLimitProvider';
import { Txt } from '@/components/shared/Txt';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { MAX_CONTENT_LENGTH, MIN_CONTENT_LENGTH } from '@/constants';
import { useState } from 'react';

export function WriteDocumentPage() {
  const [value, setValue] = useState('');

  return (
    <div>
      <MD.Editor value={value} setValue={setValue} />
      <div className="absolute bottom-0 flex h-16 w-full items-center justify-between bg-foreground p-4">
        <Txt typography="small" className="font-semibold text-background">
          {value.length} / {MAX_CONTENT_LENGTH.toLocaleString('ko-kr')}
        </Txt>
        {value.length < MIN_CONTENT_LENGTH ? (
          <Button
            variant="secondary"
            className="px-6 py-3 font-semibold"
            onClick={() =>
              toast({
                title: `${MIN_CONTENT_LENGTH.toLocaleString('ko-ro')} 이상 입력해주세요`,
                description: `사용자님께 도움이 되는 퀴즈를 생성하기 위해 최소 ${MIN_CONTENT_LENGTH.toLocaleString('ko-ro')}자의 컨텐츠가 필요해요 😭`,
              })
            }
          >
            업로드
          </Button>
        ) : (
          <ProtectLimitProvider
            fakeTrigger={
              <Button variant="secondary" className="px-6 py-3 font-semibold">
                업로드
              </Button>
            }
          >
            <CreateDocumentDialog
              type="content"
              content={value}
              trigger={
                <Button variant="secondary" className="px-6 py-3 font-semibold">
                  업로드
                </Button>
              }
            />
          </ProtectLimitProvider>
        )}
      </div>
    </div>
  );
}
