export default function BackgroundGrid() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* Grid */}

      <div
        className="
        absolute inset-0
        bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),
        linear-gradient(to_bottom,#1e293b_1px,transparent_1px)]
        bg-[size:50px_50px]
        opacity-20
        "
      />

      {/* Blue Glow */}

      <div className="absolute left-20 top-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[150px]" />

      {/* Purple Glow */}

      <div className="absolute bottom-10 right-20 h-96 w-96 rounded-full bg-violet-600/20 blur-[150px]" />

    </div>
  );
}