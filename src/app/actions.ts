
'use server';

import { z } from 'zod';
import { contactFormSchema, type ContactFormValues } from '@/lib/schemas';


export async function handleContactFormSubmit(
  values: ContactFormValues
): Promise<{ success?: boolean; message: string }> {
  try {
    const validatedData = contactFormSchema.parse(values);
    // In a real application, you would send an email or save to a database here.
    console.log('Contact form submitted:', validatedData);
    
    // Simulate successful submission
    return { success: true, message: 'Thank you for your message! We will get back to you soon.' };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    if (error instanceof z.ZodError) {
      return { success: false, message: 'Validation failed: ' + error.errors.map(e => e.message).join(', ') };
    }
    return { success: false, message: 'An unexpected error occurred. Please try again.' };
  }
}
