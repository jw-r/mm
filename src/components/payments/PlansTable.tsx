import { HTMLProps } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { useGetUserInfo } from '@/remotes/user/getUserInfo';
import { DOCUMENT } from '@/constants';

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
          <TableCell className="text-center">{DOCUMENT.MAX_DOCUMENT_COUNT_FREE}</TableCell>
          <TableCell className="bg-foreground/5 text-center">
            {user?.documentUsage.anytimeMaxDocumentNum} /{' '}
            {isPro ? DOCUMENT.MAX_DOCUMENT_COUNT_PRO : DOCUMENT.MAX_DOCUMENT_COUNT_FREE}
          </TableCell>
          <TableCell className="text-center font-bold">{DOCUMENT.MAX_DOCUMENT_COUNT_PRO}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="text-center font-medium">
            최대 문서
            <br />
            생성 개수
          </TableCell>
          <TableCell className="text-center">{DOCUMENT.MAX_UPLOAD_COUNT_FREE}</TableCell>
          <TableCell className="bg-foreground/5 text-center">
            {user?.documentUsage.currentSubscriptionCycleUploadedDocumentNum} /{' '}
            {isPro ? DOCUMENT.MAX_UPLOAD_COUNT_PRO : DOCUMENT.MAX_UPLOAD_COUNT_FREE}
          </TableCell>
          <TableCell className="text-center font-bold">{DOCUMENT.MAX_UPLOAD_COUNT_PRO}</TableCell>
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
