import { RouterProvider } from 'react-router-dom';
import { router } from './router/routerConfig';
import { TanstackProvider } from './providers/TanstackProvider';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from './components/ui/toaster';
import GoogleTagManager from './components/GoogleTagManager';

function App() {
  return (
    <>
      <GoogleTagManager gtmId={import.meta.env.VITE_GTM_ID} />
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
