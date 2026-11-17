'use client';

import { useLayoutEffect, useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function PinnedPanels({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const node = root.current;
    if (!node) return;

    const panels = gsap.utils.toArray<HTMLElement>(node.querySelectorAll('section'));
    const ctx = gsap.context(() => {
      const desktop = window.matchMedia('(min-width: 1024px)').matches;
      const offset = desktop ? 0 : 64;

      panels.forEach((panel, index) => {
        gsap.set(panel, { zIndex: index + 1, position: 'relative' });
        ScrollTrigger.create({
          trigger: panel,
          start: () => (panel.offsetHeight < window.innerHeight - offset ? `top ${offset}px` : `bottom bottom`),
          pin: true,
          pinSpacing: false,
          id: panel.id || `panel-${index}`,
        });
      });
    }, node);

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      ctx.revert();
    };
  }, []);

  return <div ref={root}>{children}</div>;
}
