export default function ExperienceCard({ item }) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6 hover:border-blue-500 transition">
      <h3 className="text-2xl font-bold text-white">
        {item.role}
      </h3>

      <p className="mt-2 text-blue-400">
        {item.company}
      </p>

      <p className="mt-1 text-sm text-slate-400">
        {item.duration}
      </p>

      <p className="mt-4 text-slate-300 leading-7">
        {item.description}
      </p>
    </div>
  );
}