import { SEO } from '@/components/shared/SEO';
import { Txt } from '@/components/shared/Txt';
import { Button } from '@/components/ui/button';
import useRouter from '@/hooks/useRouter';
import { useGetUserInfo } from '@/remotes/user/getUserInfo';
import { formatDate } from '@/utils/formatDate';
import { Check } from 'lucide-react';

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
            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:justify-around">
              <div className="flex w-full flex-col items-center space-y-2 rounded-md border-2 p-4">
                <Txt typography="h3">Free</Txt>
                <div className="flex flex-col space-y-3 text-foreground/70">
                  <div className="flex items-center">
                    <Check size={18} className="mr-2" />
                    <Txt typography="small">최대 3개의 문서 보유 가능</Txt>
                  </div>
                  <div className="flex items-center">
                    <Check size={18} className="mr-2" />
                    <Txt typography="small">월 15개의 문서 생성 가능</Txt>
                  </div>
                  <div className="flex items-center">
                    <Check size={18} className="mr-2" />
                    <Txt typography="small">매일 10개의 퀴즈를 전송</Txt>
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
                    <Txt typography="small">최대 3개의 문서 보유 가능</Txt>
                  </div>
                  <div className="flex items-center">
                    <Check size={18} className="mr-2" />
                    <Txt typography="small">월 15개의 문서 생성 가능</Txt>
                  </div>
                  <div className="flex items-center">
                    <Check size={18} className="mr-2" />
                    <Txt typography="small">매일 10개의 퀴즈를 전송</Txt>
                  </div>
                </div>
                <Txt typography="small" className="mb-1 mt-4 flex flex-col space-y-1 text-foreground/40">
                  <span>* 기존 Pro 사용자는 만료일로부터 30일 연장됩니다</span>
                  <span>* 자동결제가 되지 않습니다</span>
                </Txt>
                <Button
                  onClick={() => push('/upgrade')}
                  className="w-full bg-[#9DEDD3] font-extrabold text-foreground/60 hover:bg-[#88e7c9]"
                >
                  3,900원 결제하기
                </Button>
              </div>
            </div>
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
