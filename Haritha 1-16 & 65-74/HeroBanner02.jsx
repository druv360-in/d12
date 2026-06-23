import { Sparkles } from "lucide-react";

function HeroBanner02() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2 className="hero-title">
          Hey, Welcome! <span className="hand">👋</span>
        </h2>
        <p className="hero-text">
          Discover talented student freelancers for your next project
        </p>
      </div>
      <button className="hero-icon-btn">
        <Sparkles size={20} strokeWidth={2} />
      </button>
    </section>
  );
}

export default HeroBanner02;