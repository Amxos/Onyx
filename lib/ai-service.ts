"use server"

import type { Contact } from "@/components/crm-table"

export async function generateEmailDraft(contact: Contact, emailType: string): Promise<string> {
  // In a real application, this would use the AI SDK to generate emails
  // For demo purposes, we'll return mock emails

  const { businessName, industry } = contact

  // Simulate a delay to mimic AI processing
  await new Promise((resolve) => setTimeout(resolve, 1500))

  if (emailType === "cold-outreach") {
    return `Subject: Enhancing Your ${industry} Business Operations

Dear ${businessName} Team,

I hope this email finds you well. I recently came across your ${industry} services and was impressed by your company's reputation in the industry.

Our platform specializes in helping ${industry.toLowerCase()} businesses streamline their operations, increase customer satisfaction, and boost revenue through our specialized CRM solution.

Would you be open to a brief 15-minute call next week to discuss how we might be able to help your business grow?

Looking forward to your response.

Best regards,
[Your Name]
[Your Company]
[Your Contact Information]`
  }

  if (emailType === "follow-up") {
    return `Subject: Following Up - Our Discussion About ${industry} Solutions

Dear ${businessName} Team,

I wanted to follow up on our recent conversation about how our CRM solution can benefit your ${industry.toLowerCase()} business.

I understand you're busy, but I believe our platform could significantly improve your customer management and business operations.

Would any of these times work for a quick demo?
- Tuesday at 10:00 AM
- Wednesday at 2:00 PM
- Thursday at 11:00 AM

Looking forward to hearing from you.

Best regards,
[Your Name]
[Your Company]
[Your Contact Information]`
  }

  return `Subject: Custom Solution for ${businessName}

Dear ${businessName} Team,

I hope this email finds you well. I'm reaching out because we've developed some specific solutions for businesses in the ${industry.toLowerCase()} sector that I believe could be valuable for your operations.

Our platform helps businesses like yours:
- Streamline customer management
- Improve follow-up processes
- Increase conversion rates
- Enhance customer satisfaction

Would you be interested in learning more about how these solutions could be tailored to your specific needs?

Best regards,
[Your Name]
[Your Company]
[Your Contact Information]`
}

