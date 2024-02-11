import { MD } from '@/components/common/Markdown/MD';
import { useState } from 'react';

export function WriteDocumentPage() {
  const [value, setValue] = useState('');

  return <MD.Editor value={value} setValue={setValue} />;
}
