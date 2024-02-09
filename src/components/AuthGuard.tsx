import { ReactNode, useState } from 'react';
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { X } from 'lucide-react';
import { Txt } from './shared/Txt';
import signupIcon from '../assets/google.svg';
import { Button } from './ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

export function AuthGuard({ children }: { children: ReactNode }) {
  const accessToken = localStorage.getItem('pick-toss-token');
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {children}
      {accessToken == null && (
        <Dialog open={isOpen}>
          <DialogContent className="max-w-md">
            <DialogClose
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
            >
              <X className="h-4 w-4" />
            </DialogClose>
            <DialogHeader className="flex flex-col items-center">
              <DialogTitle>로그인</DialogTitle>
            </DialogHeader>
            <Txt typography="small" className="mb-12 text-center text-foreground/60">
              로그인하시면 매일 질 높은 질문 리스트를 받아보실 수 있어요!
            </Txt>
            <TooltipProvider>
              <Tooltip open>
                <TooltipTrigger asChild>
                  <Button variant="outline" className="flex w-full items-center">
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
