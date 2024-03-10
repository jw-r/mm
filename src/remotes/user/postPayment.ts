import { http } from '@/utils/http';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface PostPaymentRequest {
  name: string;
}

const postPayment = (requestBody: PostPaymentRequest) => {
  return http.post<PostPaymentRequest>('/payment', requestBody);
};

export function usePostPayment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['postPayment'],
    mutationFn: (data: PostPaymentRequest) => postPayment(data),

    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
}
