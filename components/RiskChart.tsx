"use client";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { riskData } from "@/data/mockData";

export default function RiskChart() {
  return (
    <div className="h-[320px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={riskData}
          margin={{
            top: 10,
            right: 10,
            left: -20,
            bottom: 0,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(148,163,184,0.08)"
          />

          <XAxis
            dataKey="day"
            tick={{
              fill: "#64748b",
              fontSize: 11,
            }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            domain={[0, 100]}
            tick={{
              fill: "#64748b",
              fontSize: 11,
            }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#0b1119",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "8px",
            }}
          />

          <Legend />

          <Line
            type="monotone"
            dataKey="risk"
            name="Risk Score"
            stroke="#22d3ee"
            strokeWidth={2}
            dot={false}
          />

          <Line
            type="monotone"
            dataKey="blocked"
            name="Blocked Attempts"
            stroke="#f87171"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}