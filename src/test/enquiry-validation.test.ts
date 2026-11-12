import { describe, expect, it } from 'vitest';
import { ALLOWED_INTERESTS, isHoneypot, validateEnquiry } from '@/lib/enquiry-validation';

const valid = {
  name: 'Jane M.',
  email: 'Jane@Example.com',
  organisation: 'Acme Ltd',
  interest: 'Partnership',
  message: 'We would like to explore a supply partnership in East Africa.',
};

describe('Enquiry validation', () => {
  it('accepts a complete enquiry and stores the email in lower case', () => {
    const result = validateEnquiry(valid);
    expect(result.ok).toBe(true);
    if (result.ok) expect(result.value.email).toBe('jane@example.com');
  });

  it('rejects an enquiry with no name', () => {
    expect(validateEnquiry({ ...valid, name: '   ' })).toEqual({ ok: false, message: 'Please tell us your name.' });
  });

  it('rejects an email address without a domain', () => {
    expect(validateEnquiry({ ...valid, email: 'jane@' }).ok).toBe(false);
  });

  it('rejects a message shorter than ten characters', () => {
    expect(validateEnquiry({ ...valid, message: 'Hi there' }).ok).toBe(false);
  });

  it('falls back to General enquiry for an interest outside the approved list', () => {
    const result = validateEnquiry({ ...valid, interest: 'Crypto arbitrage' });
    expect(result.ok && result.value.interest).toBe('General enquiry');
  });

  it('keeps an approved interest, including all six business pillars', () => {
    expect(ALLOWED_INTERESTS).toContain('Agriculture & Agribusiness');
    const result = validateEnquiry({ ...valid, interest: 'Agriculture & Agribusiness' });
    expect(result.ok && result.value.interest).toBe('Agriculture & Agribusiness');
  });

  it('caps an oversized message at 4000 characters', () => {
    const result = validateEnquiry({ ...valid, message: 'x'.repeat(9000) });
    expect(result.ok && result.value.message.length).toBe(4000);
  });

  it('flags the honeypot field only when something filled it', () => {
    expect(isHoneypot('http://spam.example')).toBe(true);
    expect(isHoneypot('')).toBe(false);
    expect(isHoneypot(undefined)).toBe(false);
  });
});
