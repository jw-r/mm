import { TypographyProps } from './type';

export function TypographyH4({ children, className }: TypographyProps) {
  return <h4 className={`scroll-m-20 text-xl font-semibold tracking-tight ${className}`}>{children}</h4>;
}
