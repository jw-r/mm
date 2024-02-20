import { cn } from '@/lib/utils';
import { ClassName } from '@/models/className';

export function PlanBadge({ isPro, className }: { isPro: boolean; className?: ClassName }) {
  return (
    <div
      className={cn([
        'text-md inline-block rounded-md px-3 py-1 text-center font-semibold text-white',
        isPro ? 'bg-point' : 'bg-foreground/30',
        className,
      ])}
    >
      {isPro ? 'PRO' : 'Free'}
    </div>
  );
}
