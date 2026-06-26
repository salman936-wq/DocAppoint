"use client";
import { useState } from "react";
import DashboardSidebar from "@/app/components/DashboardSidebar";
import AppointmentCard from "@/app/components/AppointmentCard";
import ProfileCard from "@/app/components/ProfileCard";

export default function DashboardPage() {
  const [activePage, setActivePage] = useState("bookings");

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <DashboardSidebar activePage={activePage} setActivePage={setActivePage} />

      {/* Main content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {activePage === "bookings" && (
          <div>
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-slate-800">My Appointments</h1>
              <p className="text-slate-500 mt-1">Manage and track your upcoming appointments</p>
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <p className="text-3xl font-bold text-slate-800">3</p>
                <p className="text-sm text-slate-500 mt-0.5">Total Bookings</p>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <p className="text-3xl font-bold text-green-600">2</p>
                <p className="text-sm text-slate-500 mt-0.5">Confirmed</p>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <p className="text-3xl font-bold text-amber-500">1</p>
                <p className="text-sm text-slate-500 mt-0.5">Pending</p>
              </div>
            </div>

            <div className="space-y-4 max-w-2xl">
              <AppointmentCard
                doctorName="Dr. Ayesha Rahman"
                specialty="Cardiologist"
                doctorImage="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&h=100&fit=crop&crop=top"
                date="June 30, 2025"
                time="10:00 AM"
                status="confirmed"
              />
              <AppointmentCard
                doctorName="Dr. Farhan Hossain"
                specialty="Neurologist"
                doctorImage="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=top"
                date="July 5, 2025"
                time="04:00 PM"
                status="pending"
              />
              <AppointmentCard
                doctorName="Dr. Priya Sharma"
                specialty="Dental Surgeon"
                doctorImage="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=top"
                date="July 12, 2025"
                time="11:00 AM"
                status="confirmed"
              />
            </div>
          </div>
        )}

        {activePage === "profile" && (
          <div>
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-slate-800">My Profile</h1>
              <p className="text-slate-500 mt-1">View and update your personal information</p>
            </div>
            <ProfileCard />
          </div>
        )}
      </main>
    </div>
  );
}
