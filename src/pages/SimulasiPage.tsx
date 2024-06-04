import { Courier, checkCost, getCities } from '@/api/ongkir';
import DropdownInput from '@/components/DropdownInput';
import HeadingText from '@/components/HeadingText';
import Loading from '@/components/Loading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { useMutation, useQuery } from '@tanstack/react-query';
import { FormEvent, useState } from 'react';

interface Result {
  name: string;
  costs: {
    cost: {
      etd: string;
      value: number;
    }[];
    description: string;
    service: string;
  }[];
}

export default function SimulasiPage() {
  const [originId, setOriginId] = useState('');
  const [destId, setDestId] = useState('');
  const [weight, setWeight] = useState(1000);
  const [courier, setCourier] = useState<Courier>('jne');

  const [results, setResults] = useState<Result[]>([]);

  const { toast } = useToast();

  const { data: cities } = useQuery({
    queryKey: ['cities'],
    queryFn: getCities,
  });
  const costMutation = useMutation({
    mutationFn: checkCost,
    onSuccess({ data }) {
      setResults(data.rajaongkir.results);
    },
  });

  function submitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!originId || !destId || weight < 1) {
      toast({
        variant: 'destructive',
        title: 'Kesalahan',
        description: 'Semua form harus diisi',
      });
      return;
    }

    costMutation.mutate({
      destination: destId,
      origin: originId,
      weight,
      courier,
    });
  }

  return (
    <>
      <HeadingText
        title="Simulasi Ongkos Kirim"
        notes="Fitur utama pada aplikasi ini, menghitung layanan ongkos kirim pada setiap jasa kurir."
      />

      <form onSubmit={submitForm} className="min-w-[300px] w-1/2 mb-10">
        {/* <div className="mb-5 relative">
          <Label>Kota Asal</Label>
          <Input
            placeholder="kota asal pengiriman"
            value={cityInput}
            onFocus={() => setDropdown(true)}
            onChange={(e) => setCityInput(e.target.value)}
          />
          {dropdown && filteredCities.length > 0 && (
            <ul className="absolute top-14 bg-white border rounded py-3 max-h-[200px] w-[250px] overflow-y-auto space-y-2">
              {filteredCities.map((city) => (
                <li
                  key={city.city_id}
                  onClick={() => {
                    setCityInput(city.city_name);
                    setDropdown(false)
                  }}
                  className="hover:bg-gray-100 rounded px-5 py-2 cursor-pointer"
                >
                  {city.city_name}
                </li>
              ))}
            </ul>
          )}
        </div> */}
        <DropdownInput
          cities={cities}
          setCityId={setOriginId}
          label="Kota Asal"
          placeholder="kota asal pengiriman"
        />
        <DropdownInput
          cities={cities}
          setCityId={setDestId}
          label="Kota Tujuan"
          placeholder="kota tujuan pengiriman"
        />
        <div className="mb-5">
          <Label>Berat Paket(gram)</Label>
          <Input
            placeholder="berat(kg)"
            type="number"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
          />
        </div>
        <div className="mb-5">
          <Label>Pilih Layanan Kurir</Label>
          <Select
            value={courier}
            onValueChange={(value: Courier) => setCourier(value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="jne">JNE</SelectItem>
                <SelectItem value="pos">Pos Indonesia</SelectItem>
                <SelectItem value="tiki">Tiki</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Button>Hitung</Button>
      </form>

      {costMutation.isPending && <Loading />}
      {costMutation.isSuccess && (
        <section className="min-w-[300px] w-3/5 mb-10">
          <h2 className="text-3xl font-semibold text-slate-600 mb-5">Hasil</h2>
          <ul className="flex flex-col space-y-4">
            {results &&
              results[0].costs.map((item) => (
                <li
                  key={item.description}
                  className="rounded-lg bg-white shadow px-5 py-2 flex items-center"
                >
                  <h3 className="text-xl font-semibold mr-10">
                    {results[0].name}
                  </h3>
                  <div className="space-y-2">
                    <p className="font-semibold text-slate-700 text-xl">
                      {item.service}
                    </p>
                    <p className="text-slate-500">{item.description}</p>
                  </div>
                  <div className="ml-auto space-y-2">
                    <p className="font-semibold text-xl text-slate-700">
                      Rp. {item.cost[0].value}
                    </p>
                    <p className="text-slate-500">
                      {item.cost[0].etd} {courier !== 'pos' && 'hari'}
                    </p>
                  </div>
                </li>
              ))}
          </ul>
        </section>
      )}
    </>
  );
}
