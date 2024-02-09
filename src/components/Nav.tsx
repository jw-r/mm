import { Link, useLocation } from 'react-router-dom';
import { TypographySmall } from './typography/TypographySmall';
import { TypographyMuted } from './typography/TypographyMuted';

export function Nav() {
  const { pathname } = useLocation();

  const isMainPage = pathname === '/';
  const isRepositoryPage = pathname === '/repository';
  const isQuizPage = pathname === '/quiz';

  return (
    <nav className="flex items-center gap-4">
      <Link to="/">
        {isMainPage ? <TypographySmall hover>문서</TypographySmall> : <TypographyMuted hover>문서</TypographyMuted>}
      </Link>
      <Link to="/repository">
        {isRepositoryPage ? (
          <TypographySmall hover>복습 창고</TypographySmall>
        ) : (
          <TypographyMuted hover>복습 창고</TypographyMuted>
        )}
      </Link>
      <Link to="quiz">
        {isQuizPage ? (
          <TypographySmall hover>오늘의 퀴즈</TypographySmall>
        ) : (
          <TypographyMuted hover>오늘의 퀴즈</TypographyMuted>
        )}
      </Link>
    </nav>
  );
}
