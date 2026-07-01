"use client"
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import EditProfileModal from "./EditProfileModal";

export default function ProfileCard({bookingData}) {
const { data: session, isPending } = authClient.useSession()
const [modalOpen, setModalOpen] = useState(false);


  return (
    <div>
      <div className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden">
        {/* Cover */}
        <div className="h-28 bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 relative">
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E\")"
            }}
          />
        </div>

        <div className="px-6 pb-6">
          {/* Avatar */}
          <div className="-mt-12 mb-4">
            <div className="avatar">
              <div className="w-24 rounded-2xl ring-4 ring-white shadow-lg">
                <img src={isPending ? <p>Loading...</p> : session?.user.image} alt="Profile" />
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-xl font-bold text-slate-800">{isPending ? <p>Loading...</p> : session?.user.name}</h2>
              <span className="bg-sky-100 text-sky-600 text-xs font-semibold px-2 py-0.5 rounded-full">Patient</span>
            </div>
            <p className="text-slate-500 text-sm">{isPending ? <p>Loading...</p> : session?.user.email}</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-6 p-4 bg-slate-50 rounded-xl">
            <div className="text-center">
              <p className="text-xl font-bold text-slate-800">{bookingData.length}</p>
              <p className="text-xs text-slate-500 mt-0.5">Total Visits</p>
            </div>
            <div className="w-px bg-slate-200 self-stretch" />
            <div className="text-center">
              <p className="text-xl font-bold text-slate-800">0</p>
              <p className="text-xs text-slate-500 mt-0.5">Upcoming</p>
            </div>
          </div>



          {/* Update button */}
          <button onClick={() => setModalOpen(true)} className="btn w-full bg-sky-500 hover:bg-sky-600 text-white rounded-xl border-0 font-semibold shadow-md shadow-sky-100">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Update Profile
          </button>
        </div>
      </div>

      <EditProfileModal onClose={() => setModalOpen(false)} modalOpen={modalOpen} isPending={isPending} session={session}/>
    </div>
  );
}
