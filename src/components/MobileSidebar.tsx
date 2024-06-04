import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

export default function MobileSidebar(props: { children: ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger asChild>{props.children}</SheetTrigger>
      <SheetContent side={'left'} className="bg-slate-800">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}
