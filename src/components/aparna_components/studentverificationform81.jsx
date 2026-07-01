import React, { useState } from "react";

const styles = {
  studentVerificationCard: {
    background: "#1a2438",
    borderRadius: "14px",
    padding: "18px",
    margin: "16px",
  },

  studentVerificationHeader: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "18px",
  },

  headerTitle: {
    margin: 0,
    color: "white",
    fontSize: "14px",
    fontWeight: "600",
  },

  studentIcon: {
    color: "#7c5cff",
    fontSize: "12px",
  },

  fieldGroup: {
    marginBottom: "16px",
  },

  label: {
    display: "block",
    marginBottom: "6px",
    color: "#d7dcef",
    fontSize: "11px",
  },

  input: {
    width: "100%",
    boxSizing: "border-box",
    height: "40px",
    border: "none",
    borderRadius: "12px",
    background: "#07152d",
    color: "white",
    padding: "0 12px",
    fontSize: "12px",
  },

  socialInput: {
    width: "100%",
    boxSizing: "border-box",
    height: "40px",
    border: "none",
    borderRadius: "12px",
    background: "#07152d",
    color: "white",
    padding: "0 12px",
    fontSize: "12px",
    marginTop: "10px",
  },

  studentUploadBox: {
    border: "1px dashed #32476f",
    borderRadius: "14px",
    padding: "18px",
    textAlign: "center",
  },

  uploadIcon: {
    fontSize: "24px",
    color: "white",
    marginBottom: "8px",
  },

  uploadText: {
    color: "#a6b4cc",
    fontSize: "11px",
    lineHeight: "1.5",
    margin: 0,
  },

  studentUploadBtn: {
    display: "inline-block",
    marginTop: "10px",
    padding: "8px 18px",
    borderRadius: "20px",
    background: "#f2ebff",
    color: "#6c4cff",
    fontSize: "12px",
    fontWeight: "600",
    cursor: "pointer",
  },

  uploadedFileName: {
    marginTop: "10px",
    color: "#a6b4cc",
    fontSize: "11px",
    wordBreak: "break-word",
  },
};

const StudentVerificationForm81 = () => {
  const [studentIdFile, setStudentIdFile] = useState(null);

  const handleFileUpload = (e) => {
    if (e.target.files.length > 0) {
      setStudentIdFile(e.target.files[0]);
    }
  };

  return (
    <div style={styles.studentVerificationCard}>
      <div style={styles.studentVerificationHeader}>
        <span style={styles.studentIcon}>🎓</span>

        <h3 style={styles.headerTitle}>
          Student Verification
        </h3>
      </div>

      <div style={styles.fieldGroup}>
        <label style={styles.label}>
          College / University Name
        </label>

        <input
          type="text"
          placeholder="Stanford University"
          style={styles.input}
        />
      </div>

      <div style={styles.fieldGroup}>
        <label style={styles.label}>
          Student ID Upload
        </label>

        <div style={styles.studentUploadBox}>
          <div style={styles.uploadIcon}>
            ⇪
          </div>

          <p style={styles.uploadText}>
            Upload Student ID Card
            <br />
            JPG, PNG up to 5MB
          </p>

          <input
            type="file"
            id="studentIdUpload"
            accept=".jpg,.jpeg,.png"
            hidden
            onChange={handleFileUpload}
          />

          <label
            htmlFor="studentIdUpload"
            style={styles.studentUploadBtn}
          >
            Choose File
          </label>

          {studentIdFile && (
            <div style={styles.uploadedFileName}>
              {studentIdFile.name}
            </div>
          )}
        </div>
      </div>

      <div style={styles.fieldGroup}>
        <label style={styles.label}>
          Social Media Links
        </label>

        <input
          type="url"
          placeholder="GitHub profile URL"
          style={styles.input}
        />

        <input
          type="url"
          placeholder="LinkedIn profile URL"
          style={styles.socialInput}
        />

        <input
          type="url"
          placeholder="Twitter / X profile URL"
          style={styles.socialInput}
        />
      </div>
    </div>
  );
};

export default StudentVerificationForm81;
