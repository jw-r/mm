import { AuthGuard } from '@/router/components/AuthGuard';
import { Oauth } from '@/components/Oauth';
import {
  DocumentDetailPage,
  FeedbackPage,
  LoginPage,
  MainPage,
  PaymentPage,
  QuizPage,
  RepositoryPage,
  UserProfilePage,
  WriteDocumentPage,
} from '@/pages';
import { createBrowserRouter } from 'react-router-dom';
import { HeaderLayout } from './components/HeaderLayout';
import { CategoryLayout } from './components/CategoryLayout';
import { Root } from './components/Root';
import { CatchQuiz } from '@/components/CatchQuiz';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        element: <AuthGuard />,
        children: [
          {
            element: <HeaderLayout />,
            children: [
              {
                element: <CategoryLayout />,
                children: [
                  {
                    index: true,
                    element: <MainPage />,
                  },
                  { path: 'repository', element: <RepositoryPage /> },
                ],
              },
              {
                path: 'quiz',
                element: <QuizPage.Private />,
              },
              { path: 'documents/:id', element: <DocumentDetailPage /> },
              { path: 'write', element: <WriteDocumentPage /> },
              { path: 'profile', element: <UserProfilePage /> },
              { path: 'feedback', element: <FeedbackPage /> },
              { path: '/upgrade', element: <PaymentPage /> },
            ],
          },
        ],
      },
      {
        element: <HeaderLayout />,
        children: [
          {
            path: 'random',
            element: <CatchQuiz />,
          },
          { path: 'quiz/:questionSetId', element: <QuizPage.Public /> },
        ],
      },
      {
        path: 'oauth',
        element: <Oauth />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
]);
