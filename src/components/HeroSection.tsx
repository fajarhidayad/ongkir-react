import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="py-36 h-[680px] relative flex flex-col justify-center">
      <div className="hidden md:block bg-violet-400/50 w-[300px] h-[300px] absolute blur-[100px] rounded-full top-12 left-52 "></div>
      <div className="flex flex-col justify-center items-center space-y-5 z-10 text-center">
        <div className="text-4xl lg:text-6xl font-bold text-slate-100 leading-[1.5]">
          <h1>Website Ongkir Terbaik Dengan</h1>
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-500 pb-1">
            <h1>Dukungan Penuh</h1>
          </div>
        </div>
        <p className="text-slate-400 text-xl">
          Cek ongkir dari berbagai jenis layanan dan pengantaran lebih mudah.
        </p>
        <div className="flex space-x-5">
          <Link
            to={'/dashboard'}
            className="rounded-lg px-10 py-3 font-semibold shadow text-lg bg-gradient-to-r from-violet-600 to-pink-500 text-slate-100"
          >
            Mulai Sekarang
          </Link>
        </div>
      </div>
      <div className="bg-pink-400/50 w-[300px] h-[300px] absolute blur-[100px] rounded-full -bottom-14 right-10"></div>
    </section>
  );
}
