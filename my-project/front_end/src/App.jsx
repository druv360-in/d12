import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import LoginPage from "./components/LoginPage";

import HomePage from "./pages/HomePage";
import ProjectSetupPage from "./pages/ProjectSetupPage";
import ServiceDetailsPage from "./pages/ServiceDetailsPage";
import BrowseServicesPage from "./pages/BrowseServicesPage";
import ChatPage from "./pages/ChatPage";
import ChatDetailsPage from "./pages/ChatDetailsPage";
import ChatNotFound from "./components/chatnotfound";

import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import MenuPage from "./pages/MenuPage";
import TemplateDetailsPage from "./pages/TemplateDetailsPage";
import ProfileDetailPage from "./pages/ProfileDetailPage";
import TeamPage from "./pages/TeamPage";
import AddTeamMemberPage from "./pages/AddTeamMemberPage";
import OngoingProjectsPage from "./pages/OngoingProjectsPage";
import PaymentCentrePage from "./pages/PaymentCentrePage";
import ProjectsPage from "./pages/ProjectsPage";
import CreateNewProjectPage from "./pages/CreateNewProjectPage";
import TemplatesPage from "./pages/TemplatesPage";
import OrdersPage from "./pages/OrdersPage";

import AppLayout from "./components/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* =====================================================
            LOGIN
            ===================================================== */}

        <Route
          path="/login"
          element={<LoginPage />}
        />


        {/* =====================================================
            APPLICATION ROUTES
            ===================================================== */}

        <Route element={<AppLayout />}>

          {/* ================= HOME ================= */}

          <Route
            path="/app"
            element={<HomePage />}
          />


          {/* ================= SERVICES ================= */}

          <Route
            path="/browse-services"
            element={<BrowseServicesPage />}
          />

          <Route
            path="/service-details"
            element={<ServiceDetailsPage />}
          />


          {/* ================= PROJECTS ================= */}

          <Route
            path="/projects"
            element={<DashboardPage />}
          />

          <Route
            path="/project-setup-page"
            element={<ProjectSetupPage />}
          />

          <Route
            path="/my-projects"
            element={<ProjectsPage />}
          />

          <Route
            path="/create-new-project"
            element={<CreateNewProjectPage />}
          />

          <Route
            path="/ongoing-projects"
            element={<OngoingProjectsPage />}
          />

          <Route
            path="/orders"
            element={<OrdersPage />}
          />


          {/* ================= PAYMENTS ================= */}

          <Route
            path="/payments"
            element={<PaymentCentrePage />}
          />


          {/* ================= CHAT ================= */}

          <Route
            path="/chat"
            element={<ChatPage />}
          />

          <Route
            path="/chat/:id"
            element={<ChatDetailsPage />}
          />

          {/* Chat Not Found */}
          <Route
            path="/chatnotfound"
            element={<ChatNotFound />}
          />


          {/* ================= PROFILE ================= */}

          <Route
            path="/profile"
            element={<ProfilePage />}
          />

          <Route
            path="/profile/:id"
            element={<ProfileDetailPage />}
          />


          {/* ================= TEAM ================= */}

          <Route
            path="/team"
            element={<TeamPage />}
          />

          <Route
            path="/add-team-member"
            element={<AddTeamMemberPage />}
          />


          {/* ================= TEMPLATES ================= */}

          <Route
            path="/template"
            element={<TemplateDetailsPage />}
          />

          <Route
            path="/templates"
            element={<TemplatesPage />}
          />


          {/* ================= MENU ================= */}

          <Route
            path="/menu"
            element={<MenuPage />}
          />

        </Route>


        {/* =====================================================
            DEFAULT ROUTE
            ===================================================== */}

        <Route
          path="/"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />


        {/* =====================================================
            FALLBACK
            ===================================================== */}

        <Route
          path="*"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
