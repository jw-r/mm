import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChangeEvent, ReactNode, useState } from 'react';

interface NewCategoryInputProps {
  toggleTrigger: ReactNode;
  close: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function NewCategoryInput({ toggleTrigger, onChange, close }: NewCategoryInputProps) {
  const [newCategoryInputOpened, setNewCategoryInputOpened] = useState(false);

  const handleClose = () => {
    setNewCategoryInputOpened(false);

    close();
  };

  return (
    <>
      {newCategoryInputOpened ? (
        <form onSubmit={handleClose}>
          <Input autoFocus onBlur={handleClose} onChange={onChange} className="min-w-32" />
        </form>
      ) : (
        <Button variant="ghost" onClick={() => setNewCategoryInputOpened(true)}>
          {toggleTrigger}
        </Button>
      )}
    </>
  );
}
