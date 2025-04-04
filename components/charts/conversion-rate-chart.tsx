"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { mockCrmData } from "@/lib/mock-data"

export function ConversionRateChart() {
  // Process data for the chart
  const industryConversion = mockCrmData.reduce(
    (acc, contact) => {
      const { industry } = contact

      if (!acc[industry]) {
        acc[industry] = {
          industry,
          total: 0,
          converted: 0,
        }
      }

      acc[industry].total++

      if (contact.result?.includes("Converted")) {
        acc[industry].converted++
      }

      return acc
    },
    {} as Record<string, { industry: string; total: number; converted: number }>,
  )

  // Calculate conversion rates
  const data = Object.values(industryConversion).map(({ industry, total, converted }) => ({
    industry,
    conversionRate: total > 0 ? (converted / total) * 100 : 0,
    total,
  }))

  return (
    <ResponsiveContainer width="100%" height={300}>
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
        <Bar dataKey="conversionRate" fill="#10b981" name="Conversion Rate (%)" />
      </BarChart>
    </ResponsiveContainer>
  )
}

