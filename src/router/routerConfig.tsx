import { AuthGuard } from '@/router/components/AuthGuard';
import { Oauth } from '@/components/common/Oauth';
import { DocumentDetailPage, MainPage, QuizPage, RepositoryPage, WriteDocumentPage } from '@/pages';
import { createBrowserRouter } from 'react-router-dom';
import { HeaderLayout } from './components/HeaderLayout';
import { SidebarLayout } from './components/SidebarLayout';
import { Root } from './components/Root';
import { CatchEmail } from '@/components/common/CatchEmail';
import { ClipSuspense } from '@/components/common/ClipSuspense';

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
            element: <CatchEmail />,
          },
          { path: 'quiz/:questionSetId', element: <QuizPage.Public /> },
        ],
      },
      {
        path: 'oauth',
        element: <Oauth />,
      },
    ],
  },
]);
