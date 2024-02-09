import { HTMLProps, PropsWithChildren } from 'react';

export interface TypographyProps extends PropsWithChildren {
  className?: HTMLProps<HTMLElement>['className'];
  hover?: boolean;
}
