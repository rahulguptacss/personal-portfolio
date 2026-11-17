'use client';

import { motion } from 'framer-motion';
import type { AboutSectionData } from '../../types';

function FactIcon({ name }: { name: string }) {
  const common = { viewBox: '0 0 24 24', className: 'h-[18px] w-[18px]', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true };
  if (name === 'calendar') {
    return <svg {...common}><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M8 3.5V7M16 3.5V7M4 10h16" /></svg>;
  }
  if (name === 'user') {
    return <svg {...common}><circle cx="12" cy="8" r="3.2" /><path d="M5.5 19.5c1.2-2.8 3.4-4.2 6.5-4.2s5.3 1.4 6.5 4.2" /></svg>;
  }
  if (name === 'globe') {
    return <svg {...common}><circle cx="12" cy="12" r="8" /><path d="M4 12h16M12 4c2.2 2.4 3.2 5 3.2 8s-1 5.6-3.2 8c-2.2-2.4-3.2-5-3.2-8s1-5.6 3.2-8Z" /></svg>;
  }
  if (name === 'cap') {
    return <svg {...common}><path d="m3.5 10 8.5-4.5L20.5 10 12 14.5 3.5 10Z" /><path d="M7 12.2V16c1.6 1.4 3.2 2 5 2s3.4-.6 5-2v-3.8M20.5 10v5" /></svg>;
  }
  if (name === 'phone') {
    return <svg {...common}><path d="M8 4.5h2.2l1 2.4-1.6 1a12 12 0 0 0 5.5 5.5l1-1.6 2.4 1V17a1.5 1.5 0 0 1-1.6 1.5A14.5 14.5 0 0 1 6.5 6.1 1.5 1.5 0 0 1 8 4.5Z" /></svg>;
  }
  if (name === 'mail') {
    return <svg {...common}><rect x="3.5" y="5.5" width="17" height="13" rx="2" /><path d="m4 7 8 6 8-6" /></svg>;
  }
  if (name === 'pin') {
    return <svg {...common}><path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" /><circle cx="12" cy="11" r="2" /></svg>;
  }
  return <svg {...common}><rect x="3.5" y="8" width="17" height="11" rx="2" /><path d="M8 8V6.5A2.5 2.5 0 0 1 10.5 4h3A2.5 2.5 0 0 1 16 6.5V8M3.5 13h17" /></svg>;
}

export default function About({ data }: { data: AboutSectionData }) {
  return (
    <section id={data.id} className="overflow-hidden bg-white py-8 sm:py-10">
      <div className="mx-auto max-w-[1080px] px-4">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="flex items-center gap-3 text-[32px] font-extrabold text-[#172033] sm:text-[42px]">
            <span className="h-[3px] w-8 rounded-full bg-[#2563eb] sm:w-12" />
            {data.title} <span className="text-[#2563eb]">{data.title_highlight}</span>
          </h2>
          <p className="mt-4 max-w-[760px] text-[15px] leading-7 text-[#334155] sm:text-[16px]">{data.description}</p>
        </motion.div>

        <div className="mt-8 grid items-center gap-6 lg:grid-cols-[300px_1fr] lg:gap-8">
          <motion.div className="overflow-hidden rounded-[22px] border-b-[7px] border-r-[7px] border-[#2563eb] shadow-[0_10px_30px_rgba(37,99,235,0.12)]" initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src={data.image} alt="" className="h-[320px] w-full object-cover sm:h-[360px]" />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-[26px] font-extrabold leading-tight text-[#172033] sm:text-[30px]">{data.role}</h3>
            <span className="mt-1.5 block h-[3px] w-16 rounded-full bg-[#2563eb]" />
            <p className="mt-2 text-[15px] italic leading-6 text-[#334155]">{data.summary}</p>

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {data.facts.map((fact, index) => (
                <motion.div key={fact.label} className="flex items-center gap-3" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }}>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#eaf1fb] text-[#2563eb]">
                    <FactIcon name={fact.icon} />
                  </span>
                  <p className="min-w-0 text-[14px] text-[#172033]">
                    <span className="font-bold">{fact.label}:</span> {fact.value}
                  </p>
                </motion.div>
              ))}
            </div>

            <p className="mt-3 text-[15px] leading-7 text-[#334155]">{data.note}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
