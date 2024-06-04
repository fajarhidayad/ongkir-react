import {
  ComputerIcon,
  LayoutDashboardIcon,
  LogOutIcon,
  TruckIcon,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { useClerk } from '@clerk/clerk-react';

const routeList = [
  {
    label: 'Dashboard',
    icon: LayoutDashboardIcon,
    href: '/dashboard',
    color: 'text-sky-500',
  },
  {
    label: 'Simulasi Ongkir',
    icon: ComputerIcon,
    href: '/simulasi',
    color: 'text-rose-500',
  },
  {
    label: 'Lacak Pesanan',
    icon: TruckIcon,
    href: '/lacak',
    color: 'text-emerald-500',
  },
];

export default function Sidebar() {
  const location = useLocation();
  const clerk = useClerk();

  return (
    <aside className="bg-slate-800 px-3 py-4 md:w-[250px] lg:w-[300px] flex flex-col text-slate-100">
      <div className="py-2 px-4 font-bold text-xl mb-7">
        <Link to="/dashboard">OngkiReact</Link>
      </div>

      <div className="flex-1 flex flex-col">
        {routeList.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={clsx({
              'hover:bg-slate-600 rounded p-3 flex text-sm w-full mb-1': true,
              'bg-slate-600': location.pathname === item.href,
              'text-slate-400': location.pathname !== item.href,
            })}
          >
            <div className="flex items-center">
              <item.icon className={twMerge('h-5 w-5 mr-3', item.color)} />
              <span>{item.label}</span>
            </div>
          </Link>
        ))}
        <button
          onClick={() => clerk.signOut()}
          className={
            'hover:bg-slate-600 rounded p-3 flex text-sm w-full mt-auto'
          }
        >
          <div className="flex items-center text-red-400">
            <LogOutIcon className={'h-5 w-5 mr-3'} />
            <span>Keluar</span>
          </div>
        </button>
      </div>
    </aside>
  );
}
