import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage, RepositoryPage, QuizPage } from './pages';
import { Layout } from './components/Layout';
import { AuthGuard } from './components/AuthGuard';
import { Oauth } from './components/Oauth';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route element={<AuthGuard />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/repository" element={<RepositoryPage />} />
            <Route path="/quiz" element={<QuizPage />} />
          </Route>
          <Route path="/oauth" element={<Oauth />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
