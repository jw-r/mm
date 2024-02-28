import { Txt } from '@/components/Txt';
import { Button } from '@/components/ui/button';
import signupIcon from '@/assets/google.svg';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface GoogleLoginButton {
  onClick: () => void;
  label?: string;
}

export default function GoogleLoginButton({ onClick, label = '로그인' }: GoogleLoginButton) {
  return (
    <TooltipProvider>
      <Tooltip open>
        <TooltipTrigger asChild>
          <Button onClick={onClick} variant="outline" className="flex w-full items-center">
            <img src={signupIcon} alt="구글" className="mr-4" />
            <Txt typography="small">{label}</Txt>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>🚀 3초만에 로그인하기</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
