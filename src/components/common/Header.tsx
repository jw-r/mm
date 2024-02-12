import { STYLE } from '@/constants';
import { Nav } from './Nav';
import useRouter from '@/hooks/useRouter';

export function Header() {
  const { push } = useRouter();
  const height = `h-[${STYLE.HEADER_HEIGHT}px]`;

  return (
    <header className={`sticky top-0 z-50 flex ${height} items-center border-b-[1px] bg-background p-4 px-5`}>
      <div className="mr-8 box-border w-24 cursor-pointer whitespace-nowrap font-extrabold" onClick={() => push('/')}>
        Pick-Toss
      </div>
      <Nav />
    </header>
  );
}
