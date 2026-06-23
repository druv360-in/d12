import { Plus } from "lucide-react";

function AddTeamMemberButton73() {
  const handleClick = () => {
    console.log("Add Team Member clicked");
  };

  return (
    <button onClick={handleClick} className="add-team-btn-73">
      <Plus size={20} color="#ffffff" strokeWidth={2.5} />
      <span className="add-team-btn-text-73">Add Team Member</span>
    </button>
  );
}

export default AddTeamMemberButton73;