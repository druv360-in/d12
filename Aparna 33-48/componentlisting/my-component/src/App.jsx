import React, { useState } from "react";
import "./App.css";

/* SERVICE PAGE */
import ServiceDetailsPgHeader from "./components/servicedetails_pgheader33";
import ServiceDetailsBody from "./components/servicedetailbody34";
import StickyOrder36 from "./components/sticky_order36";
import PpCardSection37 from "./components/ppcardsection37";

/* PROFILE PAGE */
import PpHeader39 from "./components/ppheader39";
import ProfileHeroCard40 from "./components/profileherocard40";
import PpAboutMe43 from "./components/ppaboutme43";
import PpSkills44 from "./components/ppskills44";


import PortfolioCard46 from "./components/portfoliopcard46";
import HireMeBar47 from "./components/hiremebar47";
import PpServiceList48 from "./components/pservicelist48";

function App() {
  const [page, setPage] = useState("service");
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <div className="app-container">
      <div className="mobile-frame">

        {/* SERVICE HEADER */}
        {page === "service" && (
          <ServiceDetailsPgHeader
            onBack={() => console.log("Back")}
            onFavorite={() => setIsFavorited(!isFavorited)}
            isFavorited={isFavorited}
          />
        )}

        <div className="page-content">

          {/* ================= SERVICE PAGE ================= */}
          {page === "service" && (
            <>
              <ServiceDetailsBody
                onChatClick={() => setPage("profile")}
              />

              <PpCardSection37 />
            </>
          )}

          {/* ================= PROFILE PAGE ================= */}
          {page === "profile" && (
            <>
              {/* 39 */}
              <PpHeader39
                onBack={() => setPage("service")}
                onFavorite={() => setIsFavorited(!isFavorited)}
                isFavorited={isFavorited}
              />

              {/* 40 */}
              <ProfileHeroCard40 />

              {/* 43 */}
              <PpAboutMe43 />

              {/* 44 */}
              <PpSkills44 />

              {/* Reused Portfolio Section */}
              <PpCardSection37 />

              

             

              <HireMeBar47 />

              <PpServiceList48 />
            </>
          )}

        </div>

        {/* Sticky Order Only On Service Page */}
        {page === "service" && <StickyOrder36 />}
      </div>
    </div>
  );
}

export default App;