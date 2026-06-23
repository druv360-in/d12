import React, { useState } from 'react';
import { FileText, Calendar, User, ChevronDown, Plus, Trash2 } from 'lucide-react';

function CreateProjectForm68b() {
  const [formData, setFormData] = useState({
    projectName: '',
    description: '',
    budget: '',
    deadline: '',
    freelancer: '',
    initialStatus: 'Pending'
  });
  const [requirements, setRequirements] = useState(['']);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({...prev, [name]: value }));
  };

  const handleRequirementChange = (index, value) => {
    const newReqs = [...requirements];
    newReqs[index] = value;
    setRequirements(newReqs);
  };

  const addRequirement = () => {
    setRequirements([...requirements, '']);
  };

  const removeRequirement = (index) => {
    if (requirements.length > 1) {
      setRequirements(requirements.filter((_, i) => i!== index));
    }
  };

  return (
    <div className="create-project-form-68b">
      {/* Project Name */}
      <div className="form-card-68b">
        <label className="form-label-68b">Project Name *</label>
        <div className="input-wrapper-68b">
          <FileText size={18} className="input-icon-68b" />
          <input
            type="text"
            name="projectName"
            placeholder="e.g., E-Commerce Website Development"
            className="form-input-68b"
            value={formData.projectName}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Project Description */}
      <div className="form-card-68b">
        <label className="form-label-68b">Project Description *</label>
        <textarea
          name="description"
          placeholder="Describe your project goals, scope, and deliverables..."
          className="form-textarea-68b"
          rows={5}
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      {/* Project Requirements */}
      <div className="form-card-68b">
        <div className="form-label-row-68b">
          <label className="form-label-68b">Project Requirements</label>
          <button type="button" className="add-btn-68b" onClick={addRequirement}>
            <Plus size={16} /> Add
          </button>
        </div>
        {requirements.map((req, index) => (
          <div key={index} className="requirement-row-68b">
            <input
              type="text"
              placeholder="Enter a requirement"
              className="form-input-68b no-icon"
              value={req}
              onChange={(e) => handleRequirementChange(index, e.target.value)}
            />
            {requirements.length > 1 && (
              <button 
                type="button" 
                className="delete-req-btn-68b"
                onClick={() => removeRequirement(index)}
              >
                <Trash2 size={16} />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Budget */}
      <div className="form-card-68b">
        <label className="form-label-68b">Budget ($) *</label>
        <div className="input-wrapper-68b">
          <span className="input-icon-68b text-icon">$</span>
          <input
            type="number"
            name="budget"
            placeholder="0"
            className="form-input-68b"
            value={formData.budget}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Deadline */}
      <div className="form-card-68b">
        <label className="form-label-68b">Deadline *</label>
        <div className="input-wrapper-68b">
          <Calendar size={18} className="input-icon-68b" />
          <input
            type="date"
            name="deadline"
            className="form-input-68b date-input-68b"
            value={formData.deadline}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Assign Freelancer */}
<div className="form-card-68b">
  <label className="form-label-68b">Assign Freelancer (Optional)</label>
  <div className="select-wrapper-68b">
    <User size={18} className="input-icon-68b" />
    <select
      name="freelancer"
      className="form-select-68b"
      value={formData.freelancer}
      onChange={handleChange}
    >
      <option value="" disabled hidden>Select a freelancer</option>
      <option value="sarah">Sarah Johnson - React Developer</option>
      <option value="mike">Mike Chen - Full Stack Developer</option>
      <option value="emily">Emily Davis - UI/UX Designer</option>
    </select>
    <ChevronDown size={18} className="select-arrow-68b" />
  </div>
  <p className="form-hint-68b">You can assign a freelancer now or later</p>
</div>

      {/* Initial Status */}
      <div className="form-card-68b">
        <label className="form-label-68b">Initial Status</label>
        <div className="select-wrapper-68b">
          <select
            name="initialStatus"
            className="form-select-68b no-icon"
            value={formData.initialStatus}
            onChange={handleChange}
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <ChevronDown size={18} className="select-arrow-68b" />
        </div>
      </div>
    </div>
  );
}

export default CreateProjectForm68b;