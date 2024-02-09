import { TypographyProps } from './type';

export function TypographyMuted({ children, hover, className }: TypographyProps) {
  return <p className={`text-sm text-muted-foreground ${hover && 'hover:inherit/100/80'} ${className}`}>{children}</p>;
}
