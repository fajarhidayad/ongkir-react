import HeadingText from '@/components/HeadingText';
import { ArrowRightIcon, ComputerIcon, TruckIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

const cardLinks = [
  {
    href: '/simulasi',
    title: 'Simulasi Ongkir',
    icon: ComputerIcon,
    color: 'text-rose-500',
    bgColor: 'bg-rose-100',
  },
  {
    href: '/lacak',
    title: 'Lacak Pesanan',
    icon: TruckIcon,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-100',
  },
];

export default function DashboardPage() {
  return (
    <>
      <HeadingText
        title="Dashboard"
        notes="Selamat datang di Dashboard anda, jelajah semua fitur yang kami tawarkan
        saat ini."
      />

      <section className="grid grid-cols-2 gap-x-10">
        {cardLinks.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="rounded-xl border shadow p-5 flex items-center hover:shadow-lg transition-shadow duration-200"
          >
            <div
              className={twMerge(
                'rounded-lg p-2 mr-5',
                item.bgColor,
                item.color
              )}
            >
              <item.icon size={40} />
            </div>
            <h2 className="font-semibold text-xl text-slate-700">
              {item.title}
            </h2>
            <div className="ml-auto">
              <ArrowRightIcon size={30} />
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
