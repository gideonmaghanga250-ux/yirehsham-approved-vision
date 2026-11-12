import { createFileRoute } from '@tanstack/react-router';
import { useState, type FormEvent } from 'react';
import { CheckCircle2, Loader2, Mail, MapPin, MessageSquareText, Phone } from 'lucide-react';
import { SiteShell, PageHeading } from '@/components/corporate/site-shell';
import { Button } from '@/components/ui/button';
import { businesses, contact, pageHead } from '@/components/corporate/business-data';
import { submitEnquiry } from '@/lib/enquiries.server';

export const Route = createFileRoute('/contact')({
  component: Contact,
  head: () => pageHead('Contact Us', 'Email or call YIREHSHAM GROUP LTD in Kenya, or send a business or partnership enquiry across our six sectors.'),
});

type Status = 'idle' | 'sending' | 'sent' | 'failed';

function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [problem, setProblem] = useState('');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus('sending');
    setProblem('');

    const result = await submitEnquiry({
      data: {
        name: data.get('Name'),
        email: data.get('Email'),
        organisation: data.get('Organisation'),
        interest: data.get('Interest'),
        message: data.get('Message'),
        website: data.get('website'),
      },
    });

    if (result.ok) {
      form.reset();
      setStatus('sent');
    } else {
      setProblem(result.message);
      setStatus('failed');
    }
  }

  return (
    <SiteShell>
      <PageHeading eyebrow="Connect with us" title="Let's Build Something Meaningful." description="Start a conversation about business, partnerships or an opportunity across our six sectors." />
      <section className="section">
        <div className="site-container contact-layout">
          <div>
            <div className="eyebrow text-primary">Business & partnership enquiries</div>
            <h2 className="section-heading">Open to opportunity.</h2>
            <p className="copy mt-5">Share your interests and the opportunity you have in mind.</p>
            <div className="contact-details">
              <a className="contact-detail" href={contact.emailHref}><Mail size={16} /><span>{contact.email}</span></a>
              <a className="contact-detail" href={contact.phoneHref}><Phone size={16} /><span>{contact.phone}</span></a>
              <a className="contact-detail" href={contact.whatsappHref} target="_blank" rel="noreferrer"><MessageSquareText size={16} /><span>WhatsApp us</span></a>
              <div className="contact-detail"><MapPin size={16} /><span>{contact.location}</span></div>
            </div>
            <p className="enquiry-note">Enquiries sent with this form are recorded for our team to review. Prefer email? Write to us directly at <a href={contact.emailHref}>{contact.email}</a>.</p>
          </div>
          <form className="enquiry-form" onSubmit={submit}>
            <label className="form-field">Full name<input name="Name" required autoComplete="name" /></label>
            <label className="form-field">Email address<input name="Email" required type="email" autoComplete="email" /></label>
            <label className="form-field">Organisation<input name="Organisation" autoComplete="organization" /></label>
            <label className="form-field">Area of interest<select name="Interest" defaultValue="Partnership"><option>Partnership</option>{businesses.map(b => <option key={b.name}>{b.name}</option>)}<option>General enquiry</option></select></label>
            <label className="form-field form-wide">Your message<textarea name="Message" required rows={5} /></label>
            <label className="hp" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
            <div className="form-wide">
              <Button variant="corporate" type="submit" className="h-11" disabled={status === 'sending'}>
                {status === 'sending' ? <><Loader2 className="animate-spin" /> Sending…</> : <>Send Enquiry <Mail /></>}
              </Button>
              {status === 'sent' && <p role="status" className="text-primary text-sm mt-4 flex gap-2 items-center"><CheckCircle2 size={16} />Thank you. Your enquiry has been recorded.</p>}
              {status === 'failed' && <p role="alert" className="text-sm mt-4" style={{ color: 'var(--destructive)' }}>{problem}</p>}
            </div>
          </form>
        </div>
      </section>
    </SiteShell>
  );
}
