import { useLocation, useNavigate } from "react-router-dom";

import Component42 from "../components/42component";
import Component48 from "../components/48component";
import PortfolioList45 from "../components/45component";
import Component46 from "../components/46component";

export default function ProfileDetailPage() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const freelancer = state?.freelancer;

  if (!freelancer) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        No data found
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* ================= LAPTOP SIDEBAR ================= */}
{/* ================= RIGHT CONTENT ================= */}
      <div className="flex min-w-0 flex-1 flex-col">

        {/* Mobile Header */}
        <div className="sticky top-0 z-50 bg-white lg:hidden">
</div>

        {/* Mobile Sidebar */}
{/* Profile Header */}
        <div className="sticky top-0 z-40 bg-white">
          <Component42
  title="Profile"
  onBack={() => {
    console.log("Back clicked");
    navigate(-1);
  }}
/>
        </div>

        {/* Scroll Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 pb-24">

          <div
            className="
              w-full
              px-4
              py-6
              sm:px-6
              lg:px-10
              xl:px-12
              2xl:px-16
              space-y-8
            "
          >
            <Component48 {...freelancer} />

            <PortfolioList45 />

            <Component46
              total={freelancer.reviews}
              reviews={freelancer.reviewsData || []}
            />
          </div>

        </main>

        {/* Mobile Bottom Navigation */}
</div>

    </div>
  );
}


