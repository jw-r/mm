import { Txt } from '@/components/shared/Txt';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useRouter from '@/hooks/useRouter';
import { usePostPayment } from '@/remotes/user/postPayment';
import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { ChangeEvent, useState } from 'react';

export function Payment() {
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
        onSuccess: () => back(),
      },
    );
  };

  return (
    <div className="flex justify-center">
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
            <Txt typography="small">계좌 번호 : 406602-04-1591528 (우리은행 이창진)</Txt>
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
          <Button onClick={sendUserName}>
            완료 <ArrowRight size={15} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
