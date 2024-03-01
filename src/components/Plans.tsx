import { Check } from 'lucide-react';
import { Txt } from './Txt';
import { useGetUserInfo } from '@/remotes/user/getUserInfo';
import { Button } from './ui/button';
import useRouter from '@/hooks/useRouter';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function Plans() {
  const { data: user } = useGetUserInfo();

  const isPro = user?.subscription.plan === 'PRO';

  if (!user) return;
  return (
    <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:justify-around">
      <PlanCardContainer isPro={false}>
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
      </PlanCardContainer>
      <PlanCardContainer isPro={true}>
        <Txt
          typography="h3"
          className="from-gradient-start to-gradient-end mb-2 bg-gradient-to-tr bg-clip-text font-bold text-transparent"
        >
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

        <PaymentButton isPro={isPro} label={isPro ? '이미 PRO 사용자입니다' : '월 3,900원 결제하기'} />
      </PlanCardContainer>
    </div>
  );
}

function PlanCardContainer({ isPro, children }: { isPro: boolean; children: ReactNode }) {
  return (
    <div
      className={cn([
        'flex w-full items-center justify-start rounded-md p-0.5',
        isPro ? 'from-gradient-start to-gradient-end bg-gradient-to-tr' : 'bg-foreground/15',
      ])}
    >
      <div className="flex h-full w-full flex-col items-center space-y-2 rounded-sm bg-background p-4">{children}</div>
    </div>
  );
}

function PaymentButton({ isPro, label }: { isPro: boolean; label: string }) {
  const { push } = useRouter();

  return (
    <Button
      className={cn([
        'from-gradient-start to-gradient-end w-full cursor-default bg-gradient-to-tr font-extrabold text-white hover:bg-gradient-to-tr',
        isPro
          ? 'hover:from-gradient-start hover:to-gradient-end'
          : 'hover:from-gradient-hoverStart hover:to-gradient-hoverEnd cursor-pointer',
      ])}
      onClick={isPro ? undefined : () => push('/upgrade')}
    >
      {label}
    </Button>
  );
}
