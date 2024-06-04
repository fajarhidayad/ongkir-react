import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import DashboardPage from './pages/DashboardPage';
import RootLayout from './layouts/RootLayout';
import DashboardLayout from './layouts/DashboardLayout';
import SimulasiPage from './pages/SimulasiPage';
import LacakPage from './pages/LacakPage';

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
  return <RouterProvider router={router} />;
}

export default App;
