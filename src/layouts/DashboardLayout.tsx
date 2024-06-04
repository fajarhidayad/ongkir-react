import { SignedIn, UserButton, useAuth } from '@clerk/clerk-react';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import Sidebar from '../components/Sidebar';
import { MenuIcon } from 'lucide-react';

export default function DashboardLayout() {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate('/sign-in');
    }
  }, [isLoaded, userId, navigate]);

  if (!isLoaded)
    return (
      <div className="min-h-screen flex justify-center">
        <Loading size={30} />
      </div>
    );

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 bg-gray-50">
        <div className="flex items-center p-4 shadow">
          <button className="md:hidden rounded-full p-2 active:bg-slate-200">
            <MenuIcon />
          </button>
          <div className="ml-auto flex">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>

        <div className="py-5 px-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
