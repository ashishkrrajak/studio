// 'use server'

/**
 * @fileOverview This file defines a Genkit flow for summarizing project details using AI.
 *
 * - summarizeProject - An async function that takes project details and returns a concise summary.
 * - SummarizeProjectInput - The input type for the summarizeProject function, including project description and technologies used.
 * - SummarizeProjectOutput - The output type for the summarizeProject function, which is a string containing the project summary.
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeProjectInputSchema = z.object({
  description: z.string().describe('A detailed description of the project.'),
  technologies: z.string().describe('A comma-separated list of technologies used in the project.'),
});
export type SummarizeProjectInput = z.infer<typeof SummarizeProjectInputSchema>;

const SummarizeProjectOutputSchema = z.object({
  summary: z.string().describe('A concise and impactful summary of the project.'),
});
export type SummarizeProjectOutput = z.infer<typeof SummarizeProjectOutputSchema>;

const evaluateImpactTool = ai.defineTool({
  name: 'evaluateImpact',
  description: 'Evaluates the impact of a project based on its description and technologies using public information.',
  inputSchema: z.object({
    description: z.string().describe('The description of the project.'),
    technologies: z.string().describe('The technologies used in the project.'),
  }),
  outputSchema: z.string().describe('A string representing the evaluation of the project impact.'),
  async implementation(input) {
    // Placeholder implementation for impact evaluation.
    // In a real application, this would involve querying external APIs or databases
    // to gather information about the project's impact.
    return `The impact of this project appears to be significant based on the technologies used.`;
  },
});

const summarizeProjectPrompt = ai.definePrompt({
  name: 'summarizeProjectPrompt',
  input: {schema: SummarizeProjectInputSchema},
  output: {schema: SummarizeProjectOutputSchema},
  tools: [evaluateImpactTool],
  prompt: `You are an AI expert in creating project summaries for portfolios. Your goal is to create a concise and impactful summary of the project based on the description and technologies provided. Use the evaluateImpact tool to determine the impact of the project.

Description: {{{description}}}
Technologies: {{{technologies}}}

Summary:`, // The prompt should guide the LLM to use the evaluateImpact tool.
});

const summarizeProjectFlow = ai.defineFlow(
  {
    name: 'summarizeProjectFlow',
    inputSchema: SummarizeProjectInputSchema,
    outputSchema: SummarizeProjectOutputSchema,
  },
  async input => {
    const {output} = await summarizeProjectPrompt(input);
    return output!;
  }
);

export async function summarizeProject(input: SummarizeProjectInput): Promise<SummarizeProjectOutput> {
  return summarizeProjectFlow(input);
}
