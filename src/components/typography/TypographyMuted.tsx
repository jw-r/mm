import { PropsWithChildren } from 'react';

interface TextProps extends PropsWithChildren {
  hover: boolean;
}

export function TypographyMuted({ children, hover }: TextProps) {
  return <p className={`text-sm text-muted-foreground ${hover && 'hover:text-foreground/80'}`}>{children}</p>;
}
