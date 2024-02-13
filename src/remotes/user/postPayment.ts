import { queryClient } from '@/providers/TanstackProvider';
import { http } from '@/utils/http';
import { useMutation } from '@tanstack/react-query';

interface PostPaymentRequest {
  name: string;
}

const postPayment = (requestBody: PostPaymentRequest) => {
  return http.post<PostPaymentRequest>('/payment', requestBody);
};

export function usePostPayment() {
  return useMutation({
    mutationKey: ['postPayment'],
    mutationFn: (data: PostPaymentRequest) => postPayment(data),

    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
}
