import useRouter from '@/hooks/useRouter';
import { Button } from '../ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { FileUploadDialog } from './FileUploadDialog';

export function CreateDocumentMenu() {
  const { push } = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button className="h-full">문서 업로드</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col space-y-2">
        <FileUploadDialog />
        <Button onClick={() => push('/write')} variant="ghost">
          직접 작성하기
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
