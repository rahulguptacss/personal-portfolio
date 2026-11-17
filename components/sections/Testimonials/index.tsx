'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import type { TestimonialsSectionData } from '../../types';

function Card({ item }: { item: TestimonialsSectionData['items'][number] }) {
  return (
    <article className="flex h-full w-full flex-col">
      <div className="relative flex h-full flex-col rounded-[22px] border border-[#e8eef6] bg-white px-6 py-6 shadow-[0_12px_30px_rgba(37,99,235,0.06)]">
        <span className="text-[34px] font-bold leading-none text-[#2563eb]">“</span>
        <p className="mt-1 text-[15px] font-semibold leading-7 text-[#172033]">{item.quote}</p>
        <span className="mt-auto block text-right text-[34px] font-bold leading-none text-[#2563eb]">”</span>
        <span className="absolute -bottom-3 left-16 h-6 w-6 rotate-45 border-b border-r border-[#e8eef6] bg-white" />
      </div>
      <div className="mt-6 flex items-center gap-3 pl-2">
        <img src={item.image} alt="" className="h-16 w-16 rounded-full border-4 border-white object-cover shadow" />
        <span className="h-10 w-px bg-[#dbe4f0]" />
        <div>
          <p className="font-bold text-[#172033]">{item.name}</p>
          <p className="text-[13px] text-[#64748b]">{item.role}</p>
          <p className="text-[14px] tracking-wide text-[#f5b400]">{'★'.repeat(item.stars)}</p>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials({ data }: { data: TestimonialsSectionData }) {
  const view = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [card, setCard] = useState(0);
  const [perView, setPerView] = useState(2);
  const [smooth, setSmooth] = useState(true);
  const total = data.items.length;
  const slides = [...data.items, ...data.items.slice(0, perView)];

  useEffect(() => {
    const measure = () => {
      const width = view.current?.clientWidth ?? 0;
      const count = width < 640 ? 1 : 2;
      setPerView(count);
      setCard(width / count);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const go = (step: number) => {
    if (step < 0 && index === 0) {
      setSmooth(false);
      setIndex(total);
      window.setTimeout(() => {
        setSmooth(true);
        setIndex(total - 1);
      }, 30);
      return;
    }
    setSmooth(true);
    setIndex((current) => current + step);
  };

  useEffect(() => {
    if (index < total) return;
    const timer = window.setTimeout(() => {
      setSmooth(false);
      setIndex(0);
    }, 460);
    return () => window.clearTimeout(timer);
  }, [index, total]);

  useEffect(() => {
    if (paused || total < 2) return;
    const timer = window.setInterval(() => go(1), 4000);
    return () => window.clearInterval(timer);
  }, [paused, total, index]);

  return (
    <section id={data.id} className="bg-[#f4f7fd] py-8 sm:py-10">
      <div className="mx-auto max-w-[1080px] px-4">
        <motion.div className="text-center" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="flex items-center justify-center gap-3 text-[32px] font-extrabold text-[#172033] sm:text-[42px]">
            <span className="hidden h-px w-10 bg-[#2563eb] sm:block" />
            {data.title} <span className="text-[#2563eb]">{data.title_highlight}</span>
            <span className="hidden h-px w-10 bg-[#2563eb] sm:block" />
          </h2>
          <p className="mt-2 text-[15px] text-[#4b5563]">{data.description}</p>
        </motion.div>

        <div ref={view} className="relative mt-8 overflow-hidden" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <motion.div className="flex" animate={{ x: -index * card }} transition={{ duration: smooth ? 0.45 : 0, ease: 'easeInOut' }}>
            {slides.map((item, slideIndex) => (
              <div key={`${item.name}-${slideIndex}`} className="flex shrink-0 px-2" style={{ width: card || '50%' }}>
                <Card item={item} />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-3">
          <button type="button" aria-label="Previous" onClick={() => go(-1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d7e2f0] bg-white text-[#172033] transition hover:-translate-y-0.5 hover:border-[#2563eb] hover:bg-[#2563eb] hover:text-white">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 6l-6 6 6 6" /></svg>
          </button>
          <div className="flex gap-2">
            {data.items.map((item, dot) => (
              <button key={item.name} type="button" aria-label={item.name} onClick={() => { setSmooth(true); setIndex(dot); }} className={`h-2.5 w-2.5 rounded-full ${dot === index % total ? 'bg-[#2563eb]' : 'bg-[#d5deea]'}`} />
            ))}
          </div>
          <button type="button" aria-label="Next" onClick={() => go(1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d7e2f0] bg-white text-[#172033] transition hover:-translate-y-0.5 hover:border-[#2563eb] hover:bg-[#2563eb] hover:text-white">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
