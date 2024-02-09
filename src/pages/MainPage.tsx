import Sidebar from '@/components/Sidebar';
import { Txt } from '@/components/shared/Txt';

export function MainPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div>MainPage</div>
      <Txt typography="large">MainPage</Txt>
    </div>
  );
}
