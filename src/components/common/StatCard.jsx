export default function StatCard({ number, text }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-6 py-5 backdrop-blur-md">
      <h2 className="text-3xl font-bold text-blue-400">
        {number}
      </h2>

      <p className="mt-2 text-slate-400">
        {text}
      </p>
    </div>
  );
}