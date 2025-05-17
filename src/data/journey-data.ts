// src/data/journey-data.ts
import type { JourneyPoint } from '@/types';
import { Building, Code, Briefcase, School, Zap, Cpu } from 'lucide-react';

export const professionalJourneyPoints: JourneyPoint[] = [
  {
    icon: Building,
    title: "Senior Java Developer at Tech Solutions Inc.",
    text: "Led development of scalable microservices using Spring Boot and Kafka. Mentored junior developers and championed best practices in Agile environment. Successfully delivered three major product features ahead of schedule."
  },
  {
    icon: Code,
    title: "Full Stack Developer at Innovate Apps Ltd.",
    text: "Developed and maintained full-stack applications using Java, Spring, Angular, and React. Contributed to database design (SQL & NoSQL) and CI/CD pipeline automation. Key player in migrating legacy systems to modern cloud architecture on AWS."
  },
   {
    icon: Briefcase,
    title: "Software Engineer at Future Systems Co.",
    text: "Started as a junior engineer, quickly progressing by contributing to various Java-based enterprise projects. Gained foundational experience in backend development, API design, and software testing methodologies."
  }
];

export const educationalJourneyPoints: JourneyPoint[] = [
  {
    icon: School,
    title: "Master of Science in Computer Science",
    text: "XYZ University - Specialized in Distributed Systems and Advanced Algorithms. Thesis on 'Performance Optimization in Microservice Architectures'."
  },
  {
    icon: Zap, // Using Zap as a generic "spark" or achievement icon
    title: "Bachelor of Engineering in Information Technology",
    text: "ABC College of Engineering - Graduated with First Class Honours. Active member of the coding club and participated in national-level hackathons."
  },
  {
    icon: Cpu,
    title: "Certifications & Continuous Learning",
    text: "AWS Certified Developer, Oracle Certified Professional Java Programmer. Continuously learning through online courses on platforms like Coursera and Udemy, focusing on new technologies in cloud computing and big data."
  }
];
