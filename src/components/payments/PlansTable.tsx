import { HTMLProps } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { useGetUserInfo } from '@/remotes/user/getUserInfo';

export function PlansTable({
  className,
  caption,
}: {
  className?: HTMLProps<HTMLElement>['className'];
  caption?: string;
}) {
  const { data: user } = useGetUserInfo();

  const isPro = user?.subscription.plan === 'PRO';

  if (!user) return null;
  return (
    <Table className={className}>
      {caption && <TableCaption>{caption}</TableCaption>}
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          <TableHead className="text-center">free</TableHead>
          <TableHead className="bg-foreground/5 text-center">현재</TableHead>
          <TableHead className="text-center">PRO</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="text-center font-medium">
            최대 보유
            <br />
            문서 개수
          </TableCell>
          <TableCell className="text-center">{user?.documentUsage.freePlanMaxPossessDocumentNum}</TableCell>
          <TableCell className="bg-foreground/5 text-center">
            {user?.documentUsage.currentPossessDocumentNum} /{' '}
            {isPro
              ? user?.documentUsage.proPlanMaxPossessDocumentNum
              : user?.documentUsage.freePlanMaxPossessDocumentNum}
          </TableCell>
          <TableCell className="text-center font-bold">{user?.documentUsage.proPlanMaxPossessDocumentNum}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="text-center font-medium">
            최대 문서
            <br />
            생성 개수
          </TableCell>
          <TableCell className="text-center">{user?.documentUsage.freePlanSubscriptionMaxUploadDocumentNum}</TableCell>
          <TableCell className="bg-foreground/5 text-center">
            {user?.documentUsage.currentSubscriptionCycleUploadedDocumentNum} /{' '}
            {isPro
              ? user?.documentUsage.proPlanSubscriptionMaxUploadDocumentNum
              : user?.documentUsage.freePlanSubscriptionMaxUploadDocumentNum}
          </TableCell>
          <TableCell className="text-center font-bold">
            {user?.documentUsage.proPlanSubscriptionMaxUploadDocumentNum}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

// anytimeMaxDocumentNum
// :
// 최대 보유횟수
// currentSubscriptionCycleMaxDocumentNum
// :
// 최대 업로드 횟수
// currentSubscriptionCycleUploadedDocumentNum
// :
// 현재 문서 개수
// currentUploadedDocumentNum
// :
// 현재 보유횟수
