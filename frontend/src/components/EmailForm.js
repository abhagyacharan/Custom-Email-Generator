import React from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Label } from './ui/Label';
import { Textarea } from './ui/Textarea';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/Card';

export function EmailForm() {
  return (
    <Card className="border black">
      <CardHeader>
        <CardTitle>Email Configuration</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="data-source">Data Source</Label>
          <Input id="data-source" placeholder="Google Sheet URL or upload CSV" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="prompt">Email Prompt</Label>
          <Textarea
            id="prompt"
            placeholder="Enter your email prompt with placeholders like {CompanyName}"
            rows={4}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Generate and Send Emails</Button>
      </CardFooter>
    </Card>
  );
}

