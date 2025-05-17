// src/components/contact-form.tsx
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { handleContactFormSubmit } from '@/app/actions';
import { contactFormSchema, type ContactFormValues } from '@/lib/schemas';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Send } from 'lucide-react';
import { useState, useTransition } from 'react';

export function ContactForm() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: ContactFormValues) {
    startTransition(async () => {
      const result = await handleContactFormSubmit(values);
      if (result.success) {
        toast({
          title: 'Message Sent!',
          description: result.message,
          variant: 'default',
        });
        form.reset();
      } else {
        toast({
          title: 'Error',
          description: result.message,
          variant: 'destructive',
        });
      }
    });
  }

  return (
    <section id="contact" className="py-16 md:py-24 fade-in-section">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto shadow-xl bg-card border-border">
          <CardHeader className="text-center p-8">
            <CardTitle className="text-4xl md:text-5xl font-bold text-primary">Let's Connect</CardTitle>
            <CardDescription className="text-lg text-muted-foreground pt-3">
              Have a project idea, a question, or just want to say hello? Drop me a line!
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-md text-foreground/80">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} className="text-base py-6 bg-input border-border/50 focus:ring-primary focus:border-primary placeholder:text-muted-foreground/70" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-md text-foreground/80">Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} className="text-base py-6 bg-input border-border/50 focus:ring-primary focus:border-primary placeholder:text-muted-foreground/70"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-md text-foreground/80">Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your message..." {...field} rows={6} className="text-base bg-input border-border/50 focus:ring-primary focus:border-primary placeholder:text-muted-foreground/70"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isPending} size="lg" className="w-full bg-primary hover:bg-primary/80 text-primary-foreground transition-transform hover:scale-105 py-6 text-lg shadow-lg">
                  {isPending ? (
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  ) : (
                    <Send className="mr-2 h-5 w-5" />
                  )}
                  Send Message
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
