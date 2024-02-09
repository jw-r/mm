import { TypographyProps } from './type';

export function TypographySmall({ children, hover, className }: TypographyProps) {
  return (
    <p className={`text-sm font-medium leading-none ${hover && 'hover:text-foreground/80'} ${className}`}>{children}</p>
  );
}
