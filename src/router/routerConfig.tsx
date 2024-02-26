import { AuthGuard } from '@/router/components/AuthGuard';
import { Oauth } from '@/features/auth/Oauth';
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
import { SidebarLayout } from './components/SidebarLayout';
import { Root } from './components/Root';
import { CatchQuiz } from '@/features/quiz/CatchQuiz';
import { ClipSuspense } from '@/components/ClipSuspense';

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
                element: <ClipSuspense />,
                children: [
                  {
                    element: <SidebarLayout />,
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
