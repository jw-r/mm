import useRouter from '@/hooks/useRouter';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { CreateDocumentDialog } from '../../../components/FileUploadDialog';
import { useGetUserInfo } from '@/remotes/user/getUserInfo';
import { toast } from '@/components/ui/use-toast';
import { DocumentLimitProtecter } from '../../../components/DocumentLimitProtecter';
import { useCategoryStore } from '@/stores/categoryStore';

export function CreateDocumentMenu() {
  const { push } = useRouter();
  const { selectedCategory } = useCategoryStore();
  const { data: user } = useGetUserInfo();

  if (!user) return null;
  return (
    <DocumentLimitProtecter fakeTrigger={<Button className="h-full">문서 업로드</Button>}>
      {selectedCategory?.id ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="h-full">문서 업로드</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="flex flex-col space-y-2">
            <CreateDocumentDialog type="file" />
            <Button onClick={() => push('/write')} variant="ghost">
              직접 작성하기
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button className="h-full" onClick={() => toast({ title: '카테고리를 먼저 생성해주세요' })}>
          문서 업로드
        </Button>
      )}
    </DocumentLimitProtecter>
  );
}
