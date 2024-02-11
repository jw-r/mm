import { STYLE } from '@/constants';
import { Nav } from './Nav';

export function Header() {
  const height = `h-[${STYLE.HEADER_HEIGHT}px]`;

  return (
    <header className={`sticky top-0 z-50 flex ${height} border-b-[1px] bg-background px-5 py-6`}>
      <div className="mr-8 font-extrabold">Pick-Toss</div>
      <Nav />
    </header>
  );
}
