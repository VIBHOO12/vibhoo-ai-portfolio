// export default function HeroStats() {
//   return (
//     <div className="mt-12 grid grid-cols-3 gap-5">

//       <div>

//         <h2 className="text-4xl font-bold text-blue-400">

//           10+

//         </h2>

//         <p className="text-slate-400">

//           Projects

//         </p>

//       </div>

//       <div>

//         <h2 className="text-4xl font-bold text-blue-400">

//           15+

//         </h2>

//         <p className="text-slate-400">

//           Technologies

//         </p>

//       </div>

//       <div>

//         <h2 className="text-4xl font-bold text-blue-400">

//           100%

//         </h2>

//         <p className="text-slate-400">

//           Dedication

//         </p>

//       </div>

//     </div>
//   );
// }

const stats = [
  {
    number: "10+",
    title: "Projects",
  },
  {
    number: "15+",
    title: "Technologies",
  },
  {
    number: "1+",
    title: "Years Learning",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-10 grid grid-cols-3 gap-5">

      {stats.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-slate-700 bg-white/5 p-5 text-center backdrop-blur-lg transition hover:-translate-y-1 hover:border-blue-500"
        >
          <h2 className="text-3xl font-black text-blue-400">
            {item.number}
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            {item.title}
          </p>
        </div>
      ))}

    </div>
  );
}