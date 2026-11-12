import { createServerFn } from '@tanstack/react-start';
import { isHoneypot, validateEnquiry, type EnquiryInput } from './enquiry-validation';

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

export const submitEnquiry = createServerFn({ method: 'POST' })
  .inputValidator((input: unknown) => input as EnquiryInput)
  .handler(async ({ data }) => {
    if (isHoneypot(data.website)) return { ok: true as const };

    const result = validateEnquiry(data);
    if (!result.ok) return { ok: false as const, message: result.message };

    const { supabaseAdmin } = await import('@/integrations/supabase/client.server');

    const since = new Date(Date.now() - RATE_LIMIT_WINDOW_MS).toISOString();
    const { count } = await supabaseAdmin
      .from('enquiries')
      .select('id', { count: 'exact', head: true })
      .eq('email', result.value.email)
      .gte('created_at', since);

    if ((count ?? 0) >= RATE_LIMIT_MAX) {
      return { ok: false as const, message: 'We have already received several enquiries from this email address. Please try again later.' };
    }

    const { error } = await supabaseAdmin.from('enquiries').insert(result.value);
    if (error) {
      console.error('Enquiry could not be recorded:', error);
      return { ok: false as const, message: 'We could not record your enquiry. Please email us directly instead.' };
    }

    return { ok: true as const };
  });
