import React, { useState } from 'react';
import { Globe, Lock, Zap, CheckCircle2 } from 'lucide-react';

function VisibilitySettings72({ onVisibilityChange }) {
  const [selected, setSelected] = useState('public');

  const handleSelect = (value) => {
    setSelected(value);
    if (onVisibilityChange) onVisibilityChange(value);
  };

  return (
    <div className="form-group">
      <h3 className="visibility-title">Visibility Settings</h3>
      
      <div className="visibility-options">
        {/* Public */}
        <div 
          className={`visibility-card ${selected === 'public' ? 'selected' : ''}`}
          onClick={() => handleSelect('public')}
        >
          <div className="visibility-content">
            <Globe size={20} className="visibility-icon" />
            <div className="visibility-text">
              <div className="visibility-label">Public</div>
              <div className="visibility-desc">Everyone can see this project</div>
            </div>
          </div>
          {selected === 'public' && <CheckCircle2 size={20} className="check-icon" />}
        </div>

        {/* Private */}
        <div 
          className={`visibility-card ${selected === 'private' ? 'selected' : ''}`}
          onClick={() => handleSelect('private')}
        >
          <div className="visibility-content">
            <Lock size={20} className="visibility-icon" />
            <div className="visibility-text">
              <div className="visibility-label">Private</div>
              <div className="visibility-desc">Only invited freelancers</div>
            </div>
          </div>
          {selected === 'private' && <CheckCircle2 size={20} className="check-icon" />}
        </div>

        {/* Featured - starts white, turns yellow */}
        <div 
          className={`visibility-card featured-option ${selected === 'featured' ? 'selected' : ''}`}
          onClick={() => handleSelect('featured')}
        >
          <div className="visibility-content">
            <Zap size={20} className="visibility-icon" />
            <div className="visibility-text">
              <div className="visibility-label">Featured</div>
              <div className="visibility-desc">Premium placement (+₹49)</div>
            </div>
          </div>
          {selected === 'featured' && <CheckCircle2 size={20} className="check-icon" />}
        </div>
      </div>
    </div>
  );
}

export default VisibilitySettings72;