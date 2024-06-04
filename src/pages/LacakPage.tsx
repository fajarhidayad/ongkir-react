import HeadingText from '@/components/HeadingText';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LacakPage() {
  return (
    <>
      <h1 className="text-red-500 font-semibold text-4xl mb-10">
        Mohon maaf layanan ini masih belum tersedia
      </h1>
      <HeadingText
        title="Lacak Pesanan Anda"
        notes="Semua layanan jasa kurir tersedia tinggal pilih jenis layanan dan masukkan resi."
      />

      <section>
        <div className="min-w-[250px] w-[400px] space-y-1 mb-3">
          <Label>Nomor Resi</Label>
          <Input type="text" placeholder="Masukkan no. resi" />
        </div>
        <Button>Lacak</Button>
      </section>
    </>
  );
}
