import React, { useState } from "react";

const styles = {
  workPreferencesCard: {
    background: "#1a2438",
    borderRadius: "14px",
    padding: "18px",
    margin: "16px",
  },

  workPreferencesHeader: {
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

  workIcon: {
    color: "#6d7cff",
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
    fontWeight: "500",
  },

  inputIconField: {
    position: "relative",
  },

  inputPrefix: {
    position: "absolute",
    left: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#aab3c8",
    fontSize: "12px",
  },

  inputWithPrefix: {
    width: "100%",
    boxSizing: "border-box",
    height: "40px",
    border: "none",
    borderRadius: "12px",
    background: "#07152d",
    color: "white",
    padding: "0 12px 0 28px",
    fontSize: "12px",
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

  customSelect: {
    width: "100%",
    boxSizing: "border-box",
    height: "40px",
    border: "none",
    borderRadius: "12px",
    background: "#07152d",
    color: "white",
    padding: "0 12px",
    fontSize: "12px",
    cursor: "pointer",
  },

  dateInput: {
    width: "100%",
    boxSizing: "border-box",
    height: "40px",
    border: "none",
    borderRadius: "12px",
    background: "#07152d",
    color: "white",
    padding: "0 12px",
    fontSize: "12px",
    colorScheme: "dark",
  },
};

const WorkPreferencesForm80 = () => {
  const [hourlyRate, setHourlyRate] = useState("35");
  const [workingHours, setWorkingHours] = useState("20-40");
  const [availability, setAvailability] = useState("");
  const [teamRole, setTeamRole] = useState("");
  const [joiningDate, setJoiningDate] = useState("");

  return (
    <div style={styles.workPreferencesCard}>
      <div style={styles.workPreferencesHeader}>
        <span style={styles.workIcon}>◌</span>
        <h3 style={styles.headerTitle}>
          Work Preferences
        </h3>
      </div>

      {/* Hourly Rate */}
      <div style={styles.fieldGroup}>
        <label style={styles.label}>
          Hourly Rate (USD)
        </label>

        <div style={styles.inputIconField}>
          <span style={styles.inputPrefix}>$</span>

          <input
            type="number"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(e.target.value)}
            style={styles.inputWithPrefix}
          />
        </div>
      </div>

      {/* Weekly Hours */}
      <div style={styles.fieldGroup}>
        <label style={styles.label}>
          Weekly Working Hours
        </label>

        <input
          type="text"
          value={workingHours}
          onChange={(e) => setWorkingHours(e.target.value)}
          style={styles.input}
        />
      </div>

      {/* Availability */}
      <div style={styles.fieldGroup}>
        <label style={styles.label}>
          Availability
        </label>

        <select
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
          style={styles.customSelect}
        >
          <option value="">Select availability</option>
          <option>Full Time</option>
          <option>Part Time</option>
          <option>Weekends Only</option>
          <option>Flexible</option>
        </select>
      </div>

      {/* Team Role */}
      <div style={styles.fieldGroup}>
        <label style={styles.label}>
          Team Role
        </label>

        <select
          value={teamRole}
          onChange={(e) => setTeamRole(e.target.value)}
          style={styles.customSelect}
        >
          <option value="">Select role</option>
          <option>Frontend Developer</option>
          <option>Backend Developer</option>
          <option>UI/UX Designer</option>
          <option>Content Writer</option>
          <option>Project Manager</option>
        </select>
      </div>

      {/* Joining Date */}
      <div style={styles.fieldGroup}>
        <label style={styles.label}>
          Joining Date
        </label>

        <input
          type="date"
          value={joiningDate}
          onChange={(e) => setJoiningDate(e.target.value)}
          style={styles.dateInput}
        />
      </div>
    </div>
  );
};

export default WorkPreferencesForm80;
