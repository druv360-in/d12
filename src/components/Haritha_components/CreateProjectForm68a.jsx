import { Calendar, Upload, Tag, DollarSign, Zap, User, Users } from 'lucide-react';
import { useState } from 'react';

export default function PostProject() {
  const [budgetType, setBudgetType] = useState('fixed');
  const [teamType, setTeamType] = useState('solo');
  const [skills, setSkills] = useState(['Content Writing', 'Video Editing']);
  const [skillInput, setSkillInput] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [budgetFixed, setBudgetFixed] = useState('');
  const [budgetMin, setBudgetMin] = useState('');
  const [budgetMax, setBudgetMax] = useState('');

  const categories = [
    'Video Editing',
    'Graphic Design', 
    'Coding',
    'Content Writing',
    'Social Media',
    'Digital Marketing',
  ];

  const suggestedSkills = ['React', 'Node.js', 'Python', 'Figma', 'UI/UX', 'SEO'];

  const addSkill = (skill) => {
    if (skill && !skills.includes(skill)) {
      setSkills([...skills, skill]);
      setSkillInput('');
    }
  };

  const removeSkill = (skill) => {
    setSkills(skills.filter(s => s !== skill));
  };

  return (
    <div className="w-screen max-w-full min-h-screen bg-gray-50 py-3">
      <div className="space-y-4 px-4">
        {/* Project Title */}
        <div className="rounded-xl bg-white p-4 shadow-sm">
          <label className="mb-2 block text-sm font-semibold text-gray-900">
            Project Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Need a Full-Stack Developer for E-commer"
            maxLength={100}
            className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:outline-none"
          />
          <p className="mt-1 text-xs text-gray-400">{title.length}/100 characters</p>
        </div>

        {/* Category */}
        <div className="rounded-xl bg-white p-4 shadow-sm">
          <label className="mb-2 block text-sm font-semibold text-gray-900">
            Category <span className="text-red-500">*</span>
          </label>
          <select className="w-full appearance-none rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 focus:border-violet-500 focus:outline-none">
            <option>Select a category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Project Description */}
        <div className="rounded-xl bg-white p-4 shadow-sm">
          <label className="mb-2 block text-sm font-semibold text-gray-900">
            Project Description <span className="text-red-500">*</span>
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your project in detail. Include requirements, expectations, deliverables, and any other important information..."
            maxLength={2000}
            rows={6}
            className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:outline-none"
          />
          <div className="mt-2 flex items-center justify-between">
            <p className="text-xs text-gray-400">{description.length}/2000 characters</p>
            <button className="flex items-center gap-1 text-xs font-medium text-violet-600">
              <Zap className="h-3.5 w-3.5" />
              AI Enhance
            </button>
          </div>
        </div>

        {/* Skills Required */}
        <div className="rounded-xl bg-white p-4 shadow-sm">
          <label className="mb-2 block text-sm font-semibold text-gray-900">
            Skills Required <span className="text-red-500">*</span>
          </label>
          <div className="mb-3 flex gap-2">
            <div className="relative flex-1">
              <Tag className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addSkill(skillInput)}
                placeholder="Type a skill and press Enter"
                className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-9 pr-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:outline-none"
              />
            </div>
            <button
              onClick={() => addSkill(skillInput)}
              className="rounded-lg bg-violet-50 px-4 text-sm font-semibold text-violet-600 active:bg-violet-100"
            >
              Add
            </button>
          </div>
          
          <div className="mb-3 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="flex items-center gap-1.5 rounded-full bg-violet-50 px-3 py-1.5 text-xs font-medium text-violet-700"
              >
                + {skill}
                <button onClick={() => removeSkill(skill)} className="text-violet-500">×</button>
              </span>
            ))}
          </div>

          <p className="mb-2 text-xs text-gray-500">Suggested Skills:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedSkills.map((skill) => (
              <button
                key={skill}
                onClick={() => addSkill(skill)}
                className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-700 active:bg-gray-50"
              >
                + {skill}
              </button>
            ))}
          </div>
        </div>

        {/* Budget - Centered toggles */}
        <div className="rounded-xl bg-white p-4 shadow-sm">
          <label className="mb-3 block text-sm font-semibold text-gray-900">
            Budget <span className="text-red-500">*</span>
          </label>
          <div className="mb-3 flex justify-center gap-3">
            <button
              onClick={() => setBudgetType('fixed')}
              className={`px-5 py-2 text-sm font-medium transition ${
                budgetType === 'fixed'
                  ? 'rounded-full bg-violet-600 text-white'
                  : 'text-gray-600'
              }`}
            >
              Fixed Price
            </button>
            <button
              onClick={() => setBudgetType('range')}
              className={`px-5 py-2 text-sm font-medium transition ${
                budgetType === 'range'
                  ? 'rounded-full bg-violet-600 text-white'
                  : 'text-gray-600'
              }`}
            >
              Budget Range
            </button>
          </div>
          
          {budgetType === 'fixed' ? (
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="number"
                value={budgetFixed}
                onChange={(e) => setBudgetFixed(e.target.value)}
                placeholder="1000"
                className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-9 pr-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:outline-none"
              />
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="number"
                  value={budgetMin}
                  onChange={(e) => setBudgetMin(e.target.value)}
                  placeholder="Min (e.g., 500)"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-9 pr-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:outline-none"
                />
              </div>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="number"
                  value={budgetMax}
                  onChange={(e) => setBudgetMax(e.target.value)}
                  placeholder="Max (e.g., 1000)"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-9 pr-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:outline-none"
                />
              </div>
            </div>
          )}
        </div>

        {/* Project Deadline */}
        <div className="rounded-xl bg-white p-4 shadow-sm">
          <label className="mb-2 block text-sm font-semibold text-gray-900">
            Project Deadline <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="dd-mm-yyyy"
              onFocus={(e) => (e.target.type = 'date')}
              onBlur={(e) => (e.target.type = 'text')}
              className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-9 pr-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-violet-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Attachments */}
        <div className="rounded-xl bg-white p-4 shadow-sm">
          <label className="mb-2 block text-sm font-semibold text-gray-900">
            Attachments (Optional)
          </label>
          <div className="rounded-lg border-2 border-dashed border-gray-200 bg-gray-50 p-6">
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                <Upload className="h-5 w-5 text-gray-400" />
              </div>
              <p className="text-center text-sm font-medium text-gray-700">
                Drag and drop files here, or click to browse
              </p>
              <p className="text-center text-xs text-gray-400">
                Supported formats: PDF, DOC, PNG, JPG (Max 10MB)
              </p>
              <button className="mt-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-violet-600 shadow-sm active:bg-gray-50">
                Choose Files
              </button>
            </div>
          </div>
        </div>

        {/* Team Preference - Updated icons */}
        <div className="rounded-xl bg-white p-4 shadow-sm">
          <label className="mb-3 block text-sm font-semibold text-gray-900">
            Team Preference
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setTeamType('solo')}
              className={`rounded-xl border-2 p-4 transition ${
                teamType === 'solo'
                  ? 'border-violet-600 bg-violet-50'
                  : 'border-gray-200 bg-white'
              }`}
            >
              <User className={`mx-auto mb-2 h-6 w-6 ${teamType === 'solo' ? 'text-violet-600' : 'text-gray-400'}`} strokeWidth={1.5} />
              <p className={`text-sm font-semibold ${teamType === 'solo' ? 'text-violet-600' : 'text-gray-700'}`}>
                Solo Freelancer
              </p>
              <p className="text-xs text-gray-500">One talented student</p>
            </button>
            <button
              onClick={() => setTeamType('team')}
              className={`rounded-xl border-2 p-4 transition ${
                teamType === 'team'
                  ? 'border-violet-600 bg-violet-50'
                  : 'border-gray-200 bg-white'
              }`}
            >
              <Users className={`mx-auto mb-2 h-6 w-6 ${teamType === 'team' ? 'text-violet-600' : 'text-gray-400'}`} strokeWidth={1.5} />
              <p className={`text-sm font-semibold ${teamType === 'team' ? 'text-violet-600' : 'text-gray-700'}`}>
                Team Collaboration
              </p>
              <p className="text-xs text-gray-500">Multiple freelancers</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}