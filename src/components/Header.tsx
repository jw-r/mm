import Nav from './Nav';
import Spacing from './shared/Spacing';

function Header() {
  return (
    <header className="flex border-b-[1px] px-5 py-6">
      <div>Reminder</div>
      <Spacing direction="horizontal" size={30} />
      <Nav />
    </header>
  );
}

export default Header;
