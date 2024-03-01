import { Check } from 'lucide-react';
import { Txt } from '../Txt';

function Benefits({
  최대_문서보유_개수,
  문서생성_개수,
  즉시오픈퀴즈,
  전송퀴즈_개수,
}: {
  최대_문서보유_개수: number;
  문서생성_개수: number;
  즉시오픈퀴즈: string;
  전송퀴즈_개수: number;
}) {
  return (
    <>
      <div className="flex flex-col space-y-3 text-foreground/70">
        <div className="flex items-center">
          <Check size={18} className="mr-2" />
          <Txt typography="small">최대 {최대_문서보유_개수}개의 문서 보유 가능</Txt>
        </div>
        <div className="flex items-center">
          <Check size={18} className="mr-2" />
          <Txt typography="small">월 {문서생성_개수}개의 문서 생성 가능</Txt>
        </div>
        <div className="flex items-center">
          <Check size={18} className="mr-2" />
          <Txt typography="small">문서 생성시 {즉시오픈퀴즈} 즉시 오픈</Txt>
        </div>
        <div className="flex items-center">
          <Check size={18} className="mr-2" />
          <Txt typography="small">매일 {전송퀴즈_개수}개의 퀴즈를 전송</Txt>
        </div>
      </div>
    </>
  );
}

export default Benefits;
