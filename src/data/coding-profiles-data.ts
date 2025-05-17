// src/data/coding-profiles-data.ts
import type { CodingProfile } from '@/types';
import { Code2, TerminalSquare, Github } from 'lucide-react';

export const codingProfiles: CodingProfile[] = [
  {
    name: "LeetCode",
    url: "https://leetcode.com/ashishkumarrajak_java_dev/", 
    icon: Code2,
    username: "ashish_java_dev"
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/ashishkumarrajak_java_dev", 
    icon: TerminalSquare,
    username: "ashish_codes_java"
  },
  {
    name: "GitHub",
    url: "https://github.com/ashishkumarrajak", 
    icon: Github,
    username: "ashishkumarrajak"
  }
];
