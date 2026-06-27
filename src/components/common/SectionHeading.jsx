export default function SectionHeading({
  title,
  subtitle,
}) {
  return (
    <div className="mb-14 text-center">
      <p className="text-blue-500 uppercase tracking-widest text-sm font-semibold">
        {subtitle}
      </p>

      <h2 className="mt-3 text-4xl md:text-5xl font-bold">
        {title}
      </h2>
    </div>
  );
}