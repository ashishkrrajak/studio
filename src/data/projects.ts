// src/data/projects.ts
import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    name: 'E-commerce Platform "ShopSphere"',
    description: 'A modern e-commerce solution with a focus on user experience and scalability.',
    longDescription: 'ShopSphere is a full-featured e-commerce platform built with Next.js for server-side rendering and static site generation, ensuring fast load times. It integrates Stripe for secure payments and features a comprehensive admin dashboard for managing products, orders, and customers. Technologies used include TypeScript for type safety and Tailwind CSS for a utility-first styling approach.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL', 'Prisma'],
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'online shopping',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: '2',
    name: 'Task Management App "TaskFlow"',
    description: 'A collaborative tool to streamline project workflows and boost team productivity.',
    longDescription: 'TaskFlow is designed for teams to manage projects efficiently. It offers features like customizable boards (Kanban, list), task assignments, real-time collaboration via WebSockets, and progress tracking. Built with React and a Node.js/Express backend, it uses MongoDB for flexible data storage.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Redux'],
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'team collaboration',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: '3',
    name: 'Personal Portfolio "FolioForge"',
    description: 'This very portfolio, showcasing my web development skills and projects.',
    longDescription: 'FolioForge is a Next.js-powered portfolio website designed to be clean, responsive, and performant. It features AI-generated project summaries using Genkit to demonstrate modern AI integration capabilities. The styling is achieved with Tailwind CSS, and the overall architecture emphasizes best practices in web development.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Genkit', 'Server Actions'],
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'developer portfolio',
  },
  {
    id: '4',
    name: 'Recipe Sharing App "CulinaryConnect"',
    description: 'A social platform for food enthusiasts to share and discover new recipes.',
    longDescription: 'CulinaryConnect allows users to create profiles, upload their favorite recipes with images and instructions, and browse a vast collection of dishes from others. It includes features like recipe ratings, comments, and advanced search filters. The tech stack includes Python/Django for the backend API and React for the interactive frontend.',
    technologies: ['React', 'Python', 'Django', 'PostgreSQL', 'Cloudinary'],
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'food cooking',
    liveUrl: '#',
    repoUrl: '#',
  },
];
