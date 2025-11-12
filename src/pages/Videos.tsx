type VideoItem = { title: string; url: string; notes?: string };

export default function Videos() {
  const items: VideoItem[] = [
    {
      title: 'Velpo segment',
      url: 'https://www.youtube.com/embed/VIDEO_ID',
      notes: 'Watch 3:25:00 – 4:19:00; mentions of “TattooedLowLife”.'
    }
  ];

  return (
    <section className="card p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl font-semibold mb-3">Video Evidence</h2>
      <div className="grid gap-5">
        {items.map((v, i) => (
          <div key={i}>
            <h3 className="font-medium text-sm mb-2">{v.title}</h3>
            <div className="w-full aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 shadow-xl">
              <iframe
                className="w-full h-full"
                src={v.url}
                title={v.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            {v.notes && <p className="text-xs text-neutral-300 mt-2">{v.notes}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
