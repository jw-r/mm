import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage, RepositoryPage, QuizPage } from './pages';
import { Layout } from './components/Layout';
import { AuthGuard } from './components/AuthGuard';

function App() {
  return (
    <BrowserRouter>
      <AuthGuard>
        <Layout>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/repository" element={<RepositoryPage />} />
            <Route path="/quiz" element={<QuizPage />} />
          </Routes>
        </Layout>
      </AuthGuard>
    </BrowserRouter>
  );
}

export default App;
