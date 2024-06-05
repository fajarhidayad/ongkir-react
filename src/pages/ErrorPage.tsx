import Main from '@/components/Main';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <Main className="flex flex-col items-center justify-center">
      <h1 className="font-bold text-slate-100 text-4xl mb-5">
        404 Halaman Tidak Ditemukan
      </h1>
      <Button onClick={() => navigate('/')} variant={'secondary'}>
        Kembali ke Beranda
      </Button>
    </Main>
  );
}
