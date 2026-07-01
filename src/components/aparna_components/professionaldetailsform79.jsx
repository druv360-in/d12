import React, { useState } from "react";

const styles = {
  professionalDetailsCard: {
    padding: "22px",
    background: "#0f1c35",
    color: "white",
  },

  professionalHeader: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "22px",
  },

  professionalTitle: {
    margin: 0,
    fontSize: "18px",
    fontWeight: "700",
  },

  professionalIcon: {
    color: "#7c5cff",
  },

  fieldGroup: {
    marginBottom: "18px",
  },

  label: {
    display: "block",
    marginBottom: "8px",
    fontSize: "13px",
    color: "white",
  },

  required: {
    color: "#ff4b4b",
  },

  input: {
    width: "100%",
    boxSizing: "border-box",
    background: "#09162d",
    border: "1px solid #15284a",
    borderRadius: "12px",
    color: "white",
    padding: "12px",
    fontSize: "13px",
  },

  textarea: {
    width: "100%",
    boxSizing: "border-box",
    background: "#09162d",
    border: "1px solid #15284a",
    borderRadius: "12px",
    color: "white",
    padding: "12px",
    fontSize: "13px",
    resize: "none",
  },

  customSelect: {
    width: "100%",
    boxSizing: "border-box",
    background: "#09162d",
    border: "1px solid #15284a",
    borderRadius: "12px",
    color: "white",
    padding: "12px",
    fontSize: "13px",
    cursor: "pointer",
  },

  charCounter: {
    fontSize: "10px",
    color: "#7e8ca6",
    marginTop: "6px",
  },

  languageChips: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },

  languageChip: {
    border: "none",
    borderRadius: "16px",
    padding: "8px 14px",
    background: "#16274a",
    color: "white",
    fontSize: "12px",
    cursor: "pointer",
  },

  resumeUploadBox: {
    border: "1px dashed #32476f",
    borderRadius: "14px",
    padding: "20px",
    textAlign: "center",
  },

  resumeIcon: {
    fontSize: "26px",
    marginBottom: "8px",
  },

  resumeText: {
    color: "#a6b4cc",
    fontSize: "11px",
    lineHeight: "1.5",
    marginBottom: "12px",
  },

  resumeBtn: {
    border: "none",
    borderRadius: "20px",
    background: "#f2ebff",
    color: "#6c4cff",
    padding: "8px 18px",
    fontSize: "12px",
    fontWeight: "600",
    cursor: "pointer",
    display: "inline-block",
  },

  uploadedFileName: {
    marginTop: "10px",
    color: "#a6b4cc",
    fontSize: "11px",
    wordBreak: "break-word",
  },
};

const ProfessionalDetailsForm79 = () => {
  const [resumeFile, setResumeFile] = useState(null);

  const languages = [
    "English",
    "Spanish",
    "French",
    "German",
    "Hindi",
    "Mandarin",
    "Portuguese",
  ];

  const handleResumeUpload = (e) => {
    if (e.target.files.length > 0) {
      setResumeFile(e.target.files[0]);
    }
  };

  return (
    <div style={styles.professionalDetailsCard}>
      <div style={styles.professionalHeader}>
        <span style={styles.professionalIcon}>💼</span>
        <h3 style={styles.professionalTitle}>
          Professional Details
        </h3>
      </div>

      <div style={styles.fieldGroup}>
        <label style={styles.label}>
          Main Skill <span style={styles.required}>*</span>
        </label>

        <select style={styles.customSelect}>
          <option value="">Select skill</option>
          <option>Web Development</option>
          <option>UI/UX Design</option>
          <option>Graphic Design</option>
          <option>Content Writing</option>
          <option>Digital Marketing</option>
          <option>Data Analysis</option>
        </select>
      </div>

      <div style={styles.fieldGroup}>
        <label style={styles.label}>
          Experience Level <span style={styles.required}>*</span>
        </label>

        <select style={styles.customSelect}>
          <option value="">Select level</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
          <option>Expert</option>
        </select>
      </div>

      <div style={styles.fieldGroup}>
        <label style={styles.label}>
          Short Bio
        </label>

        <textarea
          rows="4"
          maxLength="500"
          placeholder="Tell us about your skills, experience, and what you're passionate about..."
          style={styles.textarea}
        />

        <div style={styles.charCounter}>
          0/500 characters
        </div>
      </div>

      <div style={styles.fieldGroup}>
        <label style={styles.label}>
          Portfolio Link
        </label>

        <input
          type="url"
          placeholder="https://yourportfolio.com"
          style={styles.input}
        />
      </div>

      <div style={styles.fieldGroup}>
        <label style={styles.label}>
          Languages Known
        </label>

        <div style={styles.languageChips}>
          {languages.map((lang) => (
            <button
              key={lang}
              type="button"
              style={styles.languageChip}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      <div style={styles.fieldGroup}>
        <label style={styles.label}>
          Resume Upload
        </label>

        <div style={styles.resumeUploadBox}>
          <div style={styles.resumeIcon}>
            📄
          </div>

          <p style={styles.resumeText}>
            Upload Resume PDF, DOC
            <br />
            Max 5 MB
          </p>

          <input
            type="file"
            id="resumeUpload"
            accept=".pdf,.doc,.docx"
            hidden
            onChange={handleResumeUpload}
          />

          <label
            htmlFor="resumeUpload"
            style={styles.resumeBtn}
          >
            Choose File
          </label>

          {resumeFile && (
            <div style={styles.uploadedFileName}>
              {resumeFile.name}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDetailsForm79;


