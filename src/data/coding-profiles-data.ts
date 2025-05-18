// src/data/coding-profiles-data.ts
import type { CodingProfile } from '@/types';
import { Code2, TerminalSquare, Github } from 'lucide-react';

export const codingProfiles: CodingProfile[] = [
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/ashishkrrajak/", 
    icon: Code2,
    username: "ashishkrrajak"
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/ashishkrrajak", 
    icon: TerminalSquare,
    username: "ashishkrrajak"
  },
  {
    name: "GitHub",
    url: "https://github.com/ashishkrrajak", 
    icon: Github,
    username: "ashishkrrajak"
  }
];
