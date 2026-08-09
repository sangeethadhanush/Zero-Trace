import {
  Activity,
  MonitorSmartphone,
  ShieldAlert,
  Target,
} from "lucide-react";

type StatCardProps = {
  title: string;
  value: string;
  change: string;
  description: string;
  type: string;
};

const icons = {
  "Active Exams": Activity,
  "Active Threats": ShieldAlert,
  "Risk Score": Target,
  "Devices Online": MonitorSmartphone,
};

export default function StatCard({
  title,
  value,
  change,
  description,
  type,
}: StatCardProps) {
  const Icon =
    icons[title as keyof typeof icons] ?? Activity;

  const isDanger = type === "danger";
  const isSuccess = type === "success";

  return (
    <div className="group rounded-xl border border-white/10 bg-[#0d141e] p-5 transition hover:border-white/20 hover:bg-[#101923]">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-slate-500">
            {title}
          </p>

          <p className="mt-2 text-3xl font-semibold tracking-tight text-white">
            {value}
          </p>
        </div>

        <div className="rounded-lg bg-white/[0.04] p-2.5 text-slate-400 ring-1 ring-white/5">
          <Icon size={18} />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs">
        <span
          className={
            isDanger
              ? "text-red-400"
              : isSuccess
                ? "text-emerald-400"
                : "text-cyan-400"
          }
        >
          {change}
        </span>

        <span className="text-slate-600">{description}</span>
      </div>
    </div>
  );
}