import React from "react";
import { ShoppingCart } from "lucide-react";

const StickyOrder36 = () => {
  return (
    <div className="sticky-order-container">

      <button className="cart-button">
        <ShoppingCart size={18} />
      </button>

      <button className="order-button">
        Order Now - $299
      </button>

    </div>
  );
};

export default StickyOrder36;