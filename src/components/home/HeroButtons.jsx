// import { ArrowRight, Download, Bot } from "lucide-react";

// export default function HeroButtons() {
//   return (
//     <div className="mt-10 flex flex-wrap gap-4">

//       <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700">

//         Explore My Work

//         <ArrowRight size={18} />

//       </button>

//       <button className="flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 transition hover:border-blue-500">

//         <Download size={18} />

//         Resume

//       </button>

//       <button className="flex items-center gap-2 rounded-xl bg-slate-800 px-6 py-3 transition hover:bg-slate-700">

//         <Bot size={18} />

//         Ask AI

//       </button>

//     </div>
//   );
// }

import { ArrowRight, Download } from "lucide-react";

export default function HeroButtons() {

  return (

    <div className="mt-10 flex flex-wrap gap-5">

      <button className="flex items-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-700">

        Explore Projects

        <ArrowRight size={18}/>

      </button>

      <button className="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-7 py-4 hover:border-blue-500">

        <Download size={18}/>

        Resume

      </button>

    </div>

  );

}