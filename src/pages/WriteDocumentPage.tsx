import { MD } from '@/components/common/Markdown/MD';
import { CreateDocumentDialog } from '@/components/createDocument/FileUploadDialog';
import { useState } from 'react';

// 문서, 복습창고

export function WriteDocumentPage() {
  const [value, setValue] = useState('');

  return (
    <div>
      <MD.Editor value={value} setValue={setValue} />
      <div className="absolute bottom-0 flex h-16 w-full items-center justify-end bg-foreground p-4">
        <CreateDocumentDialog.Write content={value} />
      </div>
    </div>
  );
}
