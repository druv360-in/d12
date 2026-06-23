import React from 'react';
import { Sparkles } from 'lucide-react';

function AISuggestions70() {
  const suggestions = [
    'Based on your project scope, we recommend setting 3-5 milestones',
    'Similar projects in your category typically have 2-3 week timelines',
    'Consider adding "responsive design" to your skills for better matches'
  ];

  return (
    <div className="form-group">
      <div className="ai-suggestions-card">
        <div className="ai-header">
          <Sparkles size={20} className="ai-icon" />
          <h3 className="ai-title">AI Suggestions</h3>
        </div>
        
        <ul className="ai-list">
          {suggestions.map((text, index) => (
            <li key={index} className="ai-item">
              <span className="ai-bullet">•</span>
              <span className="ai-text">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AISuggestions70;