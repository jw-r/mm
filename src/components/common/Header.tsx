import { Nav } from './Nav';

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-[74px] border-b-[1px] bg-background px-5 py-6">
      <div className="mr-8 font-extrabold">Pick-Toss</div>
      <Nav />
    </header>
  );
}
