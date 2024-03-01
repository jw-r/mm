import { cn } from '@/lib/utils';
import { User } from '@/models/type';
import { ReactNode } from 'react';
import { Txt } from '../Txt';
import { Check } from 'lucide-react';

interface PlanCardProps {
  plan: User['subscription']['plan'];
  benefits: {
    최대_문서보유_개수: number;
    문서생성_개수: number;
    즉시오픈퀴즈: string;
    전송퀴즈_개수: number;
  };
  footer?: ReactNode;
}

function PlanCard({ plan, benefits, footer }: PlanCardProps) {
  return (
    <div
      className={cn([
        'flex w-full items-center justify-start rounded-md p-0.5',
        plan === 'PRO' ? '_pro-gradient bg-gradient-to-tr' : 'bg-foreground/15',
      ])}
    >
      <div className="flex h-full w-full flex-col items-center space-y-2 rounded-sm bg-background p-4">
        <PlanCard.Header plan={plan} title={plan === 'PRO' ? 'PRO' : 'Free'} />
        <PlanCard.Benefits benefits={benefits} />
        {footer}
      </div>
    </div>
  );
}

function Header({ plan, title }: { plan: PlanCardProps['plan']; title: string }) {
  return (
    <Txt
      typography="h3"
      className={cn([
        'mb-2',
        plan === 'PRO' && '_pro-gradient mb-2 bg-gradient-to-tr bg-clip-text font-bold text-transparent',
      ])}
    >
      {title}
    </Txt>
  );
}

function Benefits({ benefits }: { benefits: PlanCardProps['benefits'] }) {
  const { 최대_문서보유_개수, 문서생성_개수, 즉시오픈퀴즈, 전송퀴즈_개수 } = benefits;

  return (
    <>
      <div className="flex flex-col space-y-3 text-foreground/70">
        <div className="flex items-center">
          <Check size={18} className="mr-2" />
          <Txt typography="small">최대 {최대_문서보유_개수}개의 문서 보유 가능</Txt>
        </div>
        <div className="flex items-center">
          <Check size={18} className="mr-2" />
          <Txt typography="small">월 {문서생성_개수}개의 문서 생성 가능</Txt>
        </div>
        <div className="flex items-center">
          <Check size={18} className="mr-2" />
          <Txt typography="small">문서 생성시 {즉시오픈퀴즈} 즉시 오픈</Txt>
        </div>
        <div className="flex items-center">
          <Check size={18} className="mr-2" />
          <Txt typography="small">매일 {전송퀴즈_개수}개의 퀴즈를 전송</Txt>
        </div>
      </div>
    </>
  );
}

PlanCard.Header = Header;
PlanCard.Benefits = Benefits;

export default PlanCard;
