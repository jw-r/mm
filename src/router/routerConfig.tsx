import { AuthGuard } from '@/router/components/AuthGuard';
import { Oauth } from '@/components/common/Oauth';
import { DocumentDetailPage, MainPage, QuizPage, RepositoryPage, WriteDocumentPage } from '@/pages';
import { createBrowserRouter } from 'react-router-dom';
import { HeaderLayout } from './components/HeaderLayout';
import { SidebarLayout } from './components/SidebarLayout';
import { Root } from './components/Root';
import { Suspense } from 'react';

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
                  {
                    index: true,
                    element: (
                      <Suspense fallback={<div>Loading...</div>}>
                        <MainPage />
                      </Suspense>
                    ),
                  },
                  { path: 'repository', element: <RepositoryPage /> },
                ],
              },
              { path: 'quiz', element: <QuizPage /> },
              { path: 'documents/:id', element: <DocumentDetailPage /> },
              // { path: 'write', element: <WriteDocumentPage /> },
            ],
          },
        ],
      },
      {
        path: 'oauth',
        element: <Oauth />,
      },
      { path: 'write', element: <WriteDocumentPage /> },
    ],
  },
]);
