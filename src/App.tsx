import { RouterProvider } from 'react-router-dom';
import { router } from './router/routerConfig';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from './components/ui/toaster';
import { TanstackProvider } from './providers/TanstackProvider';

function App() {
  return (
    <>
      <Toaster />
      <TanstackProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </TanstackProvider>
    </>
  );
}

export default App;
