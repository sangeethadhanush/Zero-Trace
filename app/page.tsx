import {
  Activity,
  ArrowUpRight,
  CheckCircle2,
  LockKeyhole,
  Server,
  ShieldCheck,
  Wifi,
} from "lucide-react";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import StatCard from "@/components/StatCard";
import RiskChart from "@/components/RiskChart";
import ActivityTable from "@/components/ActivityTable";

import { securityStats, systemStatus } from "@/data/mockData";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070b11] text-slate-200">
      <div className="flex min-h-screen">
        <Sidebar />

        <div className="min-w-0 flex-1">
          <Header />

          <main className="p-5 lg:p-8">
            {/* Page heading */}
            <section className="mb-8">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-400">
                      Live Monitoring
                    </span>
                  </div>

                  <h1 className="text-2xl font-semibold tracking-tight text-white lg:text-3xl">
                    Examination Security Overview
                  </h1>

                  <p className="mt-2 max-w-2xl text-sm text-slate-500">
                    Monitor examination activity, threats, devices and
                    security events across the ZeroTrace environment.
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.025] px-3 py-2">
                  <Activity size={14} className="text-cyan-400" />

                  <span className="text-xs text-slate-400">
                    Monitoring active
                  </span>

                  <span className="ml-1 h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                </div>
              </div>
            </section>

            {/* Statistics */}
            <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {securityStats.map((stat) => (
                <StatCard
                  key={stat.title}
                  title={stat.title}
                  value={stat.value}
                  change={stat.change}
                  description={stat.description}
                  type={stat.type}
                />
              ))}
            </section>

            {/* Chart + security summary */}
            <section className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_330px]">
              <div className="rounded-xl border border-white/10 bg-[#0d141e]">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div>
                    <h2 className="text-sm font-semibold text-white">
                      Security Activity
                    </h2>

                    <p className="mt-1 text-[11px] text-slate-600">
                      Risk score and blocked attempts over the last 7 days
                    </p>
                  </div>

                  <button className="flex items-center gap-1 text-[11px] text-cyan-400 hover:text-cyan-300">
                    View report
                    <ArrowUpRight size={13} />
                  </button>
                </div>

                <div className="p-5">
                  <RiskChart />
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#0d141e]">
                <div className="border-b border-white/10 px-5 py-4">
                  <h2 className="text-sm font-semibold text-white">
                    Security Controls
                  </h2>

                  <p className="mt-1 text-[11px] text-slate-600">
                    Current protection status
                  </p>
                </div>

                <div className="space-y-4 p-5">
                  <div className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-cyan-400/10 p-2">
                        <LockKeyhole
                          size={16}
                          className="text-cyan-400"
                        />
                      </div>

                      <div>
                        <p className="text-xs font-medium text-slate-300">
                          Access Control
                        </p>

                        <p className="mt-0.5 text-[10px] text-slate-600">
                          Identity verification
                        </p>
                      </div>
                    </div>

                    <CheckCircle2
                      size={16}
                      className="text-emerald-400"
                    />
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-cyan-400/10 p-2">
                        <ShieldCheck
                          size={16}
                          className="text-cyan-400"
                        />
                      </div>

                      <div>
                        <p className="text-xs font-medium text-slate-300">
                          Threat Detection
                        </p>

                        <p className="mt-0.5 text-[10px] text-slate-600">
                          Real-time monitoring
                        </p>
                      </div>
                    </div>

                    <CheckCircle2
                      size={16}
                      className="text-emerald-400"
                    />
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-cyan-400/10 p-2">
                        <Server
                          size={16}
                          className="text-cyan-400"
                        />
                      </div>

                      <div>
                        <p className="text-xs font-medium text-slate-300">
                          Audit Logging
                        </p>

                        <p className="mt-0.5 text-[10px] text-slate-600">
                          Event recording
                        </p>
                      </div>
                    </div>

                    <CheckCircle2
                      size={16}
                      className="text-emerald-400"
                    />
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-cyan-400/10 p-2">
                        <Wifi
                          size={16}
                          className="text-cyan-400"
                        />
                      </div>

                      <div>
                        <p className="text-xs font-medium text-slate-300">
                          Network Monitoring
                        </p>

                        <p className="mt-0.5 text-[10px] text-slate-600">
                          Traffic analysis
                        </p>
                      </div>
                    </div>

                    <CheckCircle2
                      size={16}
                      className="text-emerald-400"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Recent events */}
            <section className="mt-6 rounded-xl border border-white/10 bg-[#0d141e]">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div>
                  <h2 className="text-sm font-semibold text-white">
                    Recent Security Events
                  </h2>

                  <p className="mt-1 text-[11px] text-slate-600">
                    Latest events detected by ZeroTrace
                  </p>
                </div>

                <button className="text-[11px] text-cyan-400 hover:text-cyan-300">
                  View all events
                </button>
              </div>

              <div className="p-5">
                <ActivityTable />
              </div>
            </section>

            {/* System status */}
            <section className="mt-6">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <h2 className="text-sm font-semibold text-white">
                    Infrastructure Status
                  </h2>

                  <p className="mt-1 text-[11px] text-slate-600">
                    ZeroTrace core services
                  </p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {systemStatus.map((service) => (
                  <div
                    key={service.name}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-[#0d141e] p-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />

                      <div>
                        <p className="text-xs font-medium text-slate-300">
                          {service.name}
                        </p>

                        <p className="mt-1 text-[10px] text-slate-600">
                          {service.uptime} uptime
                        </p>
                      </div>
                    </div>

                    <span className="text-[10px] font-medium text-emerald-400">
                      Online
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <footer className="mt-10 border-t border-white/[0.06] pt-5 text-center text-[10px] text-slate-700">
              ZeroTrace Security Platform • Development Environment
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}