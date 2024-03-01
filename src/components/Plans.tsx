import { Check } from 'lucide-react';
import { Txt } from './Txt';
import { useGetUserInfo } from '@/remotes/user/getUserInfo';
import { Button } from './ui/button';
import useRouter from '@/hooks/useRouter';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function Plans() {
  const { data: user } = useGetUserInfo();
  if (!user) return;

  const { documentUsage, quiz } = user;
  const isPro = user.subscription.plan === 'PRO';

  const 최대_문서보유_개수 = isPro
    ? documentUsage.proPlanMaxPossessDocumentNum
    : documentUsage.freePlanMaxPossessDocumentNum;
  const 문서생성_개수 = isPro
    ? documentUsage.proPlanSubscriptionMaxUploadDocumentNum
    : documentUsage.freePlanSubscriptionMaxUploadDocumentNum;
  const 즉시오픈퀴즈 = isPro ? '퀴즈 5개' : '모든 퀴즈';
  const 전송퀴즈_개수 = isPro ? quiz.proPlanQuizQuestionNum : quiz.freePlanQuizQuestionNum;

  if (!user) return;
  return (
    <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:justify-around">
      <PlanCardContainer type="Free">
        <Benefits
          plan="Free"
          최대_문서보유_개수={최대_문서보유_개수}
          문서생성_개수={문서생성_개수}
          즉시오픈퀴즈={즉시오픈퀴즈}
          전송퀴즈_개수={전송퀴즈_개수}
        />
      </PlanCardContainer>
      <PlanCardContainer type="PRO">
        <Benefits
          plan="PRO"
          최대_문서보유_개수={최대_문서보유_개수}
          문서생성_개수={문서생성_개수}
          즉시오픈퀴즈={즉시오픈퀴즈}
          전송퀴즈_개수={전송퀴즈_개수}
        />
        <div className="w-full">
          <Txt typography="small" className="mb-1 mt-3 block text-center text-foreground/40">
            * 자동결제가 되지 않습니다
          </Txt>
          <PaymentButton isPro={isPro} label={isPro ? '이미 PRO 사용자입니다' : '월 3,900원 결제하기'} />
        </div>
      </PlanCardContainer>
    </div>
  );
}

function PlanCardContainer({ type, children }: { type: 'Free' | 'PRO'; children: ReactNode }) {
  return (
    <div
      className={cn([
        'flex w-full items-center justify-start rounded-md p-0.5',
        type ? '_pro-gradient bg-gradient-to-tr' : 'bg-foreground/15',
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
        '_pro-gradient w-full cursor-pointer bg-gradient-to-tr font-extrabold text-white',
        isPro ? '_pro-gradient cursor-default' : 'hover:_pro-gradient-hover',
      ])}
      onClick={isPro ? undefined : () => push('/upgrade')}
    >
      {label}
    </Button>
  );
}

function Benefits({
  plan,
  최대_문서보유_개수,
  문서생성_개수,
  즉시오픈퀴즈,
  전송퀴즈_개수,
}: {
  plan: 'Free' | 'PRO';
  최대_문서보유_개수: number;
  문서생성_개수: number;
  즉시오픈퀴즈: string;
  전송퀴즈_개수: number;
}) {
  return (
    <>
      <Txt
        typography="h3"
        className={plan === 'PRO' ? '_pro-gradient mb-2 bg-gradient-to-tr bg-clip-text font-bold text-transparent' : ''}
      >
        {plan}
      </Txt>
      <div className="flex flex-col space-y-3 text-foreground/70">
        <div className="flex items-center">
          <Check size={18} className="mr-2" />
          <Txt typography="small">최대 {최대_문서보유_개수}개의 문서 보유 가능</Txt>
        </div>
        <div className="flex items-center">
          <Check size={18} className="mr-2" />
          <Txt typography="small">월 {문서생성_개수}개의 문서 생성 가능</Txt>
        </div>
        <div className="flex items-center">
          <Check size={18} className="mr-2" />
          <Txt typography="small">문서 생성시 {즉시오픈퀴즈} 즉시 오픈</Txt>
        </div>
        <div className="flex items-center">
          <Check size={18} className="mr-2" />
          <Txt typography="small">매일 {전송퀴즈_개수}개의 퀴즈를 전송</Txt>
        </div>
      </div>
    </>
  );
}
