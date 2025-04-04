import type { Metadata } from "next"
import { Dashboard } from "@/components/dashboard"

export const metadata: Metadata = {
  title: "Onyx CRM Dashboard",
  description: "Modern CRM dashboard with AI capabilities",
}

export default function Home() {
  return <Dashboard />
}

