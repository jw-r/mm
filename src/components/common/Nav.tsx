import { Link, useLocation } from 'react-router-dom';
import { Txt } from '../shared/Txt';
import { Button } from '../ui/button';

export function Nav() {
  const { pathname } = useLocation();

  const isMainPage = pathname === '/';
  const isRepositoryPage = pathname === '/repository';
  const isQuizPage = pathname.startsWith('/quiz');

  return (
    <>
      <nav className="hidden w-full sm:block">
        <div className="flex w-full items-center justify-between">
          <div className="space-x-4">
            <Link to="/" className="hover:scale-105">
              <Txt typography="small" className={isMainPage ? '' : 'text-foreground/30'}>
                문서
              </Txt>
            </Link>
            <Link to="/repository" className="hover:scale-105">
              <Txt typography="small" className={isRepositoryPage ? '' : 'text-foreground/30'}>
                복습 창고
              </Txt>
            </Link>
            <Link to="quiz" className="hover:scale-105">
              <Txt typography="small" className={isQuizPage ? '' : 'text-foreground/30'}>
                오늘의 퀴즈
              </Txt>
            </Link>
          </div>
          <div>
            <Txt typography="line-code">Free.</Txt>
            <Link to="/profile" className="hover:scale-105">
              <Button variant="outline" className="shadow-sm">
                Profile
              </Button>
            </Link>
          </div>
        </div>
      </nav>
      <nav className="flex w-full justify-end sm:hidden">Menu</nav>
    </>
  );
}
