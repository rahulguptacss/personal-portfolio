'use client';

import { motion } from 'framer-motion';
import type { ProjectsSectionData } from '../../types';

export default function Projects({ data }: { data: ProjectsSectionData }) {
  return (
    <section id={data.id} className="bg-[#eef3fb] py-8 sm:py-10">
      <div className="mx-auto max-w-[1100px] px-4">
        <motion.div className="text-center" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="flex items-center justify-center gap-3 text-[32px] font-extrabold text-[#172033] sm:text-[42px]">
            <span className="h-px w-8 bg-[#2563eb] sm:w-12" />
            {data.title} <span className="text-[#2563eb]">{data.title_highlight}</span>
          </h2>
          <p className="mt-2 text-[15px] text-[#4b5563]">{data.description}</p>
        </motion.div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {data.items.map((item, index) => (
            <motion.article
              key={item.title}
              className="text-center"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <motion.a href={item.href} target="_blank" rel="noreferrer" whileHover={{ y: -6 }} className="block overflow-hidden rounded-2xl border border-[#e8eef8] bg-white shadow-[0_12px_28px_rgba(37,99,235,0.08)]">
                <div className="flex items-center gap-1.5 border-b border-[#eef2f7] px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                <span className="relative block h-40 overflow-hidden bg-[#f4f7fb] sm:h-36">
                  <img src={`https://s.wordpress.com/mshots/v1/${encodeURIComponent(item.href)}?w=800`} alt="" className="h-full w-full object-cover object-top" />
                </span>
              </motion.a>
              <h3 className="mt-3 text-[16px] font-bold text-[#172033]">
                <a href={item.href} target="_blank" rel="noreferrer" className="hover:text-[#2563eb]">{item.title}</a>
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
