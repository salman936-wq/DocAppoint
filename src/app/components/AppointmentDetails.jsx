"use client";
import { useState } from "react";
import DashboardSidebar from "@/app/components/DashboardSidebar";
import ProfileCard from "@/app/components/ProfileCard";
import Bookings from "./Bookings";

const AppointmentDetails = ({bookingData, image, name, email}) => {
  const [activePage, setActivePage] = useState("bookings");

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <DashboardSidebar image={image} name={name} email={email} bookingData={bookingData}  activePage={activePage} setActivePage={setActivePage} />

      {/* Main content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {activePage === "bookings" && (
          <Bookings bookingData={bookingData}/>
        )}

        {activePage === "profile" && (
          <div>
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-slate-800">My Profile</h1>
              <p className="text-slate-500 mt-1">View and update your personal information</p>
            </div>
            <ProfileCard bookingData={bookingData}/>
          </div>
        )}
      </main>
    </div>
  );
};

export default AppointmentDetails;