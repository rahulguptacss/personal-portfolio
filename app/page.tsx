import type { ReactNode } from 'react';
import Header from '../components/sections/Header';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Services from '../components/sections/Services';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';
import Footer from '../components/sections/Footer';
import BackToTop from '../components/sections/BackToTop';
import PinnedPanels from '../components/sections/PinnedPanels';
import { common, pages, sections } from '../components/types';

const sectionMap: Record<string, ReactNode> = {
  Hero: <Hero data={sections.hero} />,
  About: <About data={sections.about} />,
  Skills: <Skills data={sections.skills} />,
  Services: <Services data={sections.services} />,
  Projects: <Projects data={sections.projects} />,
  Experience: <Experience data={sections.experience} />,
  Testimonials: <Testimonials data={sections.testimonials} />,
  Contact: <Contact data={sections.contact} />,
};

export const metadata = {
  title: pages.home.metadata.title,
  description: pages.home.metadata.description,
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#0f172a]">
      <Header data={common.Header} />
      <div className="lg:pl-[280px]">
        <PinnedPanels>
          <main>
            {pages.home.components.map((block) => (
              <div key={block.key}>{sectionMap[block.component]}</div>
            ))}
          </main>
        </PinnedPanels>
        <Footer data={common.Footer} />
        <BackToTop />
      </div>
    </div>
  );
}
