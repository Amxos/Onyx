"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IndustryDistributionChart } from "@/components/charts/industry-distribution-chart"
import { OutreachResultsChart } from "@/components/charts/outreach-results-chart"
import { OutreachTimelineChart } from "@/components/charts/outreach-timeline-chart"
import { ConversionRateChart } from "@/components/charts/conversion-rate-chart"

export function DataVisualization() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Outreach Results</CardTitle>
          <CardDescription>Visualization of outreach results by industry</CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          <OutreachResultsChart />
        </CardContent>
      </Card>
      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Industry Distribution</CardTitle>
          <CardDescription>Distribution of contacts by industry</CardDescription>
        </CardHeader>
        <CardContent>
          <IndustryDistributionChart />
        </CardContent>
      </Card>
      <Card className="col-span-7">
        <CardHeader>
          <CardTitle>Outreach Timeline</CardTitle>
          <CardDescription>Timeline of outreach activities and results</CardDescription>
        </CardHeader>
        <CardContent>
          <OutreachTimelineChart />
        </CardContent>
      </Card>
      <Card className="col-span-7">
        <CardHeader>
          <CardTitle>Conversion Metrics</CardTitle>
          <CardDescription>Detailed conversion metrics by industry and outreach method</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="conversion-rate">
            <TabsList>
              <TabsTrigger value="conversion-rate">Conversion Rate</TabsTrigger>
              <TabsTrigger value="response-time">Response Time</TabsTrigger>
              <TabsTrigger value="follow-up-effectiveness">Follow-up Effectiveness</TabsTrigger>
            </TabsList>
            <TabsContent value="conversion-rate">
              <ConversionRateChart />
            </TabsContent>
            <TabsContent value="response-time">
              <div className="h-[400px] flex items-center justify-center">
                <p className="text-muted-foreground">Response time analysis chart will appear here</p>
              </div>
            </TabsContent>
            <TabsContent value="follow-up-effectiveness">
              <div className="h-[400px] flex items-center justify-center">
                <p className="text-muted-foreground">Follow-up effectiveness chart will appear here</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

