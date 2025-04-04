"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { mockCrmData } from "@/lib/mock-data"

export function OutreachTimelineChart() {
  // Process data for the chart - group by date
  const timelineData = mockCrmData.reduce(
    (acc, contact) => {
      const date = contact.dateReachedOut

      if (!acc[date]) {
        acc[date] = {
          date,
          outreach: 0,
          responses: 0,
          followUps: 0,
        }
      }

      acc[date].outreach++

      if (contact.callOverview && !contact.callOverview.includes("left a message")) {
        acc[date].responses++
      }

      if (contact.dateFollowedUp) {
        const followUpDate = contact.dateFollowedUp
        if (!acc[followUpDate]) {
          acc[followUpDate] = {
            date: followUpDate,
            outreach: 0,
            responses: 0,
            followUps: 0,
          }
        }
        acc[followUpDate].followUps++
      }

      return acc
    },
    {} as Record<string, { date: string; outreach: number; responses: number; followUps: number }>,
  )

  // Convert to array and sort by date
  const data = Object.values(timelineData).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="outreach" stroke="#6366f1" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="responses" stroke="#10b981" />
        <Line type="monotone" dataKey="followUps" stroke="#f59e0b" />
      </LineChart>
    </ResponsiveContainer>
  )
}

