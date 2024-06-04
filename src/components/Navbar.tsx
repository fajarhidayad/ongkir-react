import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="py-5 fixed w-full top-0 z-20 backdrop-blur-lg bg-primary/10">
      <div className="flex justify-between container items-center">
        <Link to="/" className="font-bold text-xl text-slate-100">
          OngkiReact
        </Link>

        <button
          onClick={() => navigate('/sign-in')}
          className="border bg-slate-100 rounded-lg px-5 py-2 text-primary"
        >
          Masuk
        </button>
      </div>
    </nav>
  );
}
