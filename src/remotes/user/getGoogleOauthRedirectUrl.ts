import { http } from '@/utils/http';
import { useQuery } from '@tanstack/react-query';

interface GetGoogleOauthRedirectUrlResponse {
  oauth_url: string;
}

const getGoogleOauthRedirectUrl = () => {
  return http.get<GetGoogleOauthRedirectUrlResponse>('/oauth/url');
};

export function useGetGoogleOauthRedirectUrl() {
  return useQuery({
    queryKey: ['getGoogleOauthRedirectUrl'],
    queryFn: () => getGoogleOauthRedirectUrl(),
  });
}
