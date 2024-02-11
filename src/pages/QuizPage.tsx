import { useGetQuestionSetId } from '@/remotes/question/getQuesionSetId';
import { useTodayQuestion } from '@/remotes/question/getTodayQuestion';
import { ReactNode } from 'react';
import { useParams } from 'react-router-dom';

export function QuizPage({ children }: { children: ReactNode }) {
  return children;
}

function Private() {
  const {
    data: { questionSetId, message },
  } = useGetQuestionSetId();
  const { data } = useTodayQuestion({ questionSetId });
  console.log(data);

  if (!questionSetId) {
    switch (message) {
      case 'QUESTION_SET_NOT_READY':
      case '':
    }
  }

  return <div>QuizPage</div>;
}

function Public() {
  const { questionSetId } = useParams();
  const { data } = useTodayQuestion({ questionSetId });
  console.log(data);

  return null;
}

QuizPage.Private = Private;
QuizPage.Public = Public;
