// src/components/project-summary-loader.tsx
'use client';

import { useState, useEffect, useTransition } from 'react';
import { handleGenerateSummary } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Loader2, Wand2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface ProjectSummaryLoaderProps {
  projectDescription: string;
  projectTechnologies: string[];
}

export function ProjectSummaryLoader({ projectDescription, projectTechnologies }: ProjectSummaryLoaderProps) {
  const [summary, setSummary] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const generateSummary = () => {
    setError(null);
    setSummary(null); 
    startTransition(async () => {
      const result = await handleGenerateSummary({
        description: projectDescription,
        technologies: projectTechnologies.join(', '),
      });
      if (result.summary) {
        setSummary(result.summary);
      } else {
        setError(result.error || 'An unknown error occurred.');
      }
    });
  };
  
  // Optional: Automatically generate summary on component mount
  // useEffect(() => {
  //  generateSummary();
  // }, [projectDescription, projectTechnologies]);


  return (
    <div className="mt-4 space-y-3">
      <Button onClick={generateSummary} disabled={isPending} variant="outline" size="sm" className="hover:bg-accent/20 hover:text-accent-foreground">
        {isPending ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Wand2 className="mr-2 h-4 w-4" />
        )}
        {summary ? 'Regenerate AI Summary' : 'Generate AI Summary'}
      </Button>
      
      {summary && !isPending && (
        <Alert className="bg-primary/5 border-primary/20">
          <Wand2 className="h-4 w-4 text-primary" />
          <AlertTitle className="font-semibold text-primary">AI-Powered Summary</AlertTitle>
          <AlertDescription className="text-sm text-foreground/80">
            {summary}
          </AlertDescription>
        </Alert>
      )}
      {error && !isPending && (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}
