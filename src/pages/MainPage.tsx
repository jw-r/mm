import Sidebar from '@/components/Sidebar';
import { Txt } from '@/components/shared/Txt';

export function MainPage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex flex-col p-12">
        <Txt typography="h1">네트워크</Txt>
      </main>
    </div>
  );
}
