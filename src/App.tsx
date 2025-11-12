import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import PageDetail from './pages/PageDetail';
import HomeExtras from './pages/HomeExtras';
import Timeline from './pages/Timeline';
import Videos from './pages/Videos';
import Screenshots from './pages/Screenshots';
import Analysis from './pages/Analysis';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Contact from './pages/Contact';
import Evidence from './pages/Evidence';

const DISCLAIMER =
  "Disclaimer: The quality - or lack there of - of the display images used below are not a direct creation of TattooedLowLife. She would never put something that low quality out into the world.. but then again, the image quality is a direct representation of the quality of tournaments they put on.";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-ink text-white">
      {/* Hero Banner - Only on Home Page */}
      <Routes>
        <Route path="/" element={
          <section className="safe px-4 pt-4 lg:pl-[260px]">
            <div className="relative mx-auto max-w-5xl lg:mx-0 lg:max-w-none lg:w-full">
              <div className="flex h-[140px] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-lg sm:h-[200px] md:h-[240px] lg:h-[260px] lg:rounded-none lg:shadow-none lg:border-0 lg:bg-transparent lg:overflow-hidden w-full">
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
        } />
      </Routes>

      {/* Sidebar */}
      <Sidebar open={open} setOpen={setOpen} />

      {/* Main Content (mobile-first) */}
      <main className="safe px-4 pt-6 pb-10 lg:pl-[260px]">
        <div className="mx-auto max-w-5xl grid gap-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/screenshots" element={<Screenshots />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/home-extras" element={<HomeExtras />} />
            <Route path="/page/:pageId" element={<PageDetail />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/evidence-policy" element={<Evidence />} />
          </Routes>
        </div>
      </main>

      <footer className="safe border-t border-white/10 px-4 py-6 text-xs sm:text-sm text-neutral-400 lg:pl-[260px]">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-4 text-purple-200">
            <Link className="hover:text-white transition" to="/terms">Terms</Link>
            <span aria-hidden="true">|</span>
            <Link className="hover:text-white transition" to="/privacy">Privacy</Link>
            <span aria-hidden="true">|</span>
            <Link className="hover:text-white transition" to="/contact">Contact</Link>
            <span aria-hidden="true">|</span>
            <Link className="hover:text-white transition" to="/evidence-policy">Evidence Policy</Link>
          </div>
          <p className="text-neutral-500">© {new Date().getFullYear()} TattooedLowLife™</p>
        </div>
      </footer>
    </div>
  );
}

