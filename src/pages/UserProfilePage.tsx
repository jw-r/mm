import { PlansTable } from '@/components/payments/PlansTable';
import { SEO } from '@/components/shared/SEO';
import { Txt } from '@/components/shared/Txt';
import { Button } from '@/components/ui/button';
import useRouter from '@/hooks/useRouter';
import { useGetUserInfo } from '@/remotes/user/getUserInfo';
import { formatDate } from '@/utils/formatDate';

export function UserProfilePage() {
  const { push } = useRouter();
  const { data: user } = useGetUserInfo();

  const isPro = user?.subscription.plan === 'PRO';

  if (!user) return null;
  return (
    <div className="mt-4 flex justify-center pb-20">
      <SEO title="Profile" description="사용자 프로필" image="" />
      <div className="flex w-full max-w-3xl px-5">
        <div className="flex w-full flex-col justify-start">
          <div className="border-b py-4 last:border-none">
            <Txt typography="h4">이메일 주소</Txt>
            <div className="text-md mt-3 font-semibold">{user.email}</div>
            <Txt typography="small" className="text-foreground/50">
              매일 사용자님의 문서를 종합해서 이메일로 퀴즈를 보내드려요
              <br />
              오늘의 퀴즈는 복습 창고에 추가됩니다!
            </Txt>
          </div>
          <div className="border-b py-4 last:border-none">
            <div className="flex space-x-4">
              <Txt typography="h4">My Plan</Txt>
              {isPro ? (
                <div className="text-md inline-block rounded-md bg-[#82F0D2] px-3 py-1 font-semibold text-white">
                  {user.subscription.plan}
                </div>
              ) : (
                <div className="text-md mt-3 inline-block rounded-md bg-foreground/30 px-3 py-1 font-semibold text-white">
                  {user.subscription.plan}
                </div>
              )}
            </div>
            {isPro ? (
              <div className="mt-3 flex flex-col space-y-3 text-foreground/40">
                <Txt typography="small" className="text-foreground/50">
                  결제일: {formatDate(user.subscription.purchasedDate)}
                </Txt>
                <Txt typography="small" className="text-foreground/50">
                  만료일: {formatDate(user.subscription.expireDate)}
                </Txt>
              </div>
            ) : (
              <Button className="mt-2">3,900원으로 PRO 버전으로 업그레이드하기</Button>
            )}
          </div>
          <div className="border-b py-4 last:border-none">
            <Txt typography="h4">나의 문서 현황</Txt>
            <PlansTable className="mt-4 border" />
          </div>
        </div>
      </div>
      <div className="fixed bottom-5 left-1/2 w-full max-w-3xl -translate-x-1/2 px-5">
        <Button className="w-full" onClick={() => push('/feedback')}>
          피드백 및 문의
        </Button>
      </div>
    </div>
  );
}
