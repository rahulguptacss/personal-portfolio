import data from '../data/data.json';

export interface NavLink {
  name: string;
  href: string;
}

export interface HeaderData {
  name: string;
  name_highlight: string;
  role: string;
  avatar: string;
  links: NavLink[];
  socials: NavLink[];
}

export interface FooterData {
  copyright_before: string;
  name: string;
  copyright_after: string;
}

export interface HeroSectionData {
  id: string;
  eyebrow: string;
  name: string;
  name_highlight: string;
  role: string;
  description: string;
  button_text: string;
  button_href: string;
  cv_text: string;
  cv_href: string;
  image: string;
}

export interface AboutSectionData {
  id: string;
  title: string;
  title_highlight: string;
  description: string;
  image: string;
  role: string;
  summary: string;
  note: string;
  facts: { icon: string; label: string; value: string }[];
}

export interface SkillsSectionData {
  id: string;
  eyebrow: string;
  title: string;
  title_highlight: string;
  description: string;
  items: { name: string; value: number; icon: string }[];
  tags: { name: string; icon: string }[];
}

export interface ServicesSectionData {
  id: string;
  eyebrow: string;
  title: string;
  title_highlight: string;
  description: string;
  items: { icon: string; title: string; text: string }[];
}

export interface ProjectsSectionData {
  id: string;
  eyebrow: string;
  title: string;
  title_highlight: string;
  description: string;
  items: { title: string; href: string }[];
}

export interface ExperienceSectionData {
  id: string;
  eyebrow: string;
  title: string;
  title_highlight: string;
  description: string;
  items: { years: string; icon: string; title: string; place: string; points: string[] }[];
}

export interface TestimonialsSectionData {
  id: string;
  eyebrow: string;
  title: string;
  title_highlight: string;
  description: string;
  items: { quote: string; name: string; role: string; image: string; stars: number }[];
}

export interface ContactSectionData {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  address_title: string;
  phone_title: string;
  email_title: string;
  address: string;
  phone: string;
  email: string;
  name_label: string;
  email_label: string;
  subject_label: string;
  message_label: string;
  name_placeholder: string;
  email_placeholder: string;
  subject_placeholder: string;
  message_placeholder: string;
  button_text: string;
  success_message: string;
  map_embed: string;
}

export const siteJson = data;
export const common = data.common;
export const template = data.categories.Portfolio.templateComponents['template-1'];
export const pages = template.pages;
export const sections = template.sections;
