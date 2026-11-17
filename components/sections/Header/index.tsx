'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { HeaderData } from '../../types';

function NavIcon({ href }: { href: string }) {
  const common = 'h-[18px] w-[18px]';
  if (href === '#about') {
    return <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="8" r="3" /><path d="M5 19a7 7 0 0 1 14 0" /></svg>;
  }
  if (href === '#skills') {
    return <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M8 8l-4 4 4 4M16 8l4 4-4 4" /></svg>;
  }
  if (href === '#services') {
    return <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 4l8 4-8 4-8-4 8-4zM4 12l8 4 8-4M4 16l8 4 8-4" /></svg>;
  }
  if (href === '#projects') {
    return <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="7" width="18" height="12" rx="2" /><path d="M8 7V5h8v2" /></svg>;
  }
  if (href === '#experience') {
    return <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="7" width="18" height="12" rx="2" /><path d="M8 7V5h8v2M3 12h18" /></svg>;
  }
  if (href === '#stories') {
    return <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M7 16.5A3.5 3.5 0 0 1 10.5 13H12V8H8.5A2.5 2.5 0 0 0 6 10.5v6zM14 16.5A3.5 3.5 0 0 0 17.5 13H18V8h-3.5A2.5 2.5 0 0 0 12 10.5V16" /></svg>;
  }
  if (href === '#contact') {
    return <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M4 7l8 6 8-6" /></svg>;
  }
  return <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 11.5 12 5l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-8.5z" /></svg>;
}

function SocialIcon({ name }: { name: string }) {
  if (name === 'Instagram') {
    return <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="12" r="3.2" /><circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" /></svg>;
  }
  if (name === 'GitHub') {
    return <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M12 3a9 9 0 0 0-2.8 17.6c.4.1.6-.2.6-.4v-1.5c-2.5.5-3-1.2-3-1.2-.4-1-1-1.3-1-1.3-.8-.6.1-.6.1-.6.9.1 1.4.9 1.4.9.8 1.4 2.1 1 2.6.8.1-.6.3-1 .6-1.2-2-.2-4.1-1-4.1-4.4 0-1 .3-1.8.9-2.4-.1-.2-.4-1.2.1-2.4 0 0 .8-.3 2.6.9a9 9 0 0 1 4.8 0c1.8-1.2 2.6-.9 2.6-.9.5 1.2.2 2.2.1 2.4.6.6.9 1.4.9 2.4 0 3.4-2.1 4.2-4.1 4.4.3.3.6.8.6 1.6v2.4c0 .2.2.5.6.4A9 9 0 0 0 12 3z" /></svg>;
  }
  if (name === 'Behance') {
    return <span className="text-[11px] font-bold leading-none">Bē</span>;
  }
  return <span className="text-[11px] font-bold leading-none">in</span>;
}

export default function Header({ data }: { data: HeaderData }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(data.links[0]?.href ?? '#home');

  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    setOpen(false);
    window.setTimeout(() => {
      const section = document.getElementById(id);
      if (!section) return;
      gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
      const pinned = ScrollTrigger.getAll().find((trigger) => trigger.trigger === section && trigger.pin);
      gsap.to(window, {
        scrollTo: { y: pinned ? pinned.start : section, autoKill: false },
        duration: 0.7,
        overwrite: 'auto',
      });
    }, open ? 280 : 0);
  };

  useEffect(() => {
    const onScroll = () => {
      const line = 120;
      let current = data.links[0]?.href ?? '#home';
      data.links.forEach((link) => {
        const section = document.getElementById(link.href.replace('#', ''));
        if (section && section.getBoundingClientRect().top <= line) current = link.href;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [data.links]);

  const panel = (
    <div className="flex h-full flex-col bg-[#f4f8fc] px-5 py-7">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <img src={data.avatar} alt="" className="mx-auto h-[108px] w-[108px] rounded-full border-[7px] border-[#e7f0fc] object-cover" />
        <h1 className="mt-4 text-left text-[28px] font-extrabold leading-none tracking-tight text-[#172033]">
          {data.name} <span className="text-[#2563eb]">{data.name_highlight}</span>
        </h1>
        <p className="mt-2 text-left text-[15px] font-medium not-italic text-[#1e293b]">{data.role}</p>
      </motion.div>
      <div className="mb-4 mt-4 h-px w-full bg-[#cfd8e6]" />
      <nav className="space-y-1.5">
        {data.links.map((link, index) => {
          const on = active === link.href;
          return (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(event) => {
                event.preventDefault();
                scrollTo(link.href);
              }}
              className={`flex items-center gap-3 rounded-2xl px-4 py-2.5 text-[15px] font-semibold ${on ? 'bg-[#2563eb] text-white shadow-[0_8px_18px_rgba(37,99,235,0.28)]' : 'text-[#1e293b] hover:bg-white'}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.04 * index }}
            >
              <NavIcon href={link.href} />
              {link.name}
            </motion.a>
          );
        })}
      </nav>
      <div className="mt-4 flex justify-center gap-3 border-t border-[#e6edf5] pt-4">
        {data.socials.map((social) => (
          <a key={social.name} href={social.href} target="_blank" rel="noreferrer" aria-label={social.name} className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#d7e0ea] bg-white text-[#1e293b] transition hover:-translate-y-0.5 hover:border-[#2563eb] hover:text-[#2563eb]">
            <SocialIcon name={social.name} />
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <div className="sticky top-0 z-50 flex items-center justify-between border-b border-[#e3eaf3] bg-[#f4f8fc] px-4 py-3 lg:hidden">
        <div className="flex items-center gap-3">
          <img src={data.avatar} alt="" className="h-10 w-10 rounded-full border-2 border-[#d7e6fb] object-cover" />
          <p className="text-[16px] font-bold text-[#172033]">{data.name} <span className="text-[#2563eb]">{data.name_highlight}</span></p>
        </div>
        <button type="button" aria-label="Menu" onClick={() => setOpen((value) => !value)} className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#d7e0ea] bg-white text-[#172033]">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
        </button>
      </div>
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[280px] lg:block">{panel}</aside>
      <AnimatePresence>
        {open && (
          <motion.aside className="fixed inset-y-0 left-0 z-40 w-[280px] shadow-xl lg:hidden" initial={{ x: -280 }} animate={{ x: 0 }} exit={{ x: -280 }} transition={{ duration: 0.28 }}>
            {panel}
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
