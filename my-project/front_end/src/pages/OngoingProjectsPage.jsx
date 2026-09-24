import { useState } from "react";
import { useNavigate } from "react-router-dom";

import BottomMenu05 from "../components/BottomMenu05";
import Header01 from "../components/Header01";
import SidebarMenu24 from "../components/SidebarMenu24";

import FiftyEightComponent from "../components/58component";
import FiftyNineComponent from "../components/59component";
import SixtyComponent from "../components/60component";
import SixtyTwoComponent from "../components/62component";
import SixtyFourComponent from "../components/64component";
import SixtySixComponent from "../components/66component";
import SixtySevenComponent from "../components/67component";
import SixtyEightComponent from "../components/68component";

export default function OngoingProjectsPage() {
  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const project = {
    title: "E-Commerce Platform Development",
    description:
      "Building a complete multi-vendor e-commerce platform with React, Node.js, and MongoDB. Includes admin dashboard, vendor panels, and customer interface.",
    deadline: "2026-06-15",
    budget: 2500,
    progress: 65,
    daysLeft: 18,
    status: "active",
  };

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete payment gateway integration",
      description:
        "Integrate Stripe and PayPal checkout flows into the platform.",
      assignee: "Emma Thompson",
      dueDate: "2026-06-05",
      priority: "high",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Design product detail pages",
      description:
        "Create responsive UI for all product detail page variants.",
      assignee: "Marcus Johnson",
      dueDate: "2026-06-08",
      priority: "high",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Create promotional video",
      description:
        "Produce a 60-second promo video for the launch campaign.",
      assignee: "Alex Rivera",
      dueDate: "2026-06-10",
      priority: "medium",
      status: "To Do",
    },
    {
      id: 4,
      title: "Implement vendor dashboard",
      description:
        "Build analytics and order management for vendor accounts.",
      assignee: "Emma Thompson",
      dueDate: "2026-05-30",
      priority: "medium",
      status: "Completed",
    },
  ]);

  const handleDeleteTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== id)
    );
  };

  const handleViewTask = (id) => {
    console.log("View task:", id);
  };

  const handleEditTask = (id) => {
    console.log("Edit task:", id);
  };

  return (
    <div className="min-h-screen overflow-visible bg-gray-100">
      {/* Sidebar */}
      <SidebarMenu24
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content */}
      <div className="lg:pl-[330px] xl:pl-[330px]">
        {/* Mobile Header */}
        <div className="sticky top-0 z-50 lg:hidden">
          <Header01
            onMenuClick={() => setIsSidebarOpen(true)}
          />
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:block">
          <main className="min-h-screen overflow-visible bg-gray-50">
            <div className="flex flex-col gap-6 overflow-visible px-8 py-6">
              
              {/* Project Header */}
              <FiftyEightComponent
                onBack={() => navigate(-1)}
                onPayment={() => navigate("/payments")}
              />

              {/* Project Overview */}
              <FiftyNineComponent project={project} />

              {/* Main Two Column Layout */}
              <div className="grid grid-cols-[2fr_1fr] items-start gap-5 w-full">
                
                {/* LEFT COLUMN */}
                <div className="flex flex-col gap-5 min-w-0 w-full">
                  <SixtyComponent />

                  <SixtyTwoComponent
                    tasks={tasks}
                    setTasks={setTasks}
                    onView={handleViewTask}
                    onEdit={handleEditTask}
                    onDelete={handleDeleteTask}
                  />

                  <SixtyFourComponent />
                </div>

                {/* RIGHT COLUMN */}
                <div className="flex flex-col gap-5 min-w-0 w-full">
                  <SixtySixComponent />

                  <SixtySevenComponent
                    onFileSelect={(files) =>
                      console.log("Selected files:", files)
                    }
                  />

                  <SixtyEightComponent />
                </div>
              </div>

              {/* Bottom spacing */}
              <div className="h-10" />
            </div>
          </main>
        </div>

        {/* ================= MOBILE / TABLET ================= */}
        <div className="min-h-screen overflow-visible bg-gray-50 lg:hidden">
          <main className="flex flex-col gap-6 overflow-visible px-4 py-4 pb-24 sm:px-6">
            
            {/* Project Header */}
            <FiftyEightComponent
              onBack={() => navigate(-1)}
              onPayment={() => navigate("/payments")}
            />

            {/* Project Overview */}
            <FiftyNineComponent project={project} />

            {/* Team Collaborators */}
            <SixtyComponent />

            {/* Project Tasks */}
            <SixtyTwoComponent
              tasks={tasks}
              setTasks={setTasks}
              onView={handleViewTask}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
            />

            {/* Completed Work */}
            <SixtyFourComponent />

            {/* Recent Activity */}
            <SixtySixComponent />

            {/* File Sharing */}
            <SixtySevenComponent
              onFileSelect={(files) =>
                console.log("Selected files:", files)
              }
            />

            {/* Project Chat */}
            <SixtyEightComponent />
          </main>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <BottomMenu05 />
    </div>
  );
}