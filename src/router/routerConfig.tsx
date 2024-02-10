import { AuthGuard } from '@/router/components/AuthGuard';
import { Oauth } from '@/components/common/Oauth';
import { MainPage, QuizPage, RepositoryPage } from '@/pages';
import { createBrowserRouter } from 'react-router-dom';
import { HeaderLayout } from './components/HeaderLayout';
import { SidebarLayout } from './components/SidebarLayout';
import { Root } from './components/Root';

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
                element: <SidebarLayout />,
                children: [
                  { index: true, element: <MainPage /> },
                  { path: 'repository', element: <RepositoryPage /> },
                ],
              },
              { path: 'quiz', element: <QuizPage /> },
            ],
          },
        ],
      },
      {
        path: 'oauth',
        element: <Oauth />,
      },
    ],
  },
]);
