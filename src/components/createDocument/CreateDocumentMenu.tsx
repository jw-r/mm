import useRouter from '@/hooks/useRouter';
import { Button } from '../ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { CreateDocumentDialog } from './FileUploadDialog';
import { useCategoryStore } from '@/stores/categoryStore';

export function CreateDocumentMenu() {
  const { push } = useRouter();
  const { selectedCategory } = useCategoryStore();

  const moveToWrite = () => {
    if (!selectedCategory?.id) {
      alert('카테고리를 먼저 생성해주세요');
      return;
    }

    push('/write');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button className="h-full">문서 업로드</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col space-y-2">
        <CreateDocumentDialog.FileUpload />
        <Button onClick={moveToWrite} variant="ghost">
          직접 작성하기
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
