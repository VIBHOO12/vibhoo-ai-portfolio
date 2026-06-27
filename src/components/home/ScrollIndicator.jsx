// import { ChevronDown } from "lucide-react";

// export default function ScrollIndicator() {
//   return (
//     <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">

//       <ChevronDown size={36} />

//     </div>
//   );
// }
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">

      <ChevronDown
        size={36}
        className="text-slate-400"
      />

      <p className="mt-2 text-xs tracking-[0.3em] uppercase text-slate-500">

        Scroll

      </p>

    </div>
  );
}