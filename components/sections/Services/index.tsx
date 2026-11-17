'use client';

import { motion } from 'framer-motion';
import type { ServicesSectionData } from '../../types';

function Icon({ name }: { name: string }) {
  const common = 'h-6 w-6';
  if (name === 'code') return <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13 6l-2 12" /></svg>;
  if (name === 'device') return <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="5" width="12" height="9" rx="1.5" /><rect x="16" y="8" width="5" height="9" rx="1" /><path d="M7 17h4" /></svg>;
  if (name === 'cart') return <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 6h2l2 11h10l2-7H8" /><circle cx="10" cy="19" r="1" /><circle cx="17" cy="19" r="1" /></svg>;
  if (name === 'support') return <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="3" /><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4" /></svg>;
  if (name === 'wordpress') return <svg viewBox="0 0 24 24" className={common} fill="currentColor"><path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.212 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0" /></svg>;
  return <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8" /></svg>;
}

export default function Services({ data }: { data: ServicesSectionData }) {
  return (
    <section id={data.id} className="bg-white py-8 sm:py-10">
      <div className="mx-auto max-w-[1080px] px-4">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-[32px] font-extrabold text-[#172033] sm:text-[42px]">
            {data.title} <span className="text-[#2563eb]">{data.title_highlight}</span>
          </h2>
          <span className="mt-2 block h-[3px] w-14 rounded-full bg-[#2563eb]" />
          <p className="mt-3 max-w-[760px] text-[15px] text-[#4b5563]">{data.description}</p>
        </motion.div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {data.items.map((item, index) => (
            <motion.article
              key={item.title}
              className="group rounded-3xl border border-[#e7eef8] bg-white p-6 shadow-[0_10px_30px_rgba(37,99,235,0.05)]"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef4ff] text-[#2563eb] transition duration-300 group-hover:bg-[#2563eb] group-hover:text-white">
                <Icon name={item.icon} />
              </span>
              <h3 className="mt-5 text-[18px] font-bold text-[#172033]">{item.title}</h3>
              <p className="mt-2 text-[14px] leading-6 text-[#4b5563]">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
