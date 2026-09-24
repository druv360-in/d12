import { Sparkles } from "lucide-react";

function HeroBanner02() {
  return (
    <section className="bg-[#7c3aed] px-5 pt-7 pb-8 flex items-center justify-between gap-4">
      <div className="flex-1">
        <h2 className="text-white text-[28px] font-bold leading-[1.2] mb-2">
          Hey, Welcome! <span className="ml-1">👋</span>
        </h2>

        <p className="text-[15px] leading-[1.5] font-normal text-white/90">
          Discover talented student freelancers for your next project
        </p>
      </div>

      <button className="w-11 h-[60px] rounded-[22px] bg-white/20 text-white flex items-center justify-center shrink-0 hover:bg-white/30 transition">
        <Sparkles size={20} strokeWidth={2} />
      </button>
    </section>
  );
}

export default HeroBanner02;