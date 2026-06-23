import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components you already have
import Header01 from "./components/Header01";
import HeroBanner02 from "./components/HeroBanner02";
import ClientBanner03 from "./components/ClientBanner03";
import PostProjectCard from "./components/PostProjectCard";
import PopularCategories04 from "./components/PopularCategories04";
import FeaturedServices05 from "./components/FeaturedServices05";
import TopFreelancers09 from "./components/TopFreelancers09";

import ProjectSetupPage from "./components/ProjectSetupPage";
import CreateNewProjectPageHeader67b from "./components/CreateNewProjectPageHeader67b";
import CreateProjectForm68b from "./components/CreateProjectForm68b";
import ProjectSetupInfoTooltip07 from "./components/ProjectSetupInfoTooltip07";
import ClientDashboardPage from './components/ClientDashboardPage';
import MyTeamPage from "./components/MyTeamPage";
/* -------- HOME PAGE -------- */
function Home() {
  return (
    <>
      <Header01 />
      <HeroBanner02 />
      <ClientBanner03 />
      <PostProjectCard />
      <PopularCategories04 />
      <FeaturedServices05 />
      <TopFreelancers09 />
    </>
  );
}

/* -------- CREATE PROJECT PAGE -------- */
function CreateProjectPage() {
  return (
    <div className="app">
      <main className="create-project-page">
        <CreateNewProjectPageHeader67b />
        <CreateProjectForm68b />
        <ProjectSetupInfoTooltip07 />
      </main>
    </div>
  );
}

/* -------- APP -------- */
export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/dashboard" element={<ClientDashboardPage />} />
  <Route path="/create-project" element={<CreateProjectPage />} />
  <Route path="/project-setup-page" element={<ProjectSetupPage />} />
   <Route path="/my-team" element={<MyTeamPage />} />
</Routes>
      </div>
    </BrowserRouter>
  );
}