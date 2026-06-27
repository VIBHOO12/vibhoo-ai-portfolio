export default function SkillCard({ name }) {
  return (
    <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-5 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:bg-slate-800">

      <h3 className="text-lg font-semibold text-slate-200 group-hover:text-blue-400">
        {name}
      </h3>

    </div>
  );
}