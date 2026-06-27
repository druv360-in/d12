import React, { useState } from "react";

const WorkPreferencesForm80 = () => {
  const [hourlyRate, setHourlyRate] = useState("35");
  const [workingHours, setWorkingHours] = useState("20-40");
  const [availability, setAvailability] = useState("");
  const [teamRole, setTeamRole] = useState("");
  const [joiningDate, setJoiningDate] = useState("");

  return (
    <div className="work-preferences-card">
      <div className="work-preferences-header">
        <span className="work-icon">◌</span>
        <h3>Work Preferences</h3>
      </div>

      {/* Hourly Rate */}
      <div className="field-group">
        <label>Hourly Rate (USD)</label>

        <div className="input-icon-field">
          <span className="input-prefix">$</span>

          <input
            type="number"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(e.target.value)}
          />
        </div>
      </div>

      {/* Weekly Hours */}
      <div className="field-group">
        <label>Weekly Working Hours</label>

        <input
          type="text"
          value={workingHours}
          onChange={(e) => setWorkingHours(e.target.value)}
        />
      </div>

      {/* Availability */}
      <div className="field-group">
        <label>Availability</label>

        <select
          className="custom-select"
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
        >
          <option value="">Select availability</option>
          <option>Full Time</option>
          <option>Part Time</option>
          <option>Weekends Only</option>
          <option>Flexible</option>
        </select>
      </div>

      {/* Team Role */}
      <div className="field-group">
        <label>Team Role</label>

        <select
          className="custom-select"
          value={teamRole}
          onChange={(e) => setTeamRole(e.target.value)}
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
      <div className="field-group">
        <label>Joining Date</label>

        <input
          type="date"
          value={joiningDate}
          onChange={(e) => setJoiningDate(e.target.value)}
          className="date-input"
        />
      </div>
    </div>
  );
};

export default WorkPreferencesForm80;