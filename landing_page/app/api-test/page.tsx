"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, AlertTriangle, CheckCircle, X } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function ApiTestPage() {
  const [inputCode, setInputCode] = useState("");
  const [response, setResponse] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  const sampleCode = `const apiUrl = 'https://api.example.com/data';

fetch(apiUrl, {
  headers: {
    'Authorization': \`Bearer \${apiKey}\`
  }
}).then(response => response.json())
  .then(data => console.log(data));`;

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const res = await fetch("/api/test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: inputCode }),
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || "An error occurred");
      }
      
      setResponse(data);
      if (data.secrets && data.secrets.secrets && data.secrets.secrets.length > 0) {
        setShowResults(true);
      }
    } catch (err: any) {
      setError(err.message || "Failed to process request");
      console.error("API request failed:", err);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleUseSample = () => {
    setInputCode(sampleCode);
  };
  
  const closeModal = () => {
    setShowResults(false);
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">GitGuard Secret Detection</h1>
      <Alert className="mb-6">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Security Warning</AlertTitle>
        <AlertDescription>
          This tool detects API keys, tokens, and other secrets in your code. Do not paste sensitive production code.
        </AlertDescription>
      </Alert>
      
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Code Input</CardTitle>
          <CardDescription>Enter or paste code to scan for secrets</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-6 bg-slate-800 flex items-center px-3 rounded-t-md">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <Textarea 
              ref={textareaRef}
              className="min-h-[300px] pt-8 bg-slate-900 text-white font-mono resize-none border-slate-700"
              placeholder="Paste your code here..."
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Tab') {
                  e.preventDefault();
                  const start = e.currentTarget.selectionStart;
                  const end = e.currentTarget.selectionEnd;
                  const newValue = inputCode.substring(0, start) + '\t' + inputCode.substring(end);
                  setInputCode(newValue);
                  setTimeout(() => {
                    if (textareaRef.current) {
                      textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 1;
                    }
                  }, 0);
                }
              }}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between gap-4">
          <Button 
            variant="outline"
            onClick={handleUseSample}
            disabled={isLoading}
            className="flex-1"
          >
            Use Sample Code
          </Button>
          <Button 
            onClick={handleSubmit} 
            disabled={isLoading || !inputCode.trim()}
            className="flex-1"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Scanning...
              </>
            ) : (
              "Scan for Secrets"
            )}
          </Button>
        </CardFooter>
      </Card>
      
      {error && (
        <Alert variant="destructive" className="mt-6 max-w-4xl mx-auto">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
      {/* Results Modal */}
      <Dialog open={showResults} onOpenChange={setShowResults}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center text-red-500">
              <AlertTriangle className="mr-2 h-5 w-5" />
              Secrets Detected!
            </DialogTitle>
            <DialogDescription>
              The following secrets were found in your code:
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 my-4 max-h-[60vh] overflow-y-auto">
            {response?.secrets?.secrets?.map((secret: any, index: number) => (
              <div key={index} className="p-4 bg-slate-900 rounded-md border border-red-500/50">
                <div className="font-semibold text-red-400 mb-1">{secret.type}</div>
                <div className="font-mono text-sm bg-slate-950 p-2 rounded overflow-x-auto">
                  {secret.value}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end">
            <Button variant="outline" onClick={closeModal}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
