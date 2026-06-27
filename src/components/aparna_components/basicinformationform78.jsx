import React from "react";

const BasicInformationForm78 = () => {
  return (
    <div className="basic-info-card">

      <div className="basic-info-header">
        <span className="basic-info-icon">👤</span>
        <h3>Basic Information</h3>
      </div>

      <div className="upload-card">
        <div className="profile-icon-box">
          <span>👤</span>
        </div>

        <div className="upload-content">
          <h4>Profile Photo</h4>

          <p>
            Upload a professional photo,
            JPG/PNG up to 5MB.
          </p>

          <button className="choose-photo-btn">
            ⤴ Choose Photo
          </button>
        </div>
      </div>

      <div className="field-group">
        <label>
          Full Name <span>*</span>
        </label>
        <input type="text" placeholder="John Doe" />
      </div>

      <div className="field-group">
        <label>Username / SkillBuster ID</label>
        <input type="text" placeholder="@ johndoe" />
      </div>

      <div className="field-group">
  <label>
    Email Address <span>*</span>
  </label>
  <input
    type="email"
    placeholder="john@university.edu"
  />
</div>

<div className="field-group">
  <label>
    Phone Number <span>*</span>
  </label>
  <input
    type="text"
    placeholder="+1 (555) 000-0000"
  />
</div>

      <div className="field-group">
        <label>Location</label>
        <input
          type="text"
          placeholder="San Francisco, CA"
        />
      </div>

    </div>
  );
};

export default BasicInformationForm78;