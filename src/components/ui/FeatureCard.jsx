export default function FeatureCard({ title }) {
  return (
    <div className="rounded-xl border border-slate-700 bg-white/5 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500">
      <div className="flex items-center gap-3">
        <span className="text-blue-400 text-xl">✓</span>
        <span className="font-medium text-white">{title}</span>
      </div>
    </div>
  );
}