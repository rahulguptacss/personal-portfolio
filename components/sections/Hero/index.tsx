'use client';

import { motion } from 'framer-motion';
import type { HeroSectionData } from '../../types';

export default function Hero({ data }: { data: HeroSectionData }) {
  return (
    <section id={data.id} className="overflow-hidden bg-[#eef3fb] py-6 sm:py-8">
      <div className="mx-auto grid max-w-[1120px] items-center gap-8 px-4 lg:grid-cols-[0.92fr_1.08fr] lg:gap-6">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[12px] font-bold tracking-[0.16em] text-[#2563eb] shadow-[0_6px_18px_rgba(37,99,235,0.08)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2563eb]" />
            {data.eyebrow}
          </p>
          <h2 className="mt-4 text-[40px] font-extrabold leading-[1.05] tracking-tight text-[#172033] sm:text-[56px]">
            {data.name} <span className="text-[#2563eb]">{data.name_highlight}</span>
          </h2>
          <p className="mt-3 text-[20px] font-bold text-[#172033] sm:text-[24px]">{data.role}</p>
          <p className="mt-3 max-w-[440px] text-[15px] leading-7 text-[#3d4a5c] sm:text-[16px]">{data.description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <motion.a href={data.button_href} whileHover={{ y: -2 }} className="inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-6 py-3 text-[15px] font-semibold text-white shadow-[0_10px_22px_rgba(37,99,235,0.28)]">
              {data.button_text}
              <span aria-hidden>→</span>
            </motion.a>
            <motion.a href={data.cv_href} whileHover={{ y: -2 }} className="inline-flex items-center gap-2 rounded-full border border-[#c9d7f2] bg-white px-6 py-3 text-[15px] font-semibold text-[#172033]">
              {data.cv_text}
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M12 4v11M7 11l5 5 5-5M5 20h14" />
              </svg>
            </motion.a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <img src={data.image} alt="" className="h-[280px] w-full object-contain object-center sm:h-[380px] lg:h-[460px]" />
        </motion.div>
      </div>
    </section>
  );
}
