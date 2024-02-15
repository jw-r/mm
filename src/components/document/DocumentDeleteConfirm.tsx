import { MouseEventHandler, ReactNode } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../ui/alert-dialog';
import { Button } from '../ui/button';

export function DocumentDeleteConfirm({ trigger, deleteDocument }: { trigger: ReactNode; deleteDocument: () => void }) {
  const onClickDeleteButton: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    console.log(e);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center">정말 삭제하시겠습니까?</AlertDialogTitle>
          <AlertDialogDescription className="text-center text-red-500">
            해당 문서와 관련된 퀴즈가 함께 삭제됩니다. 정말로 삭제하시겠어요?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>취소</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button onClick={deleteDocument}>확인</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
