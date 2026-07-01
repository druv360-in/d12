import React from "react";

const styles = {
  basicInfoCard: {
    padding: "22px",
    background: "#0f1c35",
    color: "white",
  },

  basicInfoHeader: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "22px",
  },

  headerTitle: {
    margin: 0,
    fontSize: "22px",
    fontWeight: "700",
  },

  basicInfoIcon: {
    color: "#7c5cff",
    fontSize: "22px",
  },

  uploadCard: {
    background: "#f5f1f7",
    borderRadius: "26px",
    padding: "24px",
    display: "flex",
    gap: "20px",
    marginBottom: "28px",
  },

  profileIconBox: {
    width: "110px",
    height: "110px",
    borderRadius: "22px",
    background: "linear-gradient(135deg, #5b3fff, #b020ff)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "48px",
    flexShrink: 0,
  },

  uploadContent: {
    flex: 1,
  },

  uploadTitle: {
    margin: 0,
    color: "#c4b6e7",
    fontSize: "18px",
    fontWeight: "700",
  },

  uploadText: {
    color: "#7f8da5",
    fontSize: "15px",
    lineHeight: "1.6",
    margin: "14px 0",
  },

  choosePhotoBtn: {
    background: "#081b39",
    color: "white",
    border: "none",
    borderRadius: "18px",
    padding: "14px 20px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
  },

  fieldGroup: {
    marginBottom: "24px",
  },

  label: {
    display: "block",
    marginBottom: "10px",
    color: "white",
    fontSize: "17px",
    fontWeight: "500",
  },

  required: {
    color: "#ff3d3d",
  },

  input: {
    width: "100%",
    boxSizing: "border-box",
    background: "#132647",
    border: "1px solid #22395e",
    borderRadius: "24px",
    padding: "18px 20px",
    color: "white",
    fontSize: "16px",
  },
};

const BasicInformationForm78 = () => {
  return (
    <div style={styles.basicInfoCard}>
      <div style={styles.basicInfoHeader}>
        <span style={styles.basicInfoIcon}>👤</span>

        <h3 style={styles.headerTitle}>
          Basic Information
        </h3>
      </div>

      <div style={styles.uploadCard}>
        <div style={styles.profileIconBox}>
          <span>👤</span>
        </div>

        <div style={styles.uploadContent}>
          <h4 style={styles.uploadTitle}>
            Profile Photo
          </h4>

          <p style={styles.uploadText}>
            Upload a professional photo,
            JPG/PNG up to 5MB.
          </p>

          <button style={styles.choosePhotoBtn}>
            ⤴ Choose Photo
          </button>
        </div>
      </div>

      <div style={styles.fieldGroup}>
        <label style={styles.label}>
          Full Name <span style={styles.required}>*</span>
        </label>

        <input
          type="text"
          placeholder="John Doe"
          style={styles.input}
        />
      </div>

      <div style={styles.fieldGroup}>
        <label style={styles.label}>
          Username / SkillBuster ID
        </label>

        <input
          type="text"
          placeholder="@ johndoe"
          style={styles.input}
        />
      </div>

      <div style={styles.fieldGroup}>
        <label style={styles.label}>
          Email Address <span style={styles.required}>*</span>
        </label>

        <input
          type="email"
          placeholder="john@university.edu"
          style={styles.input}
        />
      </div>

      <div style={styles.fieldGroup}>
        <label style={styles.label}>
          Phone Number <span style={styles.required}>*</span>
        </label>

        <input
          type="text"
          placeholder="+1 (555) 000-0000"
          style={styles.input}
        />
      </div>

      <div style={styles.fieldGroup}>
        <label style={styles.label}>
          Location
        </label>

        <input
          type="text"
          placeholder="San Francisco, CA"
          style={styles.input}
        />
      </div>
    </div>
  );
};

export default BasicInformationForm78;
