import { useNavigate } from "react-router-dom";

function ClientBanner03() {
  const navigate = useNavigate();

  return (
    <section
      onClick={() => navigate("/projects")}
      className="cursor-pointer rounded-3xl bg-gradient-to-r from-purple-700 via-purple-600 to-violet-500 px-8 py-6 shadow-lg transition hover:shadow-xl"
    >
      <div className="flex items-center justify-between">

        <div>
          <h3 className="mb-2 text-xl font-semibold text-white">
            Are you a Client?
          </h3>

          <p className="text-sm text-purple-100">
            Manage your team, projects, and orders
          </p>
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-3xl backdrop-blur-sm">
          👔
        </div>

      </div>
    </section>
  );
}

export default ClientBanner03;