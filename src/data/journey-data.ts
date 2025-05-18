
// src/data/journey-data.ts
import type { JourneyPoint } from '@/types';
import { Building, Code, School } from 'lucide-react';

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
    title: "Bachelor of Technology in Electronics And Communications",
    date: "Oct 2019 - Jul 2022, Kolkata", 
    details: [
      "Heritage Institute Of Technology, Kolkata.",
      "Graduated with a B.Tech in Electronics and Communications.",
      "Actively engaged in technical workshops and coding competitions, enhancing practical skills."
    ]
  },
  {
    icon: School, 
    title: "Diploma in Electronics And Communications",
    date: "Jul 2016 - Aug 2019, Ranchi",
    details: [
      "Government Polytechnic, Ranchi.",
      "Served as Cultural President, successfully organizing and leading various college events and fests."
    ]
  },
  {
    icon: School,
    title: "Matriculation",
    date: "Completed 2016, Gomoh, Dhanbad", 
    details: [
      "Kendriya Vidyalaya, Gomoh.",
      "Actively participated in Scouts and Guides, developing teamwork and leadership skills."
    ]
  }
];

