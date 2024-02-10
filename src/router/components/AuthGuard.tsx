import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../../components/ui/dialog';
import { Txt } from '../../components/shared/Txt';
import signupIcon from '../../assets/google.svg';
import { Button } from '../../components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../components/ui/tooltip';
import { useUserStore } from '@/stores/userStore';
import { Outlet } from 'react-router-dom';

export function AuthGuard() {
  const { token } = useUserStore();

  const onClickGoogleLogin = () => {
    fetch(import.meta.env.VITE_API_URL_DEV + 'oauth/url')
      .then((res) => res.json())
      .then(({ oauth_url }) => (window.location.href = oauth_url));
  };

  return (
    <>
      <Outlet />
      {token == null && (
        <Dialog open={true}>
          <DialogContent className="max-w-md">
            <DialogHeader className="flex flex-col items-center">
              <DialogTitle>로그인</DialogTitle>
            </DialogHeader>
            <Txt typography="small" className="mb-12 text-center text-foreground/60">
              로그인하시면 매일 질 높은 질문 리스트를 받아보실 수 있어요!
            </Txt>
            <TooltipProvider>
              <Tooltip open>
                <TooltipTrigger asChild>
                  <Button onClick={onClickGoogleLogin} variant="outline" className="flex w-full items-center">
                    <img src={signupIcon} alt="구글" className="mr-4" />
                    <Txt typography="small">Google 계정으로 로그인</Txt>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>🚀 3초만에 로그인하기</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
