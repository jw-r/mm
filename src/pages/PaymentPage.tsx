import { SEO } from '@/components/shared/SEO';
import { Txt } from '@/components/shared/Txt';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import useRouter from '@/hooks/useRouter';
import { usePostPayment } from '@/remotes/user/postPayment';
import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { ChangeEvent, useState } from 'react';

export function PaymentPage() {
  const { back } = useRouter();
  const [username, setUsername] = useState('');
  const { mutate: payment } = usePostPayment();

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const sendUserName = () => {
    if (username.replace(/\s+/g, '') === '') {
      return;
    }

    payment(
      { name: username },
      {
        onSuccess: () => {
          toast({
            title: '제출이 완료됐어요 🚀',
            description: '최대 12시간 이내로 PRO 계정으로 전환됩니다',
          });
          back();
        },
      },
    );
  };

  return (
    <div className="flex justify-center">
      <SEO title="Upgrade" description="결제 페이지" image="" />
      <div className="mt-16 flex w-full max-w-3xl flex-col items-start justify-center px-4">
        <Button
          variant="ghost"
          onClick={() => back()}
          className="flex items-center pl-0 text-foreground/40 hover:bg-transparent"
        >
          <ArrowLeft size={15} className="mr-2" />
          <Txt typography="small">뒤로</Txt>
        </Button>
        <div>
          <Txt typography="large" className="mb-3 mt-6">
            일반 결제 및 입금자 성함 입력 <span className="text-red-500">*</span>
          </Txt>
          <div className="flex flex-col space-y-2">
            <Txt typography="small">계좌 번호 : 100-244-9406366 (우리은행 이창진)</Txt>
            <Txt typography="small" className="font-semibold">
              3,900원 입금 후, 아래 입력 칸에 입금자 성함을 꼭 입력해주세요.
            </Txt>
          </div>
        </div>
        <div className="mt-3 space-y-5">
          <Input
            className="w-52 focus:ring focus:ring-offset-1 focus:ring-offset-teal-300"
            value={username}
            onChange={handleNameChange}
          />
          <div className="flex flex-col space-y-2">
            <Txt typography="small" className="text-foreground/70">
              최대 12시간 이내로 PRO 계정으로 전환됩니다
            </Txt>
            <Button onClick={sendUserName}>
              완료 <ArrowRight size={15} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
