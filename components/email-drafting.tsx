"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { mockCrmData } from "@/lib/mock-data"
import { generateEmailDraft } from "@/lib/ai-service"
import { Loader2 } from "lucide-react"

export function EmailDrafting() {
  const [selectedContact, setSelectedContact] = useState("")
  const [emailType, setEmailType] = useState("cold-outreach")
  const [generatedEmail, setGeneratedEmail] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerateEmail = async () => {
    if (!selectedContact) return

    setIsGenerating(true)

    try {
      const contact = mockCrmData.find((c) => c.id === selectedContact)
      if (!contact) return

      const email = await generateEmailDraft(contact, emailType)
      setGeneratedEmail(email)
    } catch (error) {
      console.error("Error generating email:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>AI Email Drafting</CardTitle>
          <CardDescription>Generate personalized emails based on your CRM data</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Select Contact</label>
            <Select value={selectedContact} onValueChange={setSelectedContact}>
              <SelectTrigger>
                <SelectValue placeholder="Select a contact" />
              </SelectTrigger>
              <SelectContent>
                {mockCrmData.map((contact) => (
                  <SelectItem key={contact.id} value={contact.id}>
                    {contact.businessName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email Type</label>
            <Select value={emailType} onValueChange={setEmailType}>
              <SelectTrigger>
                <SelectValue placeholder="Select email type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cold-outreach">Cold Outreach</SelectItem>
                <SelectItem value="follow-up">Follow-up</SelectItem>
                <SelectItem value="proposal">Proposal</SelectItem>
                <SelectItem value="meeting-request">Meeting Request</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleGenerateEmail} disabled={!selectedContact || isGenerating} className="w-full">
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              "Generate Email"
            )}
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Generated Email</CardTitle>
          <CardDescription>Preview and edit the AI-generated email</CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Generated email will appear here..."
            value={generatedEmail}
            onChange={(e) => setGeneratedEmail(e.target.value)}
            className="min-h-[200px]"
          />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Reset</Button>
          <Button>Save as Template</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

