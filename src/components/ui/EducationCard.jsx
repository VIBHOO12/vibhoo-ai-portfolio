export default function EducationCard({ item }) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6 transition hover:border-blue-500">

      <h2 className="text-2xl font-bold text-white">
        {item.degree}
      </h2>

      <h3 className="mt-2 text-blue-400">
        {item.branch}
      </h3>

      <p className="mt-2 text-slate-300">
        {item.college}
      </p>

      <p className="text-slate-400">
        {item.university}
      </p>

      <div className="mt-4 flex justify-between text-sm text-slate-400">
        <span>{item.duration}</span>
        <span>{item.location}</span>
      </div>

    </div>
  );
}