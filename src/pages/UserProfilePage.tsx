import { Plans } from '@/components/Plans';
import { SEO } from '@/components/SEO';
import { Txt } from '@/components/Txt';
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
            <div className="mt-3 flex flex-col space-y-3">
              <Txt typography="small" className="text-foreground/50">
                매일 사용자님의 문서를 종합해서 이메일로 퀴즈를 보내드려요
              </Txt>
              <Txt typography="small" className="text-foreground/50">
                오늘의 퀴즈는 복습 창고에 추가됩니다!
              </Txt>
            </div>
          </div>
          <div className="border-b py-4 last:border-none">
            <Txt typography="h4">나의 문서 현황</Txt>
            <div className="mt-3 flex flex-col space-y-3">
              <Txt typography="small" className="text-foreground/50">
                보유한 문서 개수 : {user.documentUsage.currentPossessDocumentNum}
              </Txt>
              <Txt typography="small" className="text-foreground/50">
                이번 달 업로드한 문서 개수 : {user.documentUsage.currentSubscriptionCycleUploadedDocumentNum}
              </Txt>
            </div>
          </div>
          <div className="border-b py-4 last:border-none">
            <div className="flex space-x-4">
              <Txt typography="h4">My Plan</Txt>
              {isPro ? (
                <div className="text-md inline-block rounded-md bg-[#82F0D2] px-3 py-1 font-semibold text-white">
                  {user.subscription.plan}
                </div>
              ) : (
                <div className="text-md inline-block rounded-md bg-foreground/30 px-3 py-1 font-semibold text-white">
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
              <Button className="mt-2" onClick={() => push('/upgrade')}>
                3,900원으로 PRO 버전 업그레이드하기
              </Button>
            )}
            <Plans />
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-1/2 w-full max-w-3xl -translate-x-1/2 space-y-2 bg-background px-5 pb-5">
        <Txt typography="small" className="text-foreground/60">
          비즈니스 문의사항: support@picktoss.com
        </Txt>
        <Button className="w-full" onClick={() => push('/feedback')}>
          피드백 및 문의
        </Button>
      </div>
    </div>
  );
}
