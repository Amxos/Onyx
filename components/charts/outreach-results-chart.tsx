"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { mockCrmData } from "@/lib/mock-data"

export function OutreachResultsChart() {
  // Process data for the chart
  const industryResults = mockCrmData.reduce(
    (acc, contact) => {
      const { industry, result } = contact

      if (!acc[industry]) {
        acc[industry] = {
          industry,
          converted: 0,
          pending: 0,
          rejected: 0,
        }
      }

      if (result?.includes("Converted")) {
        acc[industry].converted++
      } else if (result?.includes("Rejected")) {
        acc[industry].rejected++
      } else {
        acc[industry].pending++
      }

      return acc
    },
    {} as Record<string, { industry: string; converted: number; pending: number; rejected: number }>,
  )

  const data = Object.values(industryResults)

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="industry" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="converted" stackId="a" fill="#10b981" />
        <Bar dataKey="pending" stackId="a" fill="#6366f1" />
        <Bar dataKey="rejected" stackId="a" fill="#ef4444" />
      </BarChart>
    </ResponsiveContainer>
  )
}

