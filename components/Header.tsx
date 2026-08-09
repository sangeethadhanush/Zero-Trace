"use client";

import {
  Bell,
  ChevronDown,
  Search,
  ShieldCheck,
} from "lucide-react";

export default function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-white/10 bg-[#0a0f17]/90 px-5 backdrop-blur-xl lg:px-8">
      <div className="ml-12 lg:ml-0">
        <p className="text-xs text-slate-500">Security Operations Center</p>

        <h2 className="mt-1 text-lg font-semibold text-white">
          Security Overview
        </h2>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 md:flex">
          <Search size={15} className="text-slate-500" />

          <input
            type="text"
            placeholder="Search..."
            className="w-32 bg-transparent text-xs text-white outline-none placeholder:text-slate-600"
          />

          <kbd className="rounded border border-white/10 px-1.5 py-0.5 text-[9px] text-slate-600">
            /
          </kbd>
        </div>

        <button
          className="relative rounded-lg border border-white/10 bg-white/[0.03] p-2.5 text-slate-400 transition hover:text-white"
          aria-label="Notifications"
        >
          <Bell size={18} />

          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-400 ring-2 ring-[#0a0f17]" />
        </button>

        <div className="hidden h-8 w-px bg-white/10 sm:block" />

        <button className="flex items-center gap-2 rounded-lg px-1 py-1.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400/10 text-xs font-bold text-cyan-300 ring-1 ring-cyan-400/20">
            SA
          </div>

          <div className="hidden text-left sm:block">
            <p className="text-xs font-medium text-slate-200">
              Security Admin
            </p>

            <p className="text-[10px] text-slate-600">
              Administrator
            </p>
          </div>

          <ChevronDown size={14} className="hidden text-slate-500 sm:block" />
        </button>
      </div>
    </header>
  );
}