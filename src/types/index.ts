// src/types/index.ts
export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription?: string; // For more detailed view if needed
  technologies: string[];
  imageUrl: string;
  dataAiHint: string;
  liveUrl?: string;
  repoUrl?: string;
}
