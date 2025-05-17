// src/components/project-summary-loader.tsx
'use client';

import { useState, useEffect, useTransition } from 'react';
import { handleGenerateSummary } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Loader2, Wand2, BrainCircuit } from 'lucide-react';
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
    // setSummary(null); // Keep current summary while loading new one for better UX
    startTransition(async () => {
      const result = await handleGenerateSummary({
        description: projectDescription,
        technologies: projectTechnologies.join(', '),
      });
      if (result.summary) {
        setSummary(result.summary);
      } else {
        setError(result.error || 'An unknown error occurred.');
        setSummary(null); // Clear summary on error
      }
    });
  };
  
  // Optional: Automatically generate summary on component mount - uncomment if desired
  // useEffect(() => {
  //  generateSummary();
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []); // Run once on mount


  return (
    <div className="mt-6 space-y-3">
      <Button 
        onClick={generateSummary} 
        disabled={isPending} 
        variant="outline" 
        size="sm" 
        className="w-full md:w-auto border-primary/50 text-primary hover:bg-primary/10 hover:text-primary/90"
      >
        {isPending ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <BrainCircuit className="mr-2 h-4 w-4" />
        )}
        {summary && !isPending ? 'Regenerate AI Insights' : 'Generate AI Insights'}
      </Button>
      
      {isPending && !summary && (
         <Alert className="bg-card border-border/50 animate-pulse">
          <Loader2 className="h-4 w-4 text-primary animate-spin" />
          <AlertTitle className="font-semibold text-primary">Generating Insights...</AlertTitle>
          <AlertDescription className="text-sm text-muted-foreground">
            The AI is analyzing the project details. Please wait a moment.
          </AlertDescription>
        </Alert>
      )}

      {summary && !isPending && (
        <Alert className="bg-primary/10 border-primary/30 shadow-sm">
          <Wand2 className="h-5 w-5 text-primary" />
          <AlertTitle className="font-semibold text-primary">AI-Powered Insights</AlertTitle>
          <AlertDescription className="text-sm text-foreground/80 leading-relaxed">
            {summary}
          </AlertDescription>
        </Alert>
      )}
      {error && !isPending && (
        <Alert variant="destructive">
          <AlertTitle>Error Generating Summary</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}
