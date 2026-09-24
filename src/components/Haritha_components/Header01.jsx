import { Menu, ShoppingCart, Zap } from "lucide-react";

function Header01() {
  return (
    <div className="w-full max-w-[430px] mx-auto">
      <header className="h-20 bg-white flex items-center justify-between px-5 border-b border-gray-100">

        {/* Left Menu Button */}
        <button className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-slate-700">
          <Menu size={30} strokeWidth={2.3} />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-violet-700 flex items-center justify-center shadow-lg">
            <Zap size={18} strokeWidth={3} className="text-white" />
          </div>

          <h1 className="text-[23px] font-extrabold tracking-[-0.8px] text-slate-900">
            SkillBuster
          </h1>
        </div>

        {/* Cart Button */}
        <button className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-700">
          <ShoppingCart size={28} strokeWidth={2.2} />
        </button>

      </header>
    </div>
  );
}

export default Header01;