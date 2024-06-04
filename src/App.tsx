import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from './components/ui/toaster';
import DashboardLayout from './layouts/DashboardLayout';
import RootLayout from './layouts/RootLayout';
import DashboardPage from './pages/DashboardPage';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SimulasiPage from './pages/SimulasiPage';
import LacakPage from './pages/LacakPage';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/sign-in/*',
        element: <SignInPage />,
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: 'dashboard',
            element: <DashboardPage />,
          },
          {
            path: 'simulasi',
            element: <SimulasiPage />,
          },
          {
            path: 'lacak',
            element: <LacakPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
