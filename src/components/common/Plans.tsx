import { Check } from 'lucide-react';

import { Txt } from '../shared/Txt';
import { useGetUserInfo } from '@/remotes/user/getUserInfo';
import { Button } from '../ui/button';
import useRouter from '@/hooks/useRouter';

export function Plans() {
  const { push } = useRouter();
  const { data: user } = useGetUserInfo();

  const isPro = user?.subscription.plan;

  if (!user) return;
  return (
    <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:justify-around">
      <div className="flex w-full flex-col items-center space-y-2 rounded-md border-2 p-4">
        <Txt typography="h3">Free</Txt>
        <div className="flex flex-col space-y-3 text-foreground/70">
          <div className="flex items-center">
            <Check size={18} className="mr-2" />
            <Txt typography="small">최대 {user.documentUsage.freePlanMaxPossessDocumentNum}개의 문서 보유 가능</Txt>
          </div>
          <div className="flex items-center">
            <Check size={18} className="mr-2" />
            <Txt typography="small">
              월 {user.documentUsage.freePlanSubscriptionMaxUploadDocumentNum}개의 문서 생성 가능
            </Txt>
          </div>
          <div className="flex items-center">
            <Check size={18} className="mr-2" />
            <Txt typography="small">문서 생성시 퀴즈 5개 즉시 오픈</Txt>
          </div>
          <div className="flex items-center">
            <Check size={18} className="mr-2" />
            <Txt typography="small">매일 {user.quiz.freePlanQuizQuestionNum}개의 퀴즈를 전송</Txt>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center rounded-md border-2 border-[#9DEDD3] p-4">
        <Txt typography="h3" className="mb-2 font-bold text-[#9DEDD3]">
          PRO
        </Txt>
        <div className="flex flex-col space-y-3 text-foreground/70">
          <div className="flex items-center">
            <Check size={18} className="mr-2" />
            <Txt typography="small">최대 {user.documentUsage.proPlanMaxPossessDocumentNum}개의 문서 보유 가능</Txt>
          </div>
          <div className="flex items-center">
            <Check size={18} className="mr-2" />
            <Txt typography="small">
              월 {user.documentUsage.proPlanSubscriptionMaxUploadDocumentNum}개의 문서 생성 가능
            </Txt>
          </div>
          <div className="flex items-center">
            <Check size={18} className="mr-2" />
            <Txt typography="small">문서 생성시 모든 퀴즈 즉시 오픈</Txt>
          </div>
          <div className="flex items-center">
            <Check size={18} className="mr-2" />
            <Txt typography="small">매일 {user.quiz.proPlanQuizQuestionNum}개의 퀴즈를 전송</Txt>
          </div>
        </div>
        <Txt typography="small" className="mb-1 mt-4 flex flex-col space-y-1 text-foreground/40">
          <span>* 자동결제가 되지 않습니다</span>
        </Txt>
        {isPro ? (
          <Button className="w-full cursor-default bg-[#9DEDD3] font-extrabold text-foreground/60 hover:bg-[#9DEDD3]">
            이미 PRO 사용자입니다
          </Button>
        ) : (
          <Button
            onClick={() => push('/upgrade')}
            className="w-full bg-[#9DEDD3] font-extrabold text-foreground/60 hover:bg-[#88e7c9]"
          >
            3,900원 결제하기
          </Button>
        )}
      </div>
    </div>
  );
}
