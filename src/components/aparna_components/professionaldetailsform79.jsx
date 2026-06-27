import React, { useState } from "react";

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
    <div className="professional-details-card">
      <div className="professional-header">
        <span className="professional-icon">💼</span>
        <h3>Professional Details</h3>
      </div>

      {/* Main Skill */}
      <div className="field-group">
        <label>
          Main Skill <span>*</span>
        </label>

        <select className="custom-select">
          <option value="">Select skill</option>
          <option>Web Development</option>
          <option>UI/UX Design</option>
          <option>Graphic Design</option>
          <option>Content Writing</option>
          <option>Digital Marketing</option>
          <option>Data Analysis</option>
        </select>
      </div>

      {/* Experience Level */}
      <div className="field-group">
        <label>
          Experience Level <span>*</span>
        </label>

        <select className="custom-select">
          <option value="">Select level</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
          <option>Expert</option>
        </select>
      </div>

      {/* Short Bio */}
      <div className="field-group">
        <label>Short Bio</label>

        <textarea
          rows="4"
          maxLength="500"
          placeholder="Tell us about your skills, experience, and what you're passionate about..."
        />

        <div className="char-counter">
          0/500 characters
        </div>
      </div>

      {/* Portfolio */}
      <div className="field-group">
        <label>Portfolio Link</label>

        <input
          type="url"
          placeholder="https://yourportfolio.com"
        />
      </div>

      {/* Languages */}
      <div className="field-group">
        <label>Languages Known</label>

        <div className="language-chips">
          {languages.map((lang) => (
            <button
              key={lang}
              type="button"
              className="language-chip"
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      {/* Resume Upload */}
      <div className="field-group">
        <label>Resume Upload</label>

        <div className="resume-upload-box">
          <div className="resume-icon">📄</div>

          <p>
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
            className="resume-btn"
          >
            Choose File
          </label>

          {resumeFile && (
            <div className="uploaded-file-name">
              {resumeFile.name}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDetailsForm79;