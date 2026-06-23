import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function CreateNewProjectPageHeader67b() {
  const navigate = useNavigate();

  return (
    <div className="create-project-header-67b">
      <button 
        className="back-btn-67b" 
        onClick={() => navigate(-1)}
        aria-label="Go back"
      >
        <ArrowLeft size={24} />
      </button>
      
      <div className="header-text-67b">
        <h1 className="header-title-67b">Create New Project</h1>
        <p className="header-subtitle-67b">Fill in the details to start your project</p>
      </div>
    </div>
  );
}

export default CreateNewProjectPageHeader67b;