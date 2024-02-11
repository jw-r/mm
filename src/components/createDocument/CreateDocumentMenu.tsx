import useRouter from '@/hooks/useRouter';
import { Button } from '../ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { CreateDocumentDialog } from './FileUploadDialog';
import { useCategoryStore } from '@/stores/categoryStore';

export function CreateDocumentMenu() {
  const { push } = useRouter();
  const { selectedCategory } = useCategoryStore();

  const noCategoryAlert = () => {
    if (!selectedCategory?.id) {
      alert('카테고리를 먼저 생성해주세요');
      return true;
    }

    return false;
  };

  const moveToWrite = () => {
    if (noCategoryAlert()) {
      return;
    }

    push('/write');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="h-full">문서 업로드</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col space-y-2">
        {selectedCategory?.id ? (
          <CreateDocumentDialog.FileUpload />
        ) : (
          <Button onClick={noCategoryAlert} variant="ghost">
            md 파일 업로드
          </Button>
        )}
        <Button onClick={moveToWrite} variant="ghost">
          직접 작성하기
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
