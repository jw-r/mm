import { Link, useLocation } from 'react-router-dom';
import { Txt } from './shared/Txt';

export function Nav() {
  const { pathname } = useLocation();

  const isMainPage = pathname === '/';
  const isRepositoryPage = pathname === '/repository';
  const isQuizPage = pathname === '/quiz';

  return (
    <nav className="flex items-center gap-4">
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
    </nav>
  );
}
