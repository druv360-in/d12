import React, { useState } from "react";

const StudentVerificationForm81 = () => {
  const [studentIdFile, setStudentIdFile] = useState(null);

  const handleFileUpload = (e) => {
    if (e.target.files.length > 0) {
      setStudentIdFile(e.target.files[0]);
    }
  };

  return (
    <div className="student-verification-card">

      <div className="student-verification-header">
        <span className="student-icon">🎓</span>
        <h3>Student Verification</h3>
      </div>

      <div className="field-group">
        <label>College / University Name</label>

        <input
          type="text"
          placeholder="Stanford University"
        />
      </div>

      <div className="field-group">
        <label>Student ID Upload</label>

        <div className="student-upload-box">

          <div className="upload-icon">⇪</div>

          <p>
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
            className="student-upload-btn"
          >
            Choose File
          </label>

          {studentIdFile && (
            <div className="uploaded-file-name">
              {studentIdFile.name}
            </div>
          )}

        </div>
      </div>

      <div className="field-group">
        <label>Social Media Links</label>

        <input
          type="url"
          placeholder="GitHub profile URL"
        />

        <input
          type="url"
          placeholder="LinkedIn profile URL"
          className="social-input"
        />

        <input
          type="url"
          placeholder="Twitter / X profile URL"
          className="social-input"
        />
      </div>

    </div>
  );
};

export default StudentVerificationForm81;