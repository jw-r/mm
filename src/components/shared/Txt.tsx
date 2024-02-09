import { cn } from '@/lib/utils';
import { HTMLProps } from 'react';

const typographyMap = {
  h1: {
    tagName: 'h1',
    className: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
  },
  h2: {
    tagName: 'h2',
    className: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
  },
  h3: {
    tagName: 'h3',
    className: 'scroll-m-20 text-2xl font-semibold tracking-tight',
  },
  h4: {
    tagName: 'h4',
    className: 'scroll-m-20 text-xl font-semibold tracking-tight',
  },
  p: {
    tagName: 'p',
    className: 'leading-7 [&:not(:first-child)]:mt-6',
  },
  blockquote: {
    tagName: 'blockquote',
    className: 'mt-6 border-l-2 pl-6 italic',
  },
  ['line-code']: {
    tagName: 'code',
    className: 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
  },
  large: {
    tagName: 'div',
    className: 'text-lg font-semibold',
  },
  small: {
    tagName: 'small',
    className: 'text-sm font-medium leading-none',
  },
} as const;

interface TxtProps {
  typography?: keyof typeof typographyMap;
  className?: HTMLProps<HTMLElement>['className'];
  children: string;
}

export function Txt({ typography = 'p', className, children, ...props }: TxtProps) {
  const Element = typographyMap[typography]['tagName'];

  return (
    <Element className={cn(typographyMap[typography]['className'], className)} {...props}>
      {children}
    </Element>
  );
}
