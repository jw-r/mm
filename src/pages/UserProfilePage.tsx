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
    <div className="flex justify-center">
      <div className="flex w-full max-w-3xl flex-col space-y-2 p-4">
        <Txt typography="large">{user.email} 님 안녕하세요!</Txt>
        <Txt typography="line-code">{user.subscription.plan} Plan</Txt>
        {isPro ? (
          <div className="flex flex-col items-end space-y-1">
            <Txt typography="small">결제일: {formatDate(user.subscription.expireDate)}</Txt>
            <Txt typography="small">만료알: {formatDate(user.subscription.expireDate)}</Txt>
          </div>
        ) : (
          <div className="text-end">
            <Button className="text-xs font-semibold" onClick={() => push('/upgrade')}>
              PRO로 Upgrade
            </Button>
          </div>
        )}
        <div className="absolute bottom-5 left-1/2 w-full max-w-3xl -translate-x-1/2 px-5">
          <Button className="w-full" onClick={() => push('/feedback')}>
            피드백 및 문의
          </Button>
        </div>
      </div>
    </div>
  );
}
