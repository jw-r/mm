import BackButton from '@/components/BackButton';
import { SEO } from '@/components/SEO';
import { Txt } from '@/components/Txt';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import useRouter from '@/hooks/useRouter';
import { usePostFeedback } from '@/remotes/user/postFeedback';
import isEmptyString from '@/utils/isEmptyString';
import { useState } from 'react';

export function FeedbackPage() {
  const { back } = useRouter();
  const [content, setContent] = useState('');
  const { mutate: postFeedback } = usePostFeedback();

  const sendFeedback = () => {
    if (isEmptyString(content)) {
      return;
    }

    postFeedback(
      { content },
      {
        onSuccess: () => {
          toast({
            title: '피드백 제출이 완료됐어요 🚀',
            description: '소중한 의견 감사합니다',
          });

          back();
        },
      },
    );
  };

  return (
    <>
      <SEO title="Feedback" description="각종 문의 및 피드백" image="" />
      <main className="flex justify-center">
        <div className="mt-6 flex w-full max-w-3xl flex-col items-start justify-center px-4">
          <BackButton label="뒤로" />
          <div className="w-full">
            <Txt typography="large" className="mb-3 mt-4 text-center">
              각종 문의사항 및 소중한 피드백을 보내주세요
            </Txt>
            <Textarea onChange={(e) => setContent(e.target.value)} className="min-h-36" />
            <Button className="mt-4 w-full" onClick={sendFeedback}>
              보내기
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
