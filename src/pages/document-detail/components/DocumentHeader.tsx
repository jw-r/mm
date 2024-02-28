import { Txt } from '@/components/Txt';
import { formatDate } from '@/utils/formatDate';

interface DocumentHeader {
  title: string;
  categoryName: string;
  createdAt: string;
}

export default function DocumentHeader({ title, categoryName, createdAt }: DocumentHeader) {
  return (
    <>
      <Txt typography="h2" className="text-center">
        {title}
      </Txt>
      <div className="mt-2 flex w-full flex-col items-end">
        <Txt typography="large">{categoryName}</Txt>
        <Txt typography="small" className="text-foreground/40">
          {formatDate(createdAt)}
        </Txt>
      </div>
    </>
  );
}
