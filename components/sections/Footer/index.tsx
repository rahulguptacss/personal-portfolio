import type { FooterData } from '../../types';

export default function Footer({ data }: { data: FooterData }) {
  return (
    <footer className="bg-[#eef3fb] px-4 py-6 sm:px-8">
      <div className="mx-auto flex max-w-[1080px] items-center gap-4 sm:gap-6">
        <span className="h-px min-w-[32px] flex-1 bg-[#2563eb]" />
        <p className="shrink text-center text-[14px] text-[#64748b] sm:text-[15px]">
          {data.copyright_before} <span className="font-bold text-[#172033]">{data.name}</span>
          {data.copyright_after}
        </p>
        <span className="h-px min-w-[32px] flex-1 bg-[#2563eb]" />
      </div>
    </footer>
  );
}
