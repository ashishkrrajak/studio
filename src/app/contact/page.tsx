// src/app/contact/page.tsx
import { ContactForm } from '@/components/contact-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Me | FolioForge',
  description: 'Get in touch for collaborations, inquiries, or just to say hello.',
};

export default function ContactPage() {
  return (
    <div>
      <ContactForm />
    </div>
  );
}
