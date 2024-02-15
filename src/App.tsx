import { RouterProvider } from 'react-router-dom';
import { router } from './router/routerConfig';
import { TanstackProvider } from './providers/TanstackProvider';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <TanstackProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </TanstackProvider>
  );
}

export default App;
