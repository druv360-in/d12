import React, { useState } from 'react';
import { Sparkles, DollarSign, Calendar, User, Users, Upload } from 'lucide-react';
import "../App.css";

function CreateProjectForm68() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    skills: [],
    budgetType: 'range',
    minBudget: '',
    maxBudget: '',
    fixedBudget: '',
    deadline: '',
    files: [],
    teamPreference: 'solo'
  });

  const [skillInput, setSkillInput] = useState('');
  const [titleCount, setTitleCount] = useState(0);
  const [descCount, setDescCount] = useState(0);

  const categories = [
    { label: 'Video Editing', icon: '🎬' },
    { label: 'Graphic Design', icon: '🎨' },
    { label: 'Coding', icon: '💻' },
    { label: 'Content Writing', icon: '✍️' },
    { label: 'Social Media', icon: '📱' },
    { label: 'Digital Marketing', icon: '📊' }
  ];

  const suggestedSkills = ['React', 'Node.js', 'Python', 'Figma', 'UI/UX', 'SEO', 'Content Writing', 'Video Editing'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({...prev, [name]: value }));
    if (name === 'title') setTitleCount(value.length);
    if (name === 'description') setDescCount(value.length);
  };

  const addSkill = (skill) => {
    if (skill &&!formData.skills.includes(skill)) {
      setFormData(prev => ({...prev, skills: [...prev.skills, skill] }));
      setSkillInput('');
    }
  };

  const removeSkill = (skillToRemove) => {
    setFormData(prev => ({
     ...prev,
      skills: prev.skills.filter(skill => skill!== skillToRemove)
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({...prev, files: Array.from(e.target.files) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="project-form-card">
      <form onSubmit={handleSubmit}>

        {/* Project Title */}
        <div className="form-group">
          <label>Project Title <span className="required">*</span></label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="e.g., Need a Full-Stack Developer for E-commerce"
            maxLength={100}
            required
          />
          <span className="char-count">{titleCount}/100 characters</span>
        </div>

        {/* Category */}
        <div className="form-group">
          <label>Category <span className="required">*</span></label>
          <select name="category" value={formData.category} onChange={handleInputChange} required>
            <option value="">Select a category</option>
            {categories.map(cat => (
              <option key={cat.label} value={cat.label}>
                {cat.icon} {cat.label}
              </option>
            ))}
          </select>
        </div>

        {/* Project Description */}
        <div className="form-group">
          <label>Project Description <span className="required">*</span></label>
          <textarea
            name="description"
            rows="5"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Describe your project in detail. Include requirements, expectations, deliverables, and any other important information..."
            maxLength={2000}
            required
          ></textarea>
          <div className="form-group-footer">
            <span className="char-count">{descCount}/2000 characters</span>
            <button type="button" className="ai-btn">
              <Sparkles size={14} /> AI Enhance
            </button>
          </div>
        </div>

        {/* Skills Required */}
        <div className="form-group">
          <label>Skills Required <span className="required">*</span></label>
          <div className="skill-input-row">
            <input
              type="text"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill(skillInput))}
              placeholder="Type a skill and press Enter"
            />
            <button type="button" onClick={() => addSkill(skillInput)} className="add-btn">Add</button>
          </div>

          {formData.skills.length > 0 && (
            <div className="skill-tags">
              {formData.skills.map(skill => (
                <span key={skill} className="skill-tag">
                  {skill}
                  <button type="button" onClick={() => removeSkill(skill)}>×</button>
                </span>
              ))}
            </div>
          )}

          <p className="suggested-label">Suggested skills:</p>
          <div className="suggested-skills">
            {suggestedSkills.map(skill => (
              <button key={skill} type="button" onClick={() => addSkill(skill)} className="suggested-tag">
                + {skill}
              </button>
            ))}
          </div>
        </div>

        {/* Budget */}
        <div className="form-group">
          <label>Budget <span className="required">*</span></label>
          <div className="budget-toggle">
            <button
              type="button"
              className={formData.budgetType === 'fixed'? 'active' : ''}
              onClick={() => setFormData(prev => ({...prev, budgetType: 'fixed' }))}
            >
              Fixed Price
            </button>
            <button
              type="button"
              className={formData.budgetType === 'range'? 'active' : ''}
              onClick={() => setFormData(prev => ({...prev, budgetType: 'range' }))}
            >
              Budget Range
            </button>
          </div>

          {formData.budgetType === 'fixed'? (
            <div className="input-with-icon">
              <DollarSign size={16} />
              <input
                type="number"
                name="fixedBudget"
                value={formData.fixedBudget}
                onChange={handleInputChange}
                placeholder="Enter amount (e.g., 750)"
              />
            </div>
          ) : (
            <div className="budget-inputs">
              <div className="input-with-icon">
                <DollarSign size={16} />
                <input
                  type="number"
                  name="minBudget"
                  value={formData.minBudget}
                  onChange={handleInputChange}
                  placeholder="Min (e.g., 500)"
                />
              </div>
              <div className="input-with-icon">
                <DollarSign size={16} />
                <input
                  type="number"
                  name="maxBudget"
                  value={formData.maxBudget}
                  onChange={handleInputChange}
                  placeholder="Max (e.g., 1000)"
                />
              </div>
            </div>
          )}
        </div>

        {/* Project Deadline */}
        <div className="form-group">
          <label>Project Deadline <span className="required">*</span></label>
          <div className="input-with-icon">
            <Calendar size={16} />
            <input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* Attachments */}
        <div className="form-group">
          <label>Attachments (Optional)</label>
          <label className="file-upload-box">
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
            />
            <div className="upload-content">
              <Upload size={24} color="#9ca3af" />
              <p>Drag and drop files here, or click to browse</p>
              <span>Supported formats: PDF, DOC, PNG, JPG (Max 10MB)</span>
              <button type="button" className="choose-files-btn">Choose Files</button>
            </div>
          </label>
          {formData.files.length > 0 && (
            <div className="file-list">
              {formData.files.map((file, idx) => (
                <p key={idx} className="file-count">{file.name}</p>
              ))}
            </div>
          )}
        </div>

        {/* Team Preference */}
        <div className="form-group">
          <label>Team Preference</label>
          <div className="team-cards">
            <button
              type="button"
              className={`team-card ${formData.teamPreference === 'solo'? 'active' : ''}`}
              onClick={() => setFormData(prev => ({...prev, teamPreference: 'solo' }))}
            >
              <User className="team-icon" size={20} />
              <div>
                <p className="team-title">Solo Freelancer</p>
                <p className="team-desc">One talented student</p>
              </div>
            </button>
            <button
              type="button"
              className={`team-card ${formData.teamPreference === 'team'? 'active' : ''}`}
              onClick={() => setFormData(prev => ({...prev, teamPreference: 'team' }))}
            >
              <Users className="team-icon" size={20} />
              <div>
                <p className="team-title">Team Collaboration</p>
                <p className="team-desc">Multiple freelancers</p>
              </div>
            </button>
          </div>
        </div>

      </form>
    </div>
  );
}

export default CreateProjectForm68;