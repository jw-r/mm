import { RouterProvider } from 'react-router-dom';
import { router } from './router/routerConfig';
import { TanstackProvider } from './providers/TanstackProvider';
import { HelmetProvider } from 'react-helmet-async';
import ReactGA from 'react-ga';

const gaTrackingId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;
ReactGA.initialize(gaTrackingId);

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
