import { Nav } from './Nav';

export function Header() {
  return (
    <header className="sticky top-0 flex border-b-[1px] bg-background px-5 py-6">
      <div className="mr-8">Reminder</div>
      <Nav />
    </header>
  );
}
