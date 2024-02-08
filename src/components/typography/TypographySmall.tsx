import { ReactNode } from 'react';

export function TypographySmall({ children }: { children: ReactNode }) {
  return <p className="text-sm font-medium leading-none">{children}</p>;
}
