
import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(4, { message: "Name must be at least 4 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
