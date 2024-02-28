import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ReactNode } from 'react';

interface CategoryDropdownMenuProps {
  trigger: ReactNode;
  content: ReactNode;
  isTriggerVisible: boolean;
}

export function CategoryDropdownMenu({ trigger, content, isTriggerVisible: isVisible }: CategoryDropdownMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className={`absolute right-1 top-[50%] translate-y-[-50%] cursor-pointer py-2 text-foreground/60 ${!isVisible && 'invisible'}`}
        >
          {trigger}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>{content}</DropdownMenuContent>
    </DropdownMenu>
  );
}
