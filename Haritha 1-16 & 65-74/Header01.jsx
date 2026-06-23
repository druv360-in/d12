import { Menu, Zap, ShoppingCart } from "lucide-react";

function Header01() {
  return (
    <header className="header">
      <button className="icon-btn">
        <Menu size={20} strokeWidth={2} />
      </button>

      <div className="logo">
        <div className="skillbuster-logo">
          <Zap size={16} strokeWidth={2.5} className="text-white" />
        </div>
        <h1 className="logo-text">SkillBuster</h1>
      </div>

      <button className="icon-btn cart-btn">
        <ShoppingCart size={20} strokeWidth={2} />
      </button>
    </header>
  );
}

export default Header01;