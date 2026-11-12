import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { businesses } from './business-data';
export function PillarGrid({ enquiries=false }: { enquiries?:boolean }) { return <div className="pillar-grid">{businesses.map((business,index)=><Link to={enquiries?'/contact':'/businesses'} key={business.name} className="pillar-card"><div className="pillar-top"><business.icon size={28} strokeWidth={1.5}/><span>0{index+1}</span></div><h3>{business.name}</h3><p>{business.description}</p><div className="text-link">{enquiries?'Discuss an opportunity':'Explore this sector'} <ArrowUpRight size={15}/></div></Link>)}</div>; }
