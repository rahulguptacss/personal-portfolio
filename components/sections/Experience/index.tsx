'use client';

import { motion } from 'framer-motion';
import type { ExperienceSectionData } from '../../types';

function Icon({ name }: { name: string }) {
  const common = 'h-6 w-6';
  if (name === 'team') {
    return <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="8" cy="9" r="2" /><circle cx="16" cy="9" r="2" /><path d="M4 18a4 4 0 0 1 8 0M12 18a4 4 0 0 1 8 0" /></svg>;
  }
  if (name === 'screen') {
    return <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="5" width="18" height="12" rx="2" /><path d="M8 20h8" /></svg>;
  }
  if (name === 'cap') {
    return <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M3 10l9-5 9 5-9 5-9-5z" /><path d="M7 12v4c2 1.4 8 1.4 10 0v-4" /></svg>;
  }
  return <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="4" y="5" width="16" height="11" rx="2" /><path d="M8 20h8M9 10l-2 2 2 2M15 10l2 2-2 2" /></svg>;
}

export default function Experience({ data }: { data: ExperienceSectionData }) {
  return (
    <section id={data.id} className="bg-white py-8 sm:py-10">
      <div className="mx-auto max-w-[1080px] px-4">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="flex items-center gap-3 text-[32px] font-extrabold text-[#172033] sm:text-[42px]">
            {data.title} <span className="text-[#2563eb]">{data.title_highlight}</span>
            <span className="hidden h-px w-12 bg-[#2563eb] sm:block" />
          </h2>
          <p className="mt-2 max-w-[680px] text-[15px] text-[#4b5563]">{data.description}</p>
        </motion.div>

        <div className="relative mt-8 space-y-4 pl-0 sm:pl-[150px]">
          <span className="absolute bottom-6 left-[126px] top-6 hidden w-[3px] rounded-full bg-[#2563eb] sm:block" />
          {data.items.map((item, index) => (
            <motion.div key={item.years} className="group/row relative" initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.06 }}>
              <span className="absolute -left-[34px] top-1/2 hidden h-4 w-4 -translate-y-1/2 rounded-full border-[3px] border-[#2563eb] bg-white transition duration-300 group-hover/row:scale-125 group-hover/row:bg-[#2563eb] sm:block" />
              <span className="relative mb-2 inline-flex rounded-full bg-[#2563eb] px-3 py-1 text-[12px] font-semibold text-white transition duration-300 group-hover/row:-translate-x-1 group-hover/row:shadow-[0_8px_16px_rgba(37,99,235,0.35)] sm:absolute sm:-left-[148px] sm:top-1/2 sm:mb-0 sm:w-[100px] sm:-translate-y-1/2 sm:justify-center sm:group-hover/row:-translate-x-1 sm:group-hover/row:-translate-y-1/2">
                {item.years}
                <span className="absolute -right-1.5 top-1/2 hidden h-3.5 w-3.5 -translate-y-1/2 rotate-45 rounded-sm bg-[#2563eb] sm:block" />
              </span>
              <motion.article whileHover={{ y: -4, boxShadow: '0 14px 30px rgba(37,99,235,0.12)' }} transition={{ duration: 0.25 }} className="group flex flex-col gap-3 rounded-[20px] border border-[#e7eef8] bg-white px-4 py-3 shadow-[0_8px_24px_rgba(37,99,235,0.06)] transition-colors hover:border-[#2563eb] sm:flex-row sm:items-center sm:px-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eef4ff] text-[#2563eb] transition duration-300 group-hover:scale-110 group-hover:bg-[#2563eb] group-hover:text-white">
                  <Icon name={item.icon} />
                </span>
                <span className="hidden h-10 w-px bg-[#e6eef8] sm:block" />
                <div className="w-full sm:w-[250px] sm:shrink-0">
                  <h3 className="text-[18px] font-bold leading-6 text-[#172033]">{item.title}</h3>
                  <p className="text-[13px] text-[#64748b]">{item.place}</p>
                </div>
                <span className="hidden h-10 w-px bg-[#e6eef8] sm:block" />
                <ul className="space-y-1">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-[13px] leading-5 text-[#334155]">
                      <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-[#2563eb]" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M8 12l2.5 2.5L16 9" /></svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
