import { Center } from '@/components/shared/Center';
import { Txt } from '@/components/shared/Txt';
import { Button } from '@/components/ui/button';
import signupIcon from '../assets/google.svg';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { SEO } from '@/components/shared/SEO';

export function LoginPage() {
  const onClickGoogleLogin = () => {
    fetch(import.meta.env.DEV ? import.meta.env.VITE_API_URL_DEV : import.meta.env.VITE_API_URL_PROD + 'oauth/url')
      .then((res) => res.json())
      .then(({ oauth_url }) => (window.location.href = oauth_url));
  };

  return (
    <Center className="w-full max-w-md p-4 sm:p-0">
      <SEO title="Login" description="로그인" image="" />
      <Txt typography="h2" className="mb-12 text-center">
        Pick toss
      </Txt>
      <div className="rounded-lg md:border md:p-12">
        <div className="mb-16">
          <Txt typography="h4" className="text-center">
            로그인
          </Txt>
        </div>
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
        <div className="mt-4 text-center">
          <Txt typography="small" className="text-foreground/60">
            로그인하시면 매일 질 높은 질문 리스트를 받아보실 수 있어요!
          </Txt>
        </div>
      </div>
    </Center>
  );
}
