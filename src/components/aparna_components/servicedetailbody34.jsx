import React from "react";
import ChatButton35 from "./chat_button35";

const styles = {
  serviceBody: {
    background: "#071225",
    padding: "14px",
  },

  serviceImageContainer: {
    borderRadius: "22px",
    overflow: "hidden",
    marginBottom: "16px",
  },

  serviceImage: {
    width: "100%",
    height: "260px",
    objectFit: "cover",
    display: "block",
  },

  serviceTitleSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "22px",
  },

  serviceTitle: {
    color: "white",
    fontSize: "30px",
    fontWeight: "700",
    lineHeight: "1.15",
    marginBottom: "10px",
  },

  ratingRow: {
    color: "white",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },

  ratingSpan: {
    fontWeight: "700",
  },

  ratingSmall: {
    color: "#9ca3af",
  },

  priceSection: {
    textAlign: "right",
  },

  priceText: {
    color: "#9ca3af",
    fontSize: "11px",
    marginBottom: "2px",
  },

  priceHeading: {
    color: "#6c63ff",
    fontSize: "34px",
    fontWeight: "700",
  },

  aboutSection: {
    marginTop: "24px",
  },

  skillsSection: {
    marginTop: "24px",
  },

  sectionHeading: {
    color: "white",
    fontSize: "18px",
    fontWeight: "700",
    marginBottom: "12px",
  },

  aboutText: {
    color: "#b8c0cc",
    lineHeight: "1.7",
    fontSize: "14px",
  },

  tagsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },

  skillTag: {
    background: "#ece9ff",
    color: "#6c63ff",
    borderRadius: "999px",
    padding: "6px 12px",
    fontSize: "12px",
    fontWeight: "600",
  },
};

const ServiceDetailsBody = ({ onChatClick }) => {
  return (
    <div style={styles.serviceBody}>

      {/* Hero Image */}
      <div style={styles.serviceImageContainer}>
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="Website Development"
          style={styles.serviceImage}
        />
      </div>

      {/* Service Title + Price */}
      <div style={styles.serviceTitleSection}>
        <div>
          <h2 style={styles.serviceTitle}>
            Modern Website Development
          </h2>

          <div style={styles.ratingRow}>
            ⭐ <span style={styles.ratingSpan}>4.9</span>
            <small style={styles.ratingSmall}>(45 reviews)</small>
          </div>
        </div>

        <div style={styles.priceSection}>
          <p style={styles.priceText}>Starting at</p>
          <h3 style={styles.priceHeading}>$299</h3>
        </div>
      </div>

      {/* ================= CHAT COMPONENT (COMPONENT 35) ================= */}
      <ChatButton35 onChat={onChatClick} />

      {/* About */}
      <section style={styles.aboutSection}>
        <h3 style={styles.sectionHeading}>About This Service</h3>

        <p style={styles.aboutText}>
          I will create a fully responsive, modern website using React and
          Tailwind CSS. Includes 5 pages, mobile optimization and clean code.
        </p>
      </section>

      {/* Skills */}
      <section style={styles.skillsSection}>
        <h3 style={styles.sectionHeading}>Skills & Tags</h3>

        <div style={styles.tagsContainer}>
          <span style={styles.skillTag}>React</span>
          <span style={styles.skillTag}>Tailwind</span>
          <span style={styles.skillTag}>Responsive</span>
          <span style={styles.skillTag}>Modern</span>
        </div>
      </section>

    </div>
  );
};

export default ServiceDetailsBody;

