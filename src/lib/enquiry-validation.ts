import { businesses } from '@/components/corporate/business-data';

export const ALLOWED_INTERESTS = ['Partnership', ...businesses.map(b => b.name), 'General enquiry'];

const LIMITS = { name: 120, email: 254, organisation: 160, message: 4000 };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export interface EnquiryInput {
  name?: unknown;
  email?: unknown;
  organisation?: unknown;
  interest?: unknown;
  message?: unknown;
  website?: unknown;
}

export interface EnquiryRecord {
  name: string;
  email: string;
  organisation: string | null;
  interest: string;
  message: string;
}

export type EnquiryResult = { ok: true; value: EnquiryRecord } | { ok: false; message: string };

function clean(value: unknown, max: number): string {
  if (typeof value !== 'string') return '';
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').trim().slice(0, max);
}

/** Hidden field a real visitor never fills; a filled one means a bot. */
export function isHoneypot(value: unknown): boolean {
  return clean(value, 200).length > 0;
}

export function validateEnquiry(input: EnquiryInput): EnquiryResult {
  const name = clean(input.name, LIMITS.name);
  const email = clean(input.email, LIMITS.email).toLowerCase();
  const organisation = clean(input.organisation, LIMITS.organisation);
  const rawInterest = clean(input.interest, 80);
  const interest = ALLOWED_INTERESTS.includes(rawInterest) ? rawInterest : 'General enquiry';
  const message = clean(input.message, LIMITS.message);

  if (!name) return { ok: false, message: 'Please tell us your name.' };
  if (!EMAIL_PATTERN.test(email)) return { ok: false, message: 'Please enter a valid email address.' };
  if (message.length < 10) return { ok: false, message: 'Please add a short message about your enquiry.' };

  return { ok: true, value: { name, email, organisation: organisation || null, interest, message } };
}
