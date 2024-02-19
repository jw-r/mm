import { Link, useLocation } from 'react-router-dom';
import { Txt } from './Txt';
import { Button } from './ui/button';
import { useGetUserInfo } from '@/remotes/user/getUserInfo';
import { Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import useRouter from '@/hooks/useRouter';

export function Nav() {
  const { push } = useRouter();
  const { pathname } = useLocation();
  const { data: user } = useGetUserInfo();

  const isMainPage = pathname === '/';
  const isRepositoryPage = pathname === '/repository';
  const isQuizPage = pathname.startsWith('/quiz');

  const isPro = user?.subscription.plan === 'PRO';

  if (!user) return null;
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
            {isPro ? (
              <div className="text-md inline-block rounded-md bg-[#82F0D2] px-3 py-1 font-semibold text-white">PRO</div>
            ) : (
              <div className="text-md inline-block rounded-md bg-foreground/30 px-3 py-1 font-semibold text-white">
                {user.subscription.plan.charAt(0).toUpperCase() + user.subscription.plan.slice(1).toLowerCase()}
              </div>
            )}
            <Link to="/profile" className="ml-2 hover:scale-105">
              <Button variant="outline" className="shadow-sm">
                Profile
              </Button>
            </Link>
          </div>
        </div>
      </nav>
      <nav className="flex w-full justify-end sm:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="py-3">
              <Menu />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {user.subscription.plan === 'PRO' ? (
              <DropdownMenuLabel className="bg-[#82F0D2] text-center font-bold">PRO</DropdownMenuLabel>
            ) : (
              <DropdownMenuLabel className="bg-foreground/5 text-center">free</DropdownMenuLabel>
            )}
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => push('/')}>문서</DropdownMenuItem>
            <DropdownMenuItem onClick={() => push('/repository')}>복습 창고</DropdownMenuItem>
            <DropdownMenuItem onClick={() => push('/quiz')}>오늘의 퀴즈</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => push('/profile')}>Profile</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </>
  );
}
