
# Onyx CRM ✨

<p align="center">
  <br>
  <em>A modern, AI-powered CRM solution for growing businesses</em>
</p>

## 🌟 Features

Onyx CRM combines powerful contact management with cutting-edge AI to help you convert more leads and grow your business.

### Core Capabilities

- **📊 Dynamic Dashboard** - Get a real-time overview of your sales pipeline
- **👥 Contact Management** - Add, edit, and organize your business contacts
- **📋 Kanban Board** - Visualize and manage your sales process with drag-and-drop simplicity
- **📈 Data Visualization** - Interactive charts and metrics to track performance
- **🤖 AI Insights** - Get intelligent recommendations and analytics about your sales data
- **✉️ Email Drafting** - AI-powered email templates customized for each contact
- **📅 Calendar Integration** - Schedule and manage meetings with prospects
- **🔔 Real-time Notifications** - Stay updated on important lead activities

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **UI**: React, Tailwind CSS, shadcn/ui components
- **State Management**: React Context API
- **Charts**: Recharts
- **Drag & Drop**: react-beautiful-dnd
- **Date Handling**: date-fns

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

# Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/onyx-crm.git

# Navigate to the project directory
cd onyx-crm

# Install dependencies
npm install

# Start the development server
npm run dev
```

Visit `http://localhost:3000` to see your CRM in action!

## 📖 Usage

### Managing Contacts

1. Navigate to the **CRM Data** tab
2. Click **Add Contact** to create new leads
3. Use the table filters and sorting to find specific contacts
4. Edit or delete contacts using the actions menu


### Using the Kanban Board

1. Navigate to the **Kanban Board** tab
2. Drag cards between columns to update their status
3. Click the **+** button to add new cards to any column
4. Edit cards by clicking the menu in the top-right corner


### Analyzing Your Data

1. Visit the **Data Visualization** tab to see performance metrics
2. Switch between different chart types to analyze various aspects of your data
3. Use the **AI Analytics** tab to get intelligent insights about your sales process


## 🎨 Customization

### Theming

Onyx CRM comes with three built-in themes:

- Light
- Dark
- Onyx (premium dark theme)


Switch between themes using the theme toggle in the top navigation bar.

### Adding Custom Fields

Extend the CRM with custom fields by modifying the `Contact` type in `crm-table.tsx` and updating the corresponding forms.

## 🗓️ Roadmap

- Cloud synchronization
- Multi-user support
- Advanced reporting
- Mobile application
- Integration with email providers
- Custom automation workflows
