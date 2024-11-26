import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Label } from './ui/Label';
import { Textarea } from './ui/Textarea';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/Card';

export function EmailForm() {
  const [file, setFile] = useState(null);
  const [googleSheetUrl, setGoogleSheetUrl] = useState("");
  const [prompt, setPrompt] = useState("");

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    if (file) {
      formData.append('file', file);
    }
    if (googleSheetUrl) {
      formData.append('googleSheetUrl', googleSheetUrl);
    }
    formData.append('prompt', prompt);

    // Example API call to FastAPI endpoint
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();

    if (response.ok) {
      console.log('Generated Emails:', data.emails);
      alert('Emails generated successfully!');
    } else {
      alert(`Upload failed: ${data.error}`);
    }
  };

  return (
    <Card className="border black">
      <CardHeader>
        <CardTitle>Email Configuration</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="data-source">Google Sheet URL</Label>
          <Input
            id="data-source"
            value={googleSheetUrl}
            onChange={(e) => setGoogleSheetUrl(e.target.value)}
            placeholder="Google Sheet URL"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="file-upload">Or Upload CSV</Label>
          <Input
            id="file-upload"
            type="file"
            accept=".csv"
            onChange={handleFileUpload}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="prompt">Email Prompt</Label>
          <Textarea
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your email prompt with placeholders like {CompanyName}"
            rows={4}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleSubmit}>
          Generate and Send Emails
        </Button>
      </CardFooter>
    </Card>
  );
}
