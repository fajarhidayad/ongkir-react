import { useCallback, useEffect, useState } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { City } from '@/api/ongkir';

export default function DropdownInput({
  cities,
  label,
  placeholder,
  setCityId,
}: {
  label: string;
  placeholder: string;
  cities: City[] | undefined;
  setCityId: (id: string) => void;
}) {
  const [value, setValue] = useState('');
  const [dropdown, setDropdown] = useState(false);
  const [filteredValue, setFilteredValue] = useState<City[]>([]);

  const filterValues = useCallback(() => {
    if (cities && value.length > 0) {
      const results = cities.filter((city) =>
        city.city_name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredValue(results);
    } else {
      setFilteredValue([]);
    }
  }, [value, cities]);

  useEffect(() => {
    if (dropdown) {
      filterValues();
    }
  }, [filterValues, value, dropdown]);

  return (
    <div className="mb-5 relative">
      <Label>{label}</Label>
      <Input
        placeholder={placeholder}
        value={value}
        onFocus={() => setDropdown(true)}
        onChange={(e) => setValue(e.target.value)}
      />
      {dropdown && filteredValue.length > 0 && (
        <ul className="absolute top-14 bg-white border rounded py-3 max-h-[200px] w-[250px] overflow-y-auto space-y-2 z-50">
          {filteredValue.map((city) => (
            <li
              key={city.city_id}
              onClick={() => {
                setValue(city.city_name);
                setDropdown(false);
                setCityId(city.city_id);
              }}
              className="hover:bg-gray-100 rounded px-5 py-2 cursor-pointer"
            >
              {city.city_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
