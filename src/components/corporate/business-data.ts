import { MonitorCog, BriefcaseBusiness, Globe2, TrendingUp, Sprout, PackageCheck } from 'lucide-react';
export const businesses = [
  { name: 'Technology & ICT Solutions', icon: MonitorCog, description: 'Connecting businesses with practical digital solutions, ICT infrastructure and technology-led innovation.' },
  { name: 'Business Consulting & Advisory', icon: BriefcaseBusiness, description: 'Strategic thinking, commercial insight and advisory support to help enterprises move forward.' },
  { name: 'International Trade & Commerce', icon: Globe2, description: 'Connecting markets, facilitating trade and opening doors to opportunities across borders.' },
  { name: 'Investments & Enterprise Development', icon: TrendingUp, description: 'Identifying promising opportunities and nurturing enterprises with a long-term perspective.' },
  { name: 'Agriculture & Agribusiness', icon: Sprout, description: 'Exploring sustainable agricultural opportunities and strengthening value chains from farm to market.' },
  { name: 'General Supplies & Procurement', icon: PackageCheck, description: 'Supporting organisations with sourcing, general supplies and dependable procurement solutions.' },
];
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
