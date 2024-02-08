import { PropsWithChildren } from 'react';

interface TextProps extends PropsWithChildren {
  hover: boolean;
}

export function TypographySmall({ children, hover }: TextProps) {
  return <p className={`text-sm font-medium leading-none ${hover && 'hover:text-foreground/80'}`}>{children}</p>;
}
