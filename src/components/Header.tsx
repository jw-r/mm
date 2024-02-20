import { Nav } from './Nav';
import useRouter from '@/hooks/useRouter';

export function Header() {
  const { push } = useRouter();

  return (
    <header className="sticky top-0 z-50 flex h-[73px] items-center space-x-8 border-b-[1px] bg-background px-5">
      <div className="w-24 cursor-pointer whitespace-nowrap font-extrabold" onClick={() => push('/')}>
        Pick-Toss
      </div>
      <Nav />
    </header>
  );
}
