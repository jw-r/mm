import { MD } from '@/components/common/Markdown/MD';
import { CreateDocumentDialog } from '@/components/createDocument/FileUploadDialog';
import { useState } from 'react';

// 문서, 복습창고

export function WriteDocumentPage() {
  const [value, setValue] = useState('');
  const [userDocumentName, setUserDocumentName] = useState('');

  return (
    <div>
      <MD.Editor value={value} setValue={setValue} />
      <div className="absolute bottom-0 flex h-16 w-full items-center justify-end bg-foreground p-4">
        <CreateDocumentDialog.Write content={value} />
      </div>
    </div>
  );
}

{
  /* <div className="mt-2 flex flex-col space-y-2 py-2">
        <Input
          placeholder="문서의 제목을 입력해주세요"
          className="border-none text-3xl font-bold placeholder:text-foreground/40"
          required
        />
        <Select>
          <SelectTrigger className="ml-4 w-[140px] justify-center focus:ring-0">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div> */
}
