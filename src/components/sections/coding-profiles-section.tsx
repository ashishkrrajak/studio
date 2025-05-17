
// src/components/sections/coding-profiles-section.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { codingProfiles } from '@/data/coding-profiles-data';

export function CodingProfilesSection() {
  return (
    // Removed fade-in-section, will be handled by AnimateOnScrollWrapper
    <section id="coding-profiles" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">Coding & Profile Hub</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {codingProfiles.map((profile) => (
            <Card key={profile.name} className="bg-card shadow-lg hover:shadow-xl transition-shadow border-border/70 hover:border-accent/50">
              <CardContent className="p-8 text-center flex flex-col items-center">
                <profile.icon className="w-16 h-16 text-accent mb-6" />
                <h3 className="text-2xl font-semibold text-primary mb-2">{profile.name}</h3>
                <p className="text-muted-foreground mb-6">@{profile.username}</p>
                <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-transform hover:scale-105 shadow-md">
                  <Link href={profile.url} target="_blank" rel="noopener noreferrer">
                    View Profile <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
