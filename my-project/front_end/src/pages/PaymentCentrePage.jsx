import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import BottomMenu05 from "../components/BottomMenu05";
import Header01 from "../components/Header01";
import SeventyComponent from "../components/70component";
import SeventyAComponent from "../components/70Acomponent";
import SeventyOneComponent from "../components/71component";
import SeventyThreeComponent from "../components/73component";
import SeventyFourComponent from "../components/74component";
import SeventyFiveComponent from "../components/75component";
import SeventySixComponent from "../components/76component";
import SidebarMenu24 from "../components/SidebarMenu24";

export default function PaymentCentrePage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [selectedPlan, setSelectedPlan] = useState("Large");

  const [selectedMethod, setSelectedMethod] = useState("UPI");

  // =====================================================
  // PAYMENT COMPLETION STATE
  // =====================================================
  //
  // This comes from /payment-released after the 3-second
  // success screen finishes.
  //
  // There is NO localStorage check here.
  //
  // =====================================================

  const paymentCompleted =
    location.state?.paymentCompleted === true;

  const completedPlan =
    location.state?.selectedPlan || null;

  // =====================================================
  // PROJECT DATA
  // =====================================================

  const project = {
    title: "E-Commerce Website",

    plan: "Large",

    freelancer: {
      name: "Emma Thompson",
      rating: 4.9,
      avatar: "https://i.pravatar.cc/80?img=1",
    },

    totalAmount: 2500,

    released: 1000,

    inEscrow: 1500,
  };

  // =====================================================
  // PAYMENT SUMMARY
  // =====================================================

  const summaryData = {
    label: "Project Payment",
    amount: 1500,
    platformFee: 100,
    gst: 288,
    total: 1888,
  };

  // =====================================================
  // IS THE CURRENT PLAN COMPLETED?
  // =====================================================

  const isCurrentPlanCompleted =
    paymentCompleted &&
    completedPlan === selectedPlan;

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <div className="min-h-screen bg-gray-100">

      {/* =================================================
          SIDEBAR
      ================================================== */}

      <SidebarMenu24
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* =================================================
          MAIN PAGE
      ================================================== */}

      <div className="lg:pl-[311px] xl:pl-[311px]">

        {/* =================================================
            MOBILE HEADER
        ================================================== */}

        <div className="sticky top-0 z-50 lg:hidden">
          <Header01
            onMenuClick={() => setIsSidebarOpen(true)}
          />
        </div>

        <div className="min-h-screen w-full bg-gray-100">

          {/* =================================================
              DESKTOP
          ================================================== */}

          <div className="hidden min-h-screen lg:flex">

            <div className="flex-1 min-w-0 bg-gray-50">

              <div className="px-9 py-5 space-y-4">

                {/* PAYMENT CENTRE HEADER */}

                <div className="sticky top-0 z-40">
                  <SeventyComponent
                    onBack={() => navigate(-1)}
                  />
                </div>

                {/* PROJECT / PLAN */}

                <SeventyAComponent
                  selectedPlan={selectedPlan}
                  onPlanChange={setSelectedPlan}
                  project={project}
                />

                {/* =================================================
                    MILESTONE TRACKER
                ================================================== */}

                <SeventyOneComponent
                  selectedPlan={selectedPlan}
                  paymentCompleted={isCurrentPlanCompleted}
                />

                {/* =================================================
                    ESCROW / ACTION CARD
                ================================================== */}

                {!isCurrentPlanCompleted && (
                  <SeventyThreeComponent
                    selectedPlan={selectedPlan}
                    onDispute={() =>
                      alert("Dispute Raised")
                    }
                  />
                )}

                {/* OTHER COMPONENTS */}

                <SeventyFourComponent
                  selectedPlan={selectedPlan}
                />

                <SeventyFiveComponent
                  selectedPlan={selectedPlan}
                />

                <SeventySixComponent
                  summaryData={summaryData}
                  selectedMethod={selectedMethod}
                  onMethodChange={setSelectedMethod}
                  onPay={() =>
                    alert("Payment Started")
                  }
                />

                <div className="h-20" />

              </div>
            </div>
          </div>

          {/* =================================================
              MOBILE
          ================================================== */}

          <div className="flex min-h-screen flex-col bg-gray-50 lg:hidden">

            <main className="pb-24">

              <div
                className="
                  space-y-4
                  px-4
                  py-4
                  sm:px-6
                "
              >

                {/* PAYMENT CENTRE HEADER */}

                <SeventyComponent
                  onBack={() => navigate(-1)}
                />

                {/* PROJECT / PLAN */}

                <SeventyAComponent
                  selectedPlan={selectedPlan}
                  onPlanChange={setSelectedPlan}
                  project={project}
                />

                {/* =================================================
                    MILESTONE TRACKER
                ================================================== */}

                <SeventyOneComponent
                  selectedPlan={selectedPlan}
                  paymentCompleted={isCurrentPlanCompleted}
                />

                {/* =================================================
                    ESCROW / ACTION CARD
                ================================================== */}

                {!isCurrentPlanCompleted && (
                  <SeventyThreeComponent
                    selectedPlan={selectedPlan}
                    onDispute={() =>
                      alert("Dispute Raised")
                    }
                  />
                )}

                {/* OTHER COMPONENTS */}

                <SeventyFourComponent
                  selectedPlan={selectedPlan}
                />

                <SeventyFiveComponent
                  selectedPlan={selectedPlan}
                />

                <SeventySixComponent
                  summaryData={summaryData}
                  selectedMethod={selectedMethod}
                  onMethodChange={setSelectedMethod}
                  onPay={() =>
                    alert("Payment Started")
                  }
                />

                <div className="h-10" />

              </div>
            </main>
          </div>

        </div>
      </div>

      {/* =================================================
          MOBILE BOTTOM MENU
      ================================================== */}

      <BottomMenu05 />

    </div>
  );
}