import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  ShieldAlert,
} from "lucide-react";

import { securityEvents } from "@/data/mockData";

type Status = "Blocked" | "Review" | "Allowed";

type Severity = "Critical" | "High" | "Low";

function SeverityIcon({ severity }: { severity: Severity }) {
  if (severity === "Critical") {
    return <ShieldAlert size={16} className="text-red-400" />;
  }

  if (severity === "High") {
    return <AlertTriangle size={16} className="text-orange-400" />;
  }

  return <CheckCircle2 size={16} className="text-emerald-400" />;
}

function StatusBadge({ status }: { status: Status }) {
  const styles: Record<Status, string> = {
    Blocked: "bg-red-400/10 text-red-400 ring-red-400/20",
    Review: "bg-orange-400/10 text-orange-400 ring-orange-400/20",
    Allowed: "bg-emerald-400/10 text-emerald-400 ring-emerald-400/20",
  };

  return (
    <span
      className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ring-1 ${styles[status]}`}
    >
      {status}
    </span>
  );
}

export default function ActivityTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[700px]">
        <thead>
          <tr className="border-b border-white/10 text-left">
            <th className="pb-3 text-[10px] font-semibold uppercase tracking-wider text-slate-600">
              Event
            </th>

            <th className="pb-3 text-[10px] font-semibold uppercase tracking-wider text-slate-600">
              User
            </th>

            <th className="pb-3 text-[10px] font-semibold uppercase tracking-wider text-slate-600">
              Device
            </th>

            <th className="pb-3 text-[10px] font-semibold uppercase tracking-wider text-slate-600">
              Time
            </th>

            <th className="pb-3 text-[10px] font-semibold uppercase tracking-wider text-slate-600">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {securityEvents.map((event) => (
            <tr
              key={event.id}
              className="border-b border-white/[0.05] last:border-0"
            >
              <td className="py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.03]">
                    <SeverityIcon
                      severity={event.severity as Severity}
                    />
                  </div>

                  <span className="text-xs font-medium text-slate-300">
                    {event.event}
                  </span>
                </div>
              </td>

              <td className="py-4 text-xs text-slate-500">
                {event.user}
              </td>

              <td className="py-4 font-mono text-[10px] text-slate-500">
                {event.device}
              </td>

              <td className="py-4">
                <div className="flex items-center gap-1.5 text-xs text-slate-600">
                  <Clock3 size={12} />
                  {event.time}
                </div>
              </td>

              <td className="py-4">
                <StatusBadge
                  status={event.status as Status}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}