import { describe, expect, it } from 'vitest';
import { businesses } from '@/components/corporate/business-data';

describe('Corporate business scope', () => {
  it('includes exactly the six principal pillars from the company brief', () => {
    expect(businesses.map(business => business.name)).toEqual([
      'Technology & ICT Solutions',
      'Business Consulting & Advisory',
      'International Trade & Commerce',
      'Investments & Enterprise Development',
      'Agriculture & Agribusiness',
      'General Supplies & Procurement',
    ]);
  });
});