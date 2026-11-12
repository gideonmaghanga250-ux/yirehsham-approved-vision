import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { SiteShell, PageHeading, PartnerBand } from '@/components/corporate/site-shell';
import { aboutCopy, pageHead } from '@/components/corporate/business-data';

export const Route = createFileRoute('/about')({
  component: About,
  head: () => pageHead('About Us', aboutCopy.summary),
});

function About() {
  return (
    <SiteShell>
      <PageHeading eyebrow="About the group" title="A Group Built Around Opportunity" description={aboutCopy.intro} />

      <section className="section">
        <div className="site-container intro-layout">
          <div>
            <div className="eyebrow text-primary">Who we are</div>
            <h2 className="section-heading">Bridging the gap between<br />ideas and implementation.</h2>
          </div>
          <div>
            <p className="copy">{aboutCopy.approach}</p>
            <p className="copy mt-5">{aboutCopy.bridge}</p>
            <dl className="mt-8 grid grid-cols-2 gap-6 text-sm">
              <div>
                <dt className="text-muted-foreground text-xs mb-2">Country of incorporation</dt>
                <dd className="font-semibold">Kenya</dd>
              </div>
              <div>
                <dt className="text-muted-foreground text-xs mb-2">Company type</dt>
                <dd className="font-semibold">Private Limited Company</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section business-section">
        <div className="site-container">
          <div className="eyebrow text-primary">What guides us</div>
          <blockquote className="pull-quote">{aboutCopy.valuesLine}</blockquote>
          <div className="value-grid">
            {aboutCopy.values.map((value) => (
              <div className="value-item" key={value}>
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container intro-layout">
          <div>
            <div className="eyebrow text-primary">Our outlook</div>
            <h2 className="section-heading">Africa and beyond.</h2>
          </div>
          <div>
            <p className="copy">{aboutCopy.outlook}</p>
            <p className="tagline mt-6">{aboutCopy.tagline}</p>
            <Link className="text-link" to="/contact">
              Partner With Us <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <PartnerBand />
    </SiteShell>
  );
}
