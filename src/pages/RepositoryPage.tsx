import Sidebar from '@/components/Sidebar';
import { Txt } from '@/components/shared/Txt';

export function RepositoryPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col p-12">
        <Txt typography="h1">네트워크</Txt>
      </div>
    </div>
  );
}
