
'use server';

import { z } from 'zod';
import { contactFormSchema, type ContactFormValues } from '@/lib/schemas';
import { db } from '@/lib/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';


export async function handleContactFormSubmit(
  values: ContactFormValues
): Promise<{ success?: boolean; message: string }> {
  try {
    const validatedData = contactFormSchema.parse(values);

    // Save to Firestore
    await addDoc(collection(db, 'contactSubmissions'), {
      ...validatedData,
      createdAt: Timestamp.fromDate(new Date()),
    });
    
    console.log('Contact form submitted and saved to Firestore:', validatedData);
    
    return { success: true, message: 'Thank you for your message! We will get back to you soon.' };
  } catch (error) {
    console.error('Error submitting contact form or saving to Firestore:', error);
    if (error instanceof z.ZodError) {
      return { success: false, message: 'Validation failed: ' + error.errors.map(e => e.message).join(', ') };
    }
    // Consider adding more specific Firestore error handling if needed
    return { success: false, message: 'An unexpected error occurred. Please try again.' };
  }
}
