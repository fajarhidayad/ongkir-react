import { LoaderIcon } from 'lucide-react';

export default function Loading(props: { size?: number }) {
  return (
    <div className="text-t-primary flex items-center justify-center">
      <LoaderIcon className="animate-spin" size={props.size} />
    </div>
  );
}
