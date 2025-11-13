import FileCabinet from "../components/FileCabinet";

export default function Home() {
  return (
    <section>
      <div className="mx-auto w-full max-w-5xl">
        <div className="relative flex w-full justify-center pb-12">
          <div className="pointer-events-none absolute bottom-full left-0 right-0 mb-4 hidden h-16 bg-gradient-to-b from-ink via-ink/90 to-transparent sm:block" />
          <FileCabinet />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-ink via-ink/90 to-transparent" />
        </div>
      </div>
    </section>
  );
}
