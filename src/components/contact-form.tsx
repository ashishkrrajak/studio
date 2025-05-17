
// src/components/contact-form.tsx
'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { handleContactFormSubmit } from '@/app/actions';
import { contactFormSchema, type ContactFormValues } from '@/lib/schemas';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Send } from 'lucide-react';
import { useTransition } from 'react';

interface ContactFormProps {
  onSuccess?: () => void;
}

export interface ContactFormHandle {
  isFormDirty: () => boolean;
}

export const ContactForm = React.forwardRef<ContactFormHandle, ContactFormProps>(({ onSuccess }, ref) => {
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

  React.useImperativeHandle(ref, () => ({
    isFormDirty: () => form.formState.isDirty,
  }));

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
        if (onSuccess) {
          onSuccess();
        }
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
    <Card className="w-full h-full flex flex-col border-0 shadow-none bg-card">
      <CardHeader className="text-center p-6">
        <CardTitle className="text-3xl md:text-4xl font-bold text-primary">Let's Connect</CardTitle>
      </CardHeader>
      <CardContent className="p-6 flex-grow overflow-y-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input 
                      placeholder="Your Name" 
                      {...field} 
                      className="h-12 text-base bg-transparent border-0 border-b-2 border-border/40 rounded-none focus:ring-0 focus:border-primary placeholder:text-muted-foreground/70 py-3 px-1" 
                    />
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
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="your.email@example.com" 
                      {...field} 
                      className="h-12 text-base bg-transparent border-0 border-b-2 border-border/40 rounded-none focus:ring-0 focus:border-primary placeholder:text-muted-foreground/70 py-3 px-1"
                    />
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
                  <FormControl>
                    <Textarea 
                      placeholder="Your message..." 
                      {...field} 
                      rows={4} 
                      className="text-base bg-transparent border-0 border-b-2 border-border/40 rounded-none focus:ring-0 focus:border-primary placeholder:text-muted-foreground/70 py-3 px-1 min-h-[100px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button 
              type="submit" 
              disabled={isPending} 
              size="lg" 
              className="w-full text-primary-foreground transition-transform hover:scale-105 h-14 text-lg shadow-lg rounded-lg"
              style={{ background: 'linear-gradient(to right, hsl(var(--accent)), hsl(var(--primary)))' }}
            >
              {isPending ? (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              ) : (
                <Send className="mr-2 h-5 w-5" />
              )}
              SEND
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
});

ContactForm.displayName = 'ContactForm';
