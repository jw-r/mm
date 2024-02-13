import { http } from '@/utils/http';
import { useMutation } from '@tanstack/react-query';

interface PostFeedbackRequest {
  content: string;
}

const postFeedback = (requestBody: PostFeedbackRequest) => {
  return http.post<PostFeedbackRequest>('/feedback', requestBody);
};

export function usePostFeedback() {
  return useMutation({
    mutationKey: ['postFeedback'],
    mutationFn: (data: PostFeedbackRequest) => postFeedback(data),
  });
}
