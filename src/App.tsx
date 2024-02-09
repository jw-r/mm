import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage, RepositoryPage, QuizPage } from './pages';
import { Layout } from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/repository" element={<RepositoryPage />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
