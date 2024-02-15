import { useGetUserInfo } from '@/remotes/user/getUserInfo';
import { ReactNode, useEffect, useState } from 'react';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '../ui/dialog';
import { X } from 'lucide-react';
import { Button } from '../ui/button';
import useRouter from '@/hooks/useRouter';
import { PlansTable } from '../payments/PlansTable';

export function ProtectLimitProvider({ children, fakeTrigger }: { children: ReactNode; fakeTrigger: ReactNode }) {
  const { push } = useRouter();
  const { data: user } = useGetUserInfo();
  const [limitedUpload, setLimitedUpload] = useState<'curMax' | 'totalMax' | null>(null);

  const isPro = user?.subscription.plan === 'PRO';
  const curUserLimitPossessNum =
    (isPro ? user.documentUsage.proPlanMaxPossessDocumentNum : user?.documentUsage.freePlanMaxPossessDocumentNum) ||
    Infinity;

  const curUserLimitUploadNum =
    (isPro
      ? user.documentUsage.proPlanSubscriptionMaxUploadDocumentNum
      : user?.documentUsage.freePlanSubscriptionMaxUploadDocumentNum) || Infinity;

  useEffect(() => {
    if (!user) return;

    if (user?.documentUsage.currentPossessDocumentNum >= curUserLimitPossessNum) {
      setLimitedUpload('curMax');
    } else if (user?.documentUsage.currentSubscriptionCycleUploadedDocumentNum >= curUserLimitUploadNum) {
      setLimitedUpload('totalMax');
    }
  }, [user, curUserLimitPossessNum, curUserLimitUploadNum]);

  const title =
    limitedUpload === 'totalMax'
      ? '업로드할 수 있는 문서 횟수를 초과했어요 😭'
      : '보유할 수 있는 최대 문서 개수를 초과했어요';

  if (limitedUpload) {
    return (
      <Dialog>
        <DialogTrigger asChild>{fakeTrigger}</DialogTrigger>
        <DialogContent className="p-2 py-6 sm:p-6">
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
          </DialogClose>
          <DialogTitle className="text-center">{title}</DialogTitle>
          <DialogDescription className="text-center">문서를 삭제하고 다시 시도해주세요</DialogDescription>
          <div className="w-full p-1 text-center text-base ring-1 ring-offset-2 ring-offset-cyan-300 ">
            혹은 단돈 3,900원으로 PRO 모드를 즐겨보세요!
          </div>

          <PlansTable caption="결제 후, 최대 12시간 이내에 PRO 계정으로 전환됩니다" />

          <DialogClose asChild>
            <Button onClick={() => push('/upgrade')} className="font-semibold">
              PRO 로 업그레이드하기
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    );
  } else {
    return children;
  }
}
