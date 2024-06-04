export default function HeadingText(props: { title: string; notes: string }) {
  return (
    <div className="mb-5">
      <h1 className="font-bold text-3xl text-slate-800">{props.title}</h1>
      <p className="text-slate-500">{props.notes}</p>
    </div>
  );
}
