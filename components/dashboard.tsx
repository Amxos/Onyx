"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ModeToggle } from "@/components/mode-toggle"
import { CrmTable } from "@/components/crm-table"
import { DataVisualization } from "@/components/data-visualization"
import { EmailDrafting } from "@/components/email-drafting"
import { EmailAutomation } from "@/components/email-automation"
import { UserNav } from "@/components/user-nav"
import { MainNav } from "@/components/main-nav"
import { Search } from "@/components/search"

export function Dashboard() {
  const [activeTab, setActiveTab] = useState("crm")

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <Search />
            <ModeToggle />
            <UserNav />
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Onyx CRM</h2>
        </div>
        <Tabs defaultValue="crm" className="space-y-4" onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="crm">CRM Data</TabsTrigger>
            <TabsTrigger value="visualization">Data Visualization</TabsTrigger>
            <TabsTrigger value="email-drafting">AI Email Drafting</TabsTrigger>
            <TabsTrigger value="automation">Email Automation</TabsTrigger>
          </TabsList>
          <TabsContent value="crm" className="space-y-4">
            <CrmTable />
          </TabsContent>
          <TabsContent value="visualization" className="space-y-4">
            <DataVisualization />
          </TabsContent>
          <TabsContent value="email-drafting" className="space-y-4">
            <EmailDrafting />
          </TabsContent>
          <TabsContent value="automation" className="space-y-4">
            <EmailAutomation />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

