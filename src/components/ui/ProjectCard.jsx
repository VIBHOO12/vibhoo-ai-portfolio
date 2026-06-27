// export default function ProjectCard({ project }) {
//   return (
//     <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 transition duration-300 hover:scale-[1.02] hover:border-blue-500">

//       <img
//         src={project.image}
//         alt={project.title}
//         className="h-52 w-full object-cover"
//       />

//       <div className="p-6">

//         <h3 className="text-2xl font-bold">
//           {project.title}
//         </h3>

//         <p className="mt-3 text-slate-400">
//           {project.description}
//         </p>

//         <div className="mt-4 flex flex-wrap gap-2">

//           {project.tech.map((item) => (
//             <span
//               key={item}
//               className="rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-400"
//             >
//               {item}
//             </span>
//           ))}

//         </div>

//         <div className="mt-6 flex gap-4">

//           <a
//             href={project.github}
//             target="_blank"
//             rel="noreferrer"
//             className="rounded-lg bg-slate-800 px-4 py-2 hover:bg-slate-700"
//           >
//             GitHub
//           </a>

//           <a
//             href={project.live}
//             target="_blank"
//             rel="noreferrer"
//             className="rounded-lg bg-blue-600 px-4 py-2 hover:bg-blue-700"
//           >
//             Live Demo
//           </a>

//         </div>

//       </div>

//     </div>
//   );
// }
export default function ProjectCard({ project }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-700 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500">

      <img
        src={project.image}
        alt={project.title}
        className="h-60 w-full object-cover"
      />

      <div className="p-7">

        {project.featured && (

          <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm text-blue-400">

            ⭐ Featured

          </span>

        )}

        <h2 className="mt-5 text-3xl font-bold">

          {project.title}

        </h2>

        <p className="mt-2 text-blue-400">

          {project.subtitle}

        </p>

        <p className="mt-5 leading-8 text-slate-400">

          {project.description}

        </p>

        <div className="mt-6 flex flex-wrap gap-3">

          {project.tech.map((item) => (

            <span
              key={item}
              className="rounded-full bg-slate-800 px-4 py-2 text-sm"
            >

              {item}

            </span>

          ))}

        </div>

        <div className="mt-8 flex gap-4">

          <a
            href={project.github}
            className="rounded-xl bg-blue-600 px-5 py-3 font-medium hover:bg-blue-700"
          >
            GitHub
          </a>

          <a
            href={project.live}
            className="rounded-xl border border-slate-700 px-5 py-3 hover:border-blue-500"
          >
            Live Demo
          </a>

        </div>

      </div>

    </div>
  );
}