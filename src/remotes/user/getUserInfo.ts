import { User } from '@/models/type';
import { http } from '@/utils/http';
import { useQuery } from '@tanstack/react-query';

export type GetUserInfoResponse = User;

const getUserInfo = () => {
  return http.get<GetUserInfoResponse>(`/members/info`);
};

export function useGetUserInfo() {
  return useQuery({
    queryKey: ['getUserInfo'],
    queryFn: () => getUserInfo(),

    gcTime: 3600 * 1000,
    staleTime: 3600 * 1000,
  });
}
