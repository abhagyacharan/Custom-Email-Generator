import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';

export function AnalyticsDashboard() {
  return (
    <Card className="border black">
      <CardHeader>
        <CardTitle>Analytics Dashboard</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold">0</h3>
          <p className="text-sm text-muted-foreground">Total Emails Sent</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold">0</h3>
          <p className="text-sm text-muted-foreground">Emails Pending</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold">0</h3>
          <p className="text-sm text-muted-foreground">Emails Scheduled</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold">0</h3>
          <p className="text-sm text-muted-foreground">Emails Failed</p>
        </div>
      </CardContent>
    </Card>
  );
}

