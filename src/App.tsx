import { RouterProvider } from 'react-router-dom';
import { router } from './router/routerConfig';
import { TanstackProvider } from './providers/TanstackProvider';

// function App() {
//   return (
//     <BrowserRouter>
//       <Layout>
//         <Routes>
//           <Route element={<AuthGuard />}>
//             <Route path="/" element={<MainPage />} />
//             <Route path="/repository" element={<RepositoryPage />} />
//             <Route path="/quiz" element={<QuizPage />} />
//           </Route>
//           <Route path="/oauth" element={<Oauth />} />
//         </Routes>
//       </Layout>
//     </BrowserRouter>
//   );
// }

function App() {
  return (
    <TanstackProvider>
      <RouterProvider router={router} />
    </TanstackProvider>
  );
}

export default App;
