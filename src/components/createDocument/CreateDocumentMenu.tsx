import { Button } from '../ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { FileUploadDialog } from './FileUploadDialog';

export function CreateDocumentMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button className="h-full">문서 업로드</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col space-y-2">
        <FileUploadDialog />
        <FileUploadDialog />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
