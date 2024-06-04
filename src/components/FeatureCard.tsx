import { ReactNode } from 'react';

export default function FeatureCard(props: {
  children: ReactNode;
  title: string;
  content: string;
}) {
  return (
    <div className="bg-slate-900 border border-slate-700 shadow px-7 py-10 rounded-lg text-slate-200 flex flex-col items-center space-y-5 z-10">
      {props.children}
      <h2 className="font-semibold text-3xl text-center">{props.title}</h2>
      <p className="text-slate-400">{props.content}</p>
    </div>
  );
}
