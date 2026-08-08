export function SectionTitle({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="space-y-2">
      <p className="font-mono text-sm text-accent">{number}</p>
      <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
        {title}
      </h1>
    </div>
  );
}
