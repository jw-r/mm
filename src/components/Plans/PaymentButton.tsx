import useRouter from '@/hooks/useRouter';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

function PaymentButton({ isPro, label }: { isPro: boolean; label: string }) {
  const { push } = useRouter();

  return (
    <Button
      className={cn([
        '_pro-gradient w-full cursor-pointer bg-gradient-to-tr font-extrabold text-white',
        isPro ? '_pro-gradient cursor-default' : 'hover:_pro-gradient-hover',
      ])}
      onClick={isPro ? undefined : () => push('/upgrade')}
    >
      {label}
    </Button>
  );
}

export default PaymentButton;
