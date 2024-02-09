import { HTMLAttributes, memo } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: never;
  direction?: 'horizontal' | 'vertical';
  size: number;
}

export const Spacing = memo(function Spacing({ direction = 'vertical', size }: Props) {
  const style = direction === 'horizontal' ? `inline-block w-[${size}px]` : `h-[${size}px]`;

  return <div className={`flex-none ${style}`} />;
});
