import { Plus } from "lucide-react";

function AddTeamMemberButton73() {
  const handleClick = () => {
    console.log("Add Team Member clicked");
  };

  return (
    <button
      onClick={handleClick}
      className="w-[80%] mx-auto mt-3 flex items-center justify-center gap-2 px-5 py-3 rounded-xl
                 bg-gradient-to-r from-violet-600 to-purple-500 text-white font-bold text-sm
                 shadow-md shadow-violet-500/30
                 transition-all duration-150
                 hover:-translate-y-1 hover:shadow-lg
                 active:translate-y-0"
    >
      <Plus size={20} color="#ffffff" strokeWidth={2.5} />
      <span>Add Team Member</span>
    </button>
  );
}

export default AddTeamMemberButton73;