"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function EmailAutomation() {
  const [automationEnabled, setAutomationEnabled] = useState(false)
  const [emailsPerDay, setEmailsPerDay] = useState("10")
  const [emailTime, setEmailTime] = useState("09:00")
  const [emailAccount, setEmailAccount] = useState("")

  const mockScheduledEmails = [
    {
      id: "1",
      recipient: "Victors Plumb.",
      email: "vicplumbingtz@example.com",
      scheduledFor: "Tomorrow, 9:00 AM",
      status: "Scheduled",
    },
    {
      id: "2",
      recipient: "AM Handyman",
      email: "am.handyman@example.com",
      scheduledFor: "Tomorrow, 9:05 AM",
      status: "Scheduled",
    },
    {
      id: "3",
      recipient: "Miguel Handyman",
      email: "miguel@example.com",
      scheduledFor: "Tomorrow, 9:10 AM",
      status: "Scheduled",
    },
  ]

  const mockSentEmails = [
    { id: "1", recipient: "ABC Plumbing", email: "abc@example.com", sentAt: "Yesterday, 9:00 AM", status: "Opened" },
    { id: "2", recipient: "XYZ Services", email: "xyz@example.com", sentAt: "Yesterday, 9:05 AM", status: "Clicked" },
    {
      id: "3",
      recipient: "123 Cleaning",
      email: "123clean@example.com",
      sentAt: "Yesterday, 9:10 AM",
      status: "Replied",
    },
  ]

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Email Automation Settings</CardTitle>
          <CardDescription>Configure your automated email sending preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="automation-switch">Enable Daily Email Automation</Label>
              <p className="text-sm text-muted-foreground">
                Automatically send the top performing cold emails to prospects
              </p>
            </div>
            <Switch id="automation-switch" checked={automationEnabled} onCheckedChange={setAutomationEnabled} />
          </div>

          <Alert variant="warning">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Important</AlertTitle>
            <AlertDescription>You need to connect your email account before enabling automation.</AlertDescription>
          </Alert>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="email-account">Email Account</Label>
              <Select value={emailAccount} onValueChange={setEmailAccount}>
                <SelectTrigger id="email-account">
                  <SelectValue placeholder="Select email account" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gmail">Gmail Account</SelectItem>
                  <SelectItem value="outlook">Outlook Account</SelectItem>
                  <SelectItem value="other">Other Email Provider</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {!emailAccount && (
              <div className="space-y-2">
                <Label>Connect Account</Label>
                <Button className="w-full">Connect Email Account</Button>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="emails-per-day">Emails Per Day</Label>
              <Select value={emailsPerDay} onValueChange={setEmailsPerDay}>
                <SelectTrigger id="emails-per-day">
                  <SelectValue placeholder="Select number of emails" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5 emails</SelectItem>
                  <SelectItem value="10">10 emails</SelectItem>
                  <SelectItem value="15">15 emails</SelectItem>
                  <SelectItem value="20">20 emails</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email-time">Send Time</Label>
              <Input id="email-time" type="time" value={emailTime} onChange={(e) => setEmailTime(e.target.value)} />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" disabled={!emailAccount} onClick={() => setAutomationEnabled(true)}>
            Save Automation Settings
          </Button>
        </CardFooter>
      </Card>

      <Tabs defaultValue="scheduled">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="scheduled">Scheduled Emails</TabsTrigger>
          <TabsTrigger value="sent">Sent Emails</TabsTrigger>
        </TabsList>
        <TabsContent value="scheduled">
          <Card>
            <CardHeader>
              <CardTitle>Scheduled Emails</CardTitle>
              <CardDescription>Emails scheduled to be sent automatically</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Recipient</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Scheduled For</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockScheduledEmails.map((email) => (
                    <TableRow key={email.id}>
                      <TableCell>{email.recipient}</TableCell>
                      <TableCell>{email.email}</TableCell>
                      <TableCell>{email.scheduledFor}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{email.status}</Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          Cancel
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="sent">
          <Card>
            <CardHeader>
              <CardTitle>Sent Emails</CardTitle>
              <CardDescription>History of automatically sent emails</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Recipient</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Sent At</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockSentEmails.map((email) => (
                    <TableRow key={email.id}>
                      <TableCell>{email.recipient}</TableCell>
                      <TableCell>{email.email}</TableCell>
                      <TableCell>{email.sentAt}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            email.status === "Opened" ? "secondary" : email.status === "Clicked" ? "default" : "success"
                          }
                        >
                          {email.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

