import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Txt } from './Txt';
import useRouter from '@/hooks/useRouter';

interface BackButtonProps {
  label?: string;
}

export default function BackButton({ label = '뒤로' }: BackButtonProps) {
  const { back } = useRouter();

  return (
    <Button
      variant="ghost"
      onClick={() => back()}
      className="flex items-center pl-0 text-foreground/40 hover:bg-transparent"
    >
      <ArrowLeft size={15} className="mr-2" />
      <Txt typography="small">{label}</Txt>
    </Button>
  );
}
