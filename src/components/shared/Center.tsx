import { cn } from '@/lib/utils';
import { HTMLProps, ReactNode } from 'react';

export function Center({
  children,
  className,
}: {
  children: ReactNode;
  className?: HTMLProps<HTMLElement>['className'];
}) {
  return <div className={cn('absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2', className)}>{children}</div>;
}
