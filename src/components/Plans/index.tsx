import { Txt } from '../Txt';
import { useGetUserInfo } from '@/remotes/user/getUserInfo';
import PaymentButton from './PaymentButton';
import PlanCard from './PlanCard';

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

  const benefits = {
    최대_문서보유_개수,
    문서생성_개수,
    즉시오픈퀴즈,
    전송퀴즈_개수,
  };

  if (!user) return;
  return (
    <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:justify-around">
      <PlanCard plan="FREE" benefits={benefits} />
      <PlanCard
        plan="PRO"
        benefits={benefits}
        footer={
          <div className="w-full">
            <Txt typography="small" className="mb-1 mt-3 block text-center text-foreground/40">
              * 자동결제가 되지 않습니다
            </Txt>
            <PaymentButton isPro={isPro} label={isPro ? '이미 PRO 사용자입니다' : '월 3,900원 결제하기'} />
          </div>
        }
      />
    </div>
  );
}
