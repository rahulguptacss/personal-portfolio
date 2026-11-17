'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import type { ContactSectionData } from '../../types';

const field = 'w-full rounded-xl border border-[#e5e7eb] bg-white py-3 pl-11 pr-3 text-[14px] text-[#111827] outline-none focus:border-[#2563eb]';

export default function Contact({ data }: { data: ContactSectionData }) {
  const [sent, setSent] = useState(false);

  return (
    <section id={data.id} className="bg-white py-8 sm:py-10">
      <div className="mx-auto max-w-[1080px] px-4">
        <motion.div className="text-center sm:text-left" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="flex items-center justify-center gap-3 text-[13px] font-semibold tracking-[0.16em] text-[#2563eb] sm:justify-start">
            <span className="h-px w-8 bg-[#2563eb]" />
            {data.eyebrow}
            <span className="h-px w-8 bg-[#2563eb]" />
          </p>
          <h2 className="mt-3 text-[36px] font-extrabold text-[#172033] sm:text-[44px]">{data.title}</h2>
          <p className="mt-2 max-w-[640px] text-[15px] text-[#4b5563]">{data.description}</p>
        </motion.div>

        <div className="mt-8 grid items-stretch gap-5 lg:grid-cols-2">
          <motion.div className="flex h-full flex-col rounded-[22px] border border-[#e8eef6] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)]" initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="space-y-4">
              {[
                { title: data.address_title, value: data.address, href: '' },
                { title: data.phone_title, value: data.phone, href: `tel:${data.phone}` },
                { title: data.email_title, value: data.email, href: `mailto:${data.email}` },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 border-b border-[#eef2f7] pb-4 last:border-0">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eef4ff] text-[#2563eb]">
                    {item.title === data.address_title && <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11z" /><circle cx="12" cy="10" r="2" /></svg>}
                    {item.title === data.phone_title && <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 4h3l2 5-2 1a12 12 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 6a2 2 0 0 1 2-2z" /></svg>}
                    {item.title === data.email_title && <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 7 9-7" /></svg>}
                  </span>
                  <div>
                    <p className="font-semibold text-[#172033]">{item.title}</p>
                    {item.href ? <a href={item.href} className="text-[14px] text-[#4b5563]">{item.value}</a> : <p className="text-[14px] text-[#4b5563]">{item.value}</p>}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-2 min-h-[220px] flex-1 overflow-hidden rounded-2xl border border-[#e8eef6]">
              <iframe title={data.address_title} src={data.map_embed} className="h-full min-h-[220px] w-full border-0" />
            </div>
          </motion.div>

          <motion.form
            className="flex h-full flex-col rounded-[22px] border border-[#e8eef6] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
            }}
          >
            <div className="flex flex-1 flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-[14px] font-semibold text-[#172033]">
                {data.name_label} <span className="text-[#2563eb]">*</span>
                <span className="relative mt-2 block">
                  <svg viewBox="0 0 24 24" className="absolute left-3 top-3 h-5 w-5 text-[#94a3b8]" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="8" r="3" /><path d="M5 19a7 7 0 0 1 14 0" /></svg>
                  <input required placeholder={data.name_placeholder} className={field} />
                </span>
              </label>
              <label className="block text-[14px] font-semibold text-[#172033]">
                {data.email_label} <span className="text-[#2563eb]">*</span>
                <span className="relative mt-2 block">
                  <svg viewBox="0 0 24 24" className="absolute left-3 top-3 h-5 w-5 text-[#94a3b8]" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 7 9-7" /></svg>
                  <input required type="email" placeholder={data.email_placeholder} className={field} />
                </span>
              </label>
              </div>
              <label className="block text-[14px] font-semibold text-[#172033]">
                {data.subject_label} <span className="text-[#2563eb]">*</span>
                <span className="relative mt-2 block">
                  <svg viewBox="0 0 24 24" className="absolute left-3 top-3 h-5 w-5 text-[#94a3b8]" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 7h16M4 12h10M4 17h7" /></svg>
                  <input required placeholder={data.subject_placeholder} className={field} />
                </span>
              </label>
              <label className="flex min-h-[160px] flex-1 flex-col text-[14px] font-semibold text-[#172033]">
                <span>{data.message_label} <span className="text-[#2563eb]">*</span></span>
                <span className="relative mt-2 block min-h-[120px] flex-1">
                  <svg viewBox="0 0 24 24" className="absolute left-3 top-3 h-5 w-5 text-[#94a3b8]" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 6h14v10H8l-3 3V6z" /></svg>
                  <textarea required placeholder={data.message_placeholder} className={`${field} h-full min-h-[120px] resize-none py-3`} />
                </span>
              </label>
            </div>
            <motion.button type="submit" whileHover={{ y: -2 }} className="mt-5 inline-flex w-fit items-center gap-2 self-start rounded-xl bg-[#2563eb] px-6 py-3 text-[15px] font-semibold text-white">
              {data.button_text}
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 12l16-7-6 16-2-6-8-3z" /></svg>
            </motion.button>
            {sent && <p className="mt-3 text-sm font-medium text-[#2563eb]">{data.success_message}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
