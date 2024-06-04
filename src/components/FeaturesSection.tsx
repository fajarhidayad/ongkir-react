import { CircleDollarSignIcon, HourglassIcon, ZapIcon } from 'lucide-react';
import FeatureCard from './FeatureCard';

export default function FeaturesSection() {
  return (
    <section className="container max-w-5xl pb-10">
      <h1 className="text-4xl font-bold text-slate-100 text-center mb-10">
        Features
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <FeatureCard
          title="Super Cepat"
          content="Dengan teknologi terbaru yang memiliki proses sangat cepat dalam sekejap mata
            sehingga tidak ada waktu terbuang sia-sia."
        >
          <ZapIcon size="50" />
        </FeatureCard>
        <FeatureCard
          title="Murah"
          content="Layanan yang terjangkau membuat Anda tidak perlu khawatir soal tagihan yang besar."
        >
          <CircleDollarSignIcon size="50" />
        </FeatureCard>
        <FeatureCard
          title="Operasional 24/7"
          content="Nikmati keandalan tanpa batas dengan operasional kami yang berjalan 24 jam sehari tanpa henti."
        >
          <HourglassIcon size="50" />
        </FeatureCard>
      </div>
    </section>
  );
}
