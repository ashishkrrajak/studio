
// src/data/journey-data.ts
import type { JourneyPoint } from '@/types';
import { Building, Code, School, Zap, Cpu } from 'lucide-react';

export const professionalJourneyPoints: JourneyPoint[] = [
  {
    icon: Building,
    title: "Software Engineer at Channel play SaaS Pvt Ltd",
    date: "April 2024 - Present, Kolkata",
    details: [
      "Implemented a Bulk Upload module for 50,000+ Excel records, incorporating dynamic field mapping and validation logic, reducing manual data entry time by 40% and increasing throughput by 3 times.",
      "Integrated Cash Free payment gateway, enabling secure, real-time disbursal’s and automated transaction tracking, reducing transaction failures by 15% and improving payment processing time by 20%.",
      "Integrated QC gift card API, allowing seamless issuance and redemption, which increased user engagement by 25% and contributed to a 20% uplift in user retention.",
      "Migrated a critical microservice from MySQL to PostgreSQL, optimizing complex queries and redesigning schema, improving data retrieval speed by 50% and ensuring better system scalability.",
      "Designed and implemented reusable, scalable Java modules, improving system performance by 30% and significantly enhancing front-end response times and user experience.",
      "Led and coordinated full-cycle API testing with QA using Postman and Swagger, ensuring 99% defect-free production releases and adherence to business logic requirements."
    ]
  },
  {
    icon: Code,
    title: "Associate Software Engineer at Channel play SaaS Pvt Ltd",
    date: "Nov 2022 - March 2024, Kolkata",
    details: [
      "Implemented typo search functionality, leveraging fuzzy matching algorithms, improving search accuracy by 30% and reducing user frustration from incorrect queries.",
      "Utilized DFS-based algorithms for hierarchical data processing, reducing data traversal time by 40% and optimizing the handling of nested datasets in complex queries.",
      "Participated in the migration to Apache Tomcat 9 and MySQL 8, improving system compatibility, enhancing performance, and streamlining deployment workflows.",
      "Refactored core logic in performance-critical modules, achieving up to 90% reduction in execution time.",
      "Mentored 5+ junior developers on best coding practices, conducting regular code reviews and reducing post-deployment bugs by 25%.",
      "Created detailed API documentation and core logic documentation, streamlining on-boarding for new developers and reducing dependency on senior developers for routine queries by 30%."
    ]
  }
];

export const educationalJourneyPoints: JourneyPoint[] = [
  {
    icon: School,
    title: "Master of Science in Computer Science",
    date: "Year - Year", // Placeholder, update as needed
    details: ["XYZ University - Specialized in Distributed Systems and Advanced Algorithms. Thesis on 'Performance Optimization in Microservice Architectures'."]
  },
  {
    icon: Zap, 
    title: "Bachelor of Engineering in Information Technology",
    date: "Year - Year", // Placeholder, update as needed
    details: ["ABC College of Engineering - Graduated with First Class Honours. Active member of the coding club and participated in national-level hackathons."]
  },
  {
    icon: Cpu,
    title: "Certifications & Continuous Learning",
    date: "Ongoing", // Placeholder, update as needed
    details: ["AWS Certified Developer, Oracle Certified Professional Java Programmer. Continuously learning through online courses on platforms like Coursera and Udemy, focusing on new technologies in cloud computing and big data."]
  }
];
