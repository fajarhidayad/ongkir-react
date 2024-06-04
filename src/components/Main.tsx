import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Main({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <main className={twMerge('bg-primary min-h-screen', className)}>
      {children}
    </main>
  );
}
