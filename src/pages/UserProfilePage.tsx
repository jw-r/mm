import { Txt } from '@/components/shared/Txt';
import { Input } from '@/components/ui/input';

export function UserProfilePage() {
  return (
    <div>
      <div>
        <Txt typography="large">일반 결제 및 입금자 성함 입력*</Txt>
        <Txt typography="small">계좌 번호 : 301-0300-0860-61 (농협 김성우)</Txt>
        <Input />
      </div>
    </div>
  );
}
