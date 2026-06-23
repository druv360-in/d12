import React from 'react';
import { TrendingUp, Eye, FileText, Users, Bookmark, Info } from 'lucide-react';
import '../App.css';

function ProjectInsights69({ views = 0, proposals = 0, interested = 0, saves = 0 }) {
  return (
    <div className="form-group">
      <div className="insights-header">
        <TrendingUp size={18} />
        <h3>Project Insights</h3>
      </div>

      <div className="insights-list">
        <div className="insight-row views-row">
          <div className="insight-label">
            <Eye size={16} />
            <span>Views</span>
          </div>
          <span className="insight-value">{views}</span>
        </div>

        <div className="insight-row proposals-row">
          <div className="insight-label">
            <FileText size={16} />
            <span>Proposals</span>
          </div>
          <span className="insight-value">{proposals}</span>
        </div>

        <div className="insight-row interested-row">
          <div className="insight-label">
            <Users size={16} />
            <span>Interested</span>
          </div>
          <span className="insight-value">{interested}</span>
        </div>

        <div className="insight-row saves-row">
          <div className="insight-label">
            <Bookmark size={16} />
            <span>Saves</span>
          </div>
          <span className="insight-value">{saves}</span>
        </div>
      </div>

      <div className="insights-footer">
        <Info size={14} />
        <span>Stats will update after publishing</span>
      </div>
    </div>
  );
}

export default ProjectInsights69;