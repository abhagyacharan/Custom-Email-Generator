import React from 'react';
import { Button } from './ui/Button';

export function DashboardHeader() {
  return (
    <header className="flex items-center justify-between py-6">
      <h1 className="text-2xl font-bold">Custom Email Sender</h1>
      <Button>Connect Email Account</Button>
    </header>
  );
}

