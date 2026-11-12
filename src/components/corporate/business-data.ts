import { MonitorCog, BriefcaseBusiness, Globe2, TrendingUp, Sprout, PackageCheck } from 'lucide-react';
export const businesses = [
  { name: 'Technology & ICT Solutions', icon: MonitorCog, description: 'Connecting businesses with practical digital solutions, ICT infrastructure and technology-led innovation.' },
  { name: 'Business Consulting & Advisory', icon: BriefcaseBusiness, description: 'Strategic thinking, commercial insight and advisory support to help enterprises move forward.' },
  { name: 'International Trade & Commerce', icon: Globe2, description: 'Connecting markets, facilitating trade and opening doors to opportunities across borders.' },
  { name: 'Investments & Enterprise Development', icon: TrendingUp, description: 'Identifying promising opportunities and nurturing enterprises with a long-term perspective.' },
  { name: 'Agriculture & Agribusiness', icon: Sprout, description: 'Exploring sustainable agricultural opportunities and strengthening value chains from farm to market.' },
  { name: 'General Supplies & Procurement', icon: PackageCheck, description: 'Supporting organisations with sourcing, general supplies and dependable procurement solutions.' },
];
export const aboutCopy = {
  summary: 'A diversified business and investment group incorporated in Kenya, connecting expertise and opportunity across six complementary sectors.',
  intro: 'YIREHSHAM GROUP LTD is a diversified business and investment group incorporated in Kenya, bringing together expertise and opportunities across technology, business consulting, international trade, investments, agribusiness and general supplies.',
  approach: 'We are guided by a strategic approach to business development, innovation and value creation. Our focus is on identifying emerging opportunities, developing practical solutions, facilitating strategic partnerships and supporting enterprises through the delivery of products, services and innovative business solutions.',
  bridge: 'Through our diverse business interests, we aim to bridge the gap between ideas and implementation, connect markets, strengthen commercial relationships and contribute to sustainable economic growth. We recognise the importance of adaptability, operational excellence and forward-thinking strategies in an increasingly interconnected business environment.',
  valuesLine: 'Our approach is built on integrity, professionalism, collaboration and a commitment to delivering meaningful value to the businesses, institutions, partners and communities we engage with.',
  values: ['Integrity', 'Professionalism', 'Collaboration', 'Commitment to Value'],
  outlook: 'With an international outlook and a strong interest in opportunities across Africa and beyond, YIREHSHAM GROUP LTD is positioned to engage across multiple sectors, foster strategic relationships and pursue commercially sustainable opportunities.',
  tagline: 'Building Businesses. Connecting Opportunities. Creating Impact.',
};
export const contact = {
  email: 'yirehshamgroupltd@gmail.com',
  emailHref: 'mailto:yirehshamgroupltd@gmail.com',
  phone: '+254 704 769 728',
  phoneHref: 'tel:+254704769728',
  whatsappHref: 'https://wa.me/254704769728',
  location: 'Kenya · East Africa',
};
export function pageHead(title: string, description: string) {
  const fullTitle = `${title} | YIREHSHAM GROUP LTD`;
  return { meta: [{ title: fullTitle }, { name: 'description', content: description }, { property: 'og:title', content: fullTitle }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}
