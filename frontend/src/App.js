import React from 'react';
import { DashboardHeader } from './components/DashboardHeader';
import { EmailForm } from './components/EmailForm';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { EmailStatusTable } from './components/EmailStatusTable';

function App() {
  return (
    <div className="container mx-auto p-4">
      <DashboardHeader />
      <div className="grid gap-6 md:grid-cols-2">
        <EmailForm />
        <AnalyticsDashboard />
      </div>
      <EmailStatusTable />
    </div>
  );
}

export default App;

