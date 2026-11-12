import { createFileRoute } from '@tanstack/react-router';
import { SiteShell, PageHeading, PartnerBand } from '@/components/corporate/site-shell';
import { PillarGrid } from '@/components/corporate/pillar-grid';
import { pageHead } from '@/components/corporate/business-data';
export const Route=createFileRoute('/businesses')({component:Businesses,head:()=>pageHead('Our Businesses','Explore YIREHSHAM’s six business pillars: technology, consulting, trade, investments, agriculture and procurement.')});
function Businesses(){return <SiteShell><PageHeading eyebrow="Our business pillars" title="Diverse Sectors. Shared Ambition." description="Six complementary business pillars, connected by a commitment to practical solutions and long-term enterprise development."/><section className="section business-section"><div className="site-container"><PillarGrid enquiries/></div></section><PartnerBand/></SiteShell>}
