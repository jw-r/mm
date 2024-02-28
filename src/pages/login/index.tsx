import { Center } from '@/components/Center';
import { Txt } from '@/components/Txt';
import { SEO } from '@/components/SEO';
import { useGetGoogleOauthRedirectUrl } from '@/remotes/user/getGoogleOauthRedirectUrl';
import GoogleLoginButton from './components/GoogleLoginButton';

export function LoginPage() {
  const { data } = useGetGoogleOauthRedirectUrl();

  const onClickGoogleLogin = () => {
    if (!data) return;

    window.location.href = data.oauth_url;
  };

  return (
    <>
      <SEO title="Login" description="로그인" image="" />
      <Center className="w-full max-w-md p-4 sm:p-0">
        <Txt typography="h2" className="mb-12 text-center">
          Pick toss
        </Txt>
        <div className="rounded-lg md:border md:p-12">
          <Txt typography="h4" className="mb-16 text-center">
            로그인
          </Txt>
          <GoogleLoginButton label="Google 계정으로 로그인" onClick={onClickGoogleLogin} />
          <Txt typography="small" className="mt-4 block text-foreground/60">
            로그인하시면 매일 질 높은 질문 리스트를 받아보실 수 있어요!
          </Txt>
        </div>
      </Center>
    </>
  );
}
