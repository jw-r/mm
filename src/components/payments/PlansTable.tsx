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
          <TableCell className="text-center">{user?.documentUsage.anytimeMaxDocumentNum}</TableCell>
          <TableCell className="bg-foreground/5 text-center">3 / 3</TableCell>
          <TableCell className="text-center font-bold">15</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="text-center font-medium">
            최대 문서
            <br />
            생성 개수
          </TableCell>
          <TableCell className="text-center">15</TableCell>
          <TableCell className="bg-foreground/5 text-center">
            {user?.documentUsage.currentSubscriptionCycleUploadedDocumentNum} / 15
          </TableCell>
          <TableCell className="text-center font-bold">45</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
