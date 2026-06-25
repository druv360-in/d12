// 63. Why SkillBuster Section
function WhySkillBusterSection() {
  const points = [
    "Budget-friendly rates from skilled students",
    "Build full remote teams at fraction of cost",
    "Access premium templates marketplace",
    "Post projects & get quality proposals",
    "Help students gain real-world experience",
    "Verified portfolios & skill ratings",
  ];

  return (
    <div className="bg-violet-600 rounded-2xl p-5 text-white">
      <h3 className="font-bold text-lg flex items-center gap-2 mb-3">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
        </svg>
        Why SkillBuster?
      </h3>
      <ul className="flex flex-col gap-2 mb-4">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2 text-sm">
            <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{p}</span>
          </li>
        ))}
      </ul>
      <p className="text-xs text-[#E9D9FF] border-t border-white/20 pt-3">
        🔒 Small 10% commission • ⚡ Quality control • 🛡️ Trust & safety guaranteed
      </p>
    </div>
  );
}
export default WhySkillBusterSection;