import FileCabinetPreview from "../components/FileCabinetPreview";

export default function CabinetPreview() {
  return (
    <div className="min-h-screen bg-ink text-white">
      {/* Hero Banner */}
      <section className="px-4 pt-4">
        <div className="relative mx-auto max-w-5xl">
          <div className="flex h-[140px] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-lg sm:h-[200px] md:h-[240px]">
            <img
              src="/Banner.png"
              alt="The LowLife Files"
              className="h-full w-full object-cover"
            />
          </div>
          {/* subtle divider */}
          <div className="mt-3 h-px w-full bg-white/10"></div>
        </div>
      </section>

      {/* Main Content */}
      <main className="px-4 pt-6 pb-10">
        <div className="mx-auto max-w-5xl">
          <div className="relative flex w-full justify-center pb-12">
            <FileCabinetPreview />
          </div>
        </div>
      </main>
    </div>
  );
}
