import { useNavigate } from "react-router-dom";
import SideBarMenu24 from "./SidebarMenu24";

function ChatNotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen w-full bg-white">
      {/* Sidebar */}
      <SideBarMenu24 />

      {/* Main Content */}
      <main className="flex min-h-screen flex-1 items-center justify-center bg-white">
        <div className="flex flex-col items-center text-center">
          <h1 className="m-0 text-[18px] font-bold leading-[24px] text-[#111827]">
            Chat not found
          </h1>

          <button
            type="button"
            onClick={() => navigate("/chat")}
            className="
              mt-[10px]
              cursor-pointer
              border-0
              bg-transparent
              p-0
              text-[14px]
              font-medium
              leading-[20px]
              text-[#5B16D9]
              transition-colors
              duration-200
              hover:text-[#4310A3]
            "
          >
            Back to Messages
          </button>
        </div>
      </main>
    </div>
  );
}

export default ChatNotFound;
