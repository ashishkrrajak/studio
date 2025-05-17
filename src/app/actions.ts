// src/app/actions.ts
'use server';

import { summarizeProject, type SummarizeProjectInput, type SummarizeProjectOutput } from '@/ai/flows/summarize-project';
import { z } from 'zod';
import { contactFormSchema, type ContactFormValues } from '@/lib/schemas';


export async function handleGenerateSummary(
  projectData: Pick<SummarizeProjectInput, 'description' | 'technologies'>
): Promise<{ summary?: string; error?: string }> {
  try {
    // The AI flow expects technologies as a comma-separated string
    const input: SummarizeProjectInput = {
      description: projectData.description,
      technologies: Array.isArray(projectData.technologies) ? projectData.technologies.join(', ') : projectData.technologies,
    };
    const result: SummarizeProjectOutput = await summarizeProject(input);
    return { summary: result.summary };
  } catch (error) {
    console.error('Error generating project summary:', error);
    let errorMessage = 'Failed to generate summary.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return { error: errorMessage };
  }
}

export async function handleContactFormSubmit(
  values: ContactFormValues
): Promise<{ success?: boolean; message: string }> {
  try {
    const validatedData = contactFormSchema.parse(values);
    // In a real application, you would send an email or save to a database here.
    console.log('Contact form submitted:', validatedData);
    
    // Simulate successful submission
    return { success: true, message: 'Thank you for your message! We will get back to you soon.' };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    if (error instanceof z.ZodError) {
      return { success: false, message: 'Validation failed: ' + error.errors.map(e => e.message).join(', ') };
    }
    return { success: false, message: 'An unexpected error occurred. Please try again.' };
  }
}
