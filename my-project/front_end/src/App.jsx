import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// =====================================================
// LOGIN / COMMON COMPONENTS
// =====================================================

import LoginPage from "./components/LoginPage";
import OrdernowSD from "./components/Ordernow_SD";

// =====================================================
// PAGES
// =====================================================

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


// =====================================================
// PROJECT TASK OVERLAY COMPONENTS
// =====================================================

import ProjectTaskView from "./components/projecttask_view";
import ProjectTaskEdit from "./components/projecttask_edit";
import ProjectTaskDelete from "./components/projecttask_delete";

// =====================================================
// APP LAYOUT
// =====================================================

import AppLayout from "./components/AppLayout";

// =====================================================
// PROJECT / SERVICE OVERLAY COMPONENTS
// =====================================================

import ViewProjectDetails from "./components/view_projectdetails";
import ProjectProposal from "./components/project_proposal";
import ProjectEdit from "./components/project_edit";
import ProjectDelete from "./components/project_delete";
import ServiceNotFound from "./components/servicenotfound";
import Order1 from "./components/order1";
import Order2 from "./components/order2";
import EmmaChat from "./components/emmachat";
import MarcusChat from "./components/marcuschat";
import RequestRevision from "./components/requestrevision";
// PAYMENT OVERLAY COMPONENTS
// =====================================================

import ReleasePayment from "./components/releasepayment";
import PaymentReleased from "./components/paymentreleased";

// =========================================================
// PROJECT TASK OVERLAY ROUTES
// =========================================================

const ProjectTaskOverlayRoute = () => {
  return (
    <>
      <OngoingProjectsPage />
      <ProjectTaskView />
    </>
  );
};

const ProjectTaskEditOverlayRoute = () => {
  return (
    <>
      <OngoingProjectsPage />
      <ProjectTaskEdit />
    </>
  );
};

const ProjectTaskDeleteOverlayRoute = () => {
  return (
    <>
      <OngoingProjectsPage />
      <ProjectTaskDelete />
    </>
  );
};

// =========================================================
// DELETE PROJECT OVERLAY ROUTE
// =========================================================

const ProjectDeleteOverlayRoute = () => {
  return (
    <>
      <ProjectsPage />
      <ProjectDelete />
    </>
  );
};

// =========================================================
// RELEASE PAYMENT OVERLAY ROUTE
// =========================================================

const ReleasePaymentOverlayRoute = () => {
  return (
    <>
      <PaymentCentrePage />
      <ReleasePayment />
    </>
  );
};

// =========================================================
// PAYMENT RELEASED OVERLAY ROUTE
// =========================================================

const PaymentReleasedOverlayRoute = () => {
  return (
    <>
      <PaymentCentrePage />
      <PaymentReleased />
    </>
  );
};

// =========================================================
// APP
// =========================================================

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* =====================================================
            LOGIN
        ====================================================== */}

        <Route
          path="/login"
          element={<LoginPage />}
        />

        {/* =====================================================
            APPLICATION ROUTES
        ====================================================== */}

        <Route element={<AppLayout />}>

          {/* ===================================================
              HOME
          =================================================== */}

          <Route
            path="/app"
            element={<HomePage />}
          />

          {/* ===================================================
              SERVICES
          =================================================== */}

          <Route
            path="/browse-services"
            element={<BrowseServicesPage />}
          />

          <Route
            path="/service-details"
            element={<ServiceDetailsPage />}
          />

          <Route
            path="/ordernow-sd"
            element={<OrdernowSD />}
          />

          {/* ===================================================
              PROJECTS
          =================================================== */}

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

          {/* ===================================================
              ONGOING PROJECTS
          =================================================== */}

          <Route
            path="/ongoing-projects"
            element={<OngoingProjectsPage />}
          />

          <Route
            path="/projecttask-edit/:id"
            element={<ProjectTaskEditOverlayRoute />}
          />

          <Route
            path="/projecttask-view/:id"
            element={<ProjectTaskOverlayRoute />}
          />

          <Route
            path="/projecttask-delete/:id"
            element={<ProjectTaskDeleteOverlayRoute />}
          />

          {/* ===================================================
              ORDERS
          =================================================== */}

          <Route
            path="/orders"
            element={<OrdersPage />}
          />
          
          <Route path="/order1" 
          element={<Order1 />} 
          />


           <Route path="/order2" 
           element={<Order2 />} 
           />
           

          {/* =====================================================
    EMMA CHAT
====================================================== */}

<Route
  path="/emmachat"
  element={<EmmaChat />}
/>

<Route
  path="/marcuschat"
  element={<MarcusChat />}
/>
<Route
  path="/requestrevision"
  element={<RequestRevision />}
/>
          {/* ===================================================
              PAYMENTS
          =================================================== */}

          <Route
            path="/payments"
            element={<PaymentCentrePage />}
          />

          <Route
            path="/release-payment"
            element={<ReleasePaymentOverlayRoute />}
          />

          <Route
            path="/payment-released"
            element={<PaymentReleasedOverlayRoute />}
          />

          {/* ===================================================
              CHAT
          =================================================== */}

          <Route
            path="/chat"
            element={<ChatPage />}
          />

          <Route
            path="/chat/:id"
            element={<ChatDetailsPage />}
          />

          <Route
            path="/chatnotfound"
            element={<ChatNotFound />}
          />

          {/* ===================================================
              PROFILE
          =================================================== */}

          <Route
            path="/profile"
            element={<ProfilePage />}
          />

          <Route
            path="/profile/:id"
            element={<ProfileDetailPage />}
          />

          {/* ===================================================
              TEAM
          =================================================== */}

          <Route
            path="/team"
            element={<TeamPage />}
          />

          <Route
            path="/add-team-member"
            element={<AddTeamMemberPage />}
          />

          {/* ===================================================
              TEMPLATES
          =================================================== */}

          <Route
            path="/template"
            element={<TemplateDetailsPage />}
          />

          <Route
            path="/templates"
            element={<TemplatesPage />}
          />

          {/* ===================================================
              MENU
          =================================================== */}

          <Route
            path="/menu"
            element={<MenuPage />}
          />

        </Route>

        {/* =====================================================
            VIEW PROJECT DETAILS
        ====================================================== */}

        <Route
          path="/view-projectdetails"
          element={<ViewProjectDetails />}
        />

        {/* =====================================================
            PROJECT PROPOSALS
        ====================================================== */}

        <Route
          path="/project-proposal"
          element={<ProjectProposal />}
        />

        {/* =====================================================
            EDIT PROJECT
        ====================================================== */}

        <Route
          path="/project-edit"
          element={<ProjectEdit />}
        />

        {/* =====================================================
            DELETE PROJECT
        ====================================================== */}

        <Route
          path="/project-delete"
          element={<ProjectDeleteOverlayRoute />}
        />

        {/* =====================================================
            DEFAULT ROUTE
        ====================================================== */}

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
            SERVICE NOT FOUND
        ====================================================== */}

        <Route
          path="/servicenotfound"
          element={<ServiceNotFound />}
        />

        {/* =====================================================
            FALLBACK ROUTE
        ====================================================== */}

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