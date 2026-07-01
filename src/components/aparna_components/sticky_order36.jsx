import React from "react";
import { ShoppingCart } from "lucide-react";

const styles = {
  stickyOrderContainer: {
    position: "fixed",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "390px",
    maxWidth: "100%",
    background: "rgba(17, 24, 39, 0.96)",
    padding: "12px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    borderTop: "1px solid rgba(255, 255, 255, 0.08)",
    backdropFilter: "blur(10px)",
    zIndex: 1000,
  },

  cartButton: {
    width: "48px",
    height: "48px",
    border: "none",
    borderRadius: "14px",
    background: "#374151",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },

  orderButton: {
    flex: 1,
    height: "48px",
    border: "none",
    borderRadius: "14px",
    background: "linear-gradient(90deg, #6c63ff 0%, #8b5cf6 100%)",
    color: "white",
    fontSize: "15px",
    fontWeight: "700",
    cursor: "pointer",
  },
};

const StickyOrder36 = () => {
  return (
    <div style={styles.stickyOrderContainer}>

      <button style={styles.cartButton}>
        <ShoppingCart size={18} />
      </button>

      <button style={styles.orderButton}>
        Order Now - $299
      </button>

    </div>
  );
};

export default StickyOrder36;

