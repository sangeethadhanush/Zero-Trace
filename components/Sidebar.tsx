"use client";

import { useState } from "react";
import {
  Activity,
  AlertTriangle,
  FileText,
  LayoutDashboard,
  Menu,
  MonitorSmartphone,
  ScrollText,
  Shield,
  ShieldAlert,
  Siren,
  Users,
  X,
} from "lucide-react";

const navigation = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    active: true,
  },
  {
    name: "Paper Vault",
    icon: FileText,
  },
  {
    name: "Users",
    icon: Users,
  },
  {
    name: "Devices",
    icon: MonitorSmartphone,
  },
  {
    name: "Threats",
    icon: ShieldAlert,
    badge: "3",
  },
  {
    name: "Incidents",
    icon: Siren,
  },
  {
    name: "Audit Logs",
    icon: ScrollText,
  },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed left-4 top-4 z-50 rounded-lg border border-white/10 bg-[#0b1018] p-2 text-slate-300 lg:hidden"
        aria-label="Open navigation"
      >
        <Menu size={20} />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-white/10 bg-[#080d14] transition-transform duration-200 lg:static lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 ring-1 ring-cyan-400/20">
              <Shield className="text-cyan-400" size={21} />
            </div>

            <div>
              <h1 className="text-lg font-bold tracking-wide text-white">
                Zero<span className="text-cyan-400">Trace</span>
              </h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                Security Platform
              </p>
            </div>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="text-slate-500 hover:text-white lg:hidden"
            aria-label="Close navigation"
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-4 pt-6">
          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
            Security Operations
          </p>

          <nav className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.name}
                  className={`group flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm transition ${
                    item.active
                      ? "bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/10"
                      : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Icon
                      size={18}
                      className={
                        item.active
                          ? "text-cyan-400"
                          : "text-slate-500 group-hover:text-slate-300"
                      }
                    />

                    {item.name}
                  </span>

                  {item.badge && (
                    <span className="rounded-full bg-red-500/10 px-2 py-0.5 text-[10px] font-semibold text-red-400 ring-1 ring-red-500/20">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto p-4">
          <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
            <div className="mb-3 flex items-center gap-2">
              <Activity size={15} className="text-emerald-400" />

              <span className="text-xs font-medium text-slate-300">
                System Status
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

              <span className="text-xs text-slate-400">
                All systems operational
              </span>
            </div>

            <div className="mt-3 text-[10px] text-slate-600">
              Last checked 12 seconds ago
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/10 text-xs font-semibold text-cyan-300 ring-1 ring-cyan-400/20">
              SA
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-slate-200">
                Security Admin
              </p>
              <p className="truncate text-xs text-slate-600">
                Administrator
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}