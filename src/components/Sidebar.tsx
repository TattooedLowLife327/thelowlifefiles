import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { PAGES } from "../data/pages";

type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

const soft = { type: "spring", stiffness: 240, damping: 26, mass: 0.8 };

export default function Sidebar({ open, setOpen }: Props) {
  const loc = useLocation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    if (open) document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open, setOpen]);

  useEffect(() => {
    setOpen(false);
  }, [loc.pathname, setOpen]);

  const NavLink = ({ to, label }: { to: string; label: string }) => {
    const active = loc.pathname === to;
    return (
      <Link
        to={to}
        className={`flex items-center px-3 py-2.5 rounded-xl transition-colors
          ${
            active
              ? "bg-purple-700/80 text-white shadow-lg shadow-purple-900/30"
              : "text-white/80 hover:text-white hover:bg-white/10"
          }`}
      >
        <span className="text-sm font-medium">{label}</span>
      </Link>
    );
  };

  return (
    <>
      <button
        aria-label="Open menu"
        className="lg:hidden fixed top-4 left-3 z-50 p-2 rounded-xl active:scale-95 shadow-lg opacity-85 hover:opacity-100 transition-opacity backdrop-blur-md"
        style={{
          backgroundImage: "url(/smallbuttonbackground.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onClick={() => setOpen(true)}
      >
        <Menu size={18} />
      </button>

      <aside className="hidden lg:flex fixed top-[240px] left-0 w-[240px] px-3 safe">
        <div className="w-full rounded-2xl border border-white/10 bg-white/[0.04] p-3.5 backdrop-blur-3xl shadow-2xl shadow-black/30">
          <Link
            to="/"
            className="mb-3 block rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-center text-xs font-semibold uppercase tracking-[0.3em] text-white/90 transition hover:border-white/30 hover:bg-white/20"
          >
            Thee File Cabinet
          </Link>
          <nav className="flex flex-col gap-1.5 max-h-[calc(100vh-280px)] overflow-y-auto pr-1">
            {PAGES.map((page) => (
              <NavLink key={page.id} to={`/page/${page.id}`} label={page.name} />
            ))}
          </nav>
        </div>
      </aside>

      <AnimatePresence>
        {open && (
          <motion.div
            className="lg:hidden fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />
            <motion.div
              ref={ref}
              className="absolute top-0 left-0 h-full w-[82%] max-w-[320px] p-3 safe"
              initial={{ x: -340 }}
              animate={{ x: 0 }}
              exit={{ x: -340 }}
              transition={soft}
            >
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3.5 h-full overflow-auto backdrop-blur-3xl shadow-2xl shadow-black/30">
                <div className="flex items-center justify-between mb-3">
                  <Link
                    to="/"
                    className="text-lg font-semibold tracking-[0.2em] text-white uppercase"
                    onClick={() => setOpen(false)}
                  >
                    Thee File Cabinet
                  </Link>
                  <button
                    aria-label="Close menu"
                    className="p-2 rounded-lg hover:scale-95 transition-all opacity-85 hover:opacity-100 backdrop-blur-md"
                    style={{
                      backgroundImage: "url(/smallbuttonbackground.png)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    onClick={() => setOpen(false)}
                  >
                    <X size={16} />
                  </button>
                </div>
                <nav className="flex flex-col gap-1.5">
                  {PAGES.map((page) => (
                    <NavLink key={page.id} to={`/page/${page.id}`} label={page.name} />
                  ))}
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
