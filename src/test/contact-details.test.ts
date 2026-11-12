import { describe, expect, it } from 'vitest';
import { contact } from '@/components/corporate/business-data';

describe('Company contact details', () => {
  it('shows the email address the company supplied', () => {
    expect(contact.email).toBe('yirehshamgroupltd@gmail.com');
    expect(contact.emailHref).toBe('mailto:yirehshamgroupltd@gmail.com');
  });

  it('shows the phone number the company supplied in dialable form', () => {
    expect(contact.phone).toBe('+254 704 769 728');
    expect(contact.phoneHref).toBe('tel:+254704769728');
    expect(contact.whatsappHref).toBe('https://wa.me/254704769728');
  });
});
