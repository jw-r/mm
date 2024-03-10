import { FormEventHandler } from 'react';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Input } from '../ui/input';

export function CategoryUpdateFormDialog({
  triggerLabel,
  handleSubmit,
  placeholder,
}: {
  triggerLabel: string;
  handleSubmit: FormEventHandler;
  placeholder: string;
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" className="h-8 w-full">
          {triggerLabel}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center">변경할 카테고리명을 입력해주세요</AlertDialogTitle>
        </AlertDialogHeader>
        <form onSubmit={handleSubmit}>
          <Input placeholder={placeholder} autoFocus className="mb-2" />
          <AlertDialogFooter>
            <AlertDialogCancel type="button">취소</AlertDialogCancel>
            <Button type="submit">확인</Button>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
