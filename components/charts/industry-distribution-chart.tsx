"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { mockCrmData } from "@/lib/mock-data"

export function IndustryDistributionChart() {
  // Count industries
  const industryCounts = mockCrmData.reduce(
    (acc, contact) => {
      const { industry } = contact
      if (!acc[industry]) {
        acc[industry] = 0
      }
      acc[industry]++
      return acc
    },
    {} as Record<string, number>,
  )

  // Convert to array for chart
  const data = Object.entries(industryCounts).map(([name, value]) => ({
    name,
    value,
  }))

  // Custom colors
  const COLORS = ["#2c3e50", "#34495e", "#7f8c8d", "#95a5a6", "#bdc3c7"]

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}

