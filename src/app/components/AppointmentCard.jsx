"use client";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { deleteBookingData, updateBookingData } from "../data/doctorData";




export default function AppointmentCard({ doctorName, specialty, doctorImage, date, time, status, _id, doctorId, image, userId, fee, gender, phone, pname, userEmail }) {
  const statusConfig = {
    confirmed: { label: "Confirmed", class: "bg-green-100 text-green-700" },
    pending: { label: "Pending", class: "bg-amber-100 text-amber-700" },
    cancelled: { label: "Cancelled", class: "bg-red-100 text-red-600" },
  };
  const current = statusConfig[status] || statusConfig.pending;



  const { register, handleSubmit, formState: { errors } } = useForm()
  const [modalOpen, setModalOpen] = useState(false);
  const { data: session, isPending } = authClient.useSession();
  const onClose = () => setModalOpen(false)


  const onSubmit = async (data) => {
    const bookAppointmentDetails = {
      pname: data.pname,
      phone: data.phone,
      gender: data.gender,
    };


    updateBookingData(_id, bookAppointmentDetails)

    if (updateBookingData) {

      onClose()
      window.location.reload();
    }
  }


  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden">
      <div className="flex items-start gap-4 p-5">
        {/* Doctor image */}
        <div className="shrink-0">
          <img
            src={doctorImage}
            alt={doctorName}
            className="w-16 h-16 rounded-xl object-cover object-top shadow-sm"
          />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 flex-wrap">
            <div>
              <h3 className="font-bold text-slate-800">{doctorName}</h3>
              <p className="text-sky-500 text-sm font-medium">{specialty}</p>
            </div>
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${current.class}`}>
              {current.label}
            </span>
          </div>

          <div className="flex flex-wrap gap-3 mt-3">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg">
              <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {date}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg">
              <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {time}
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="border-t border-slate-100 px-5 py-3 flex gap-2 bg-slate-50/50">
        <button
          onClick={() => setModalOpen(true)}
          className="btn btn-sm flex-1 bg-sky-500 hover:bg-sky-600 text-white border-0 rounded-lg font-medium shadow-sm"
        >
          <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          Update
        </button>

        <button
          onClick={async () => {
            const result = await deleteBookingData(_id);

            if (result) {
              alert("Deleted successfully");
              window.location.reload();
            } else {
              alert("Failed to delete booking");
            }
          }}
          className="btn btn-sm flex-1 bg-white hover:bg-red-50 text-red-500 border border-red-200 hover:border-red-300 rounded-lg font-medium transition-all"
        >
          <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Delete
        </button>
      </div>







      {/* ------------------------------------- */}

      {modalOpen && <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-sky-500 to-sky-600 p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">Edit Appointment</h2>
                <p className="text-sky-100 text-sm mt-0.5">Change your details below</p>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>










          {/* -------------------------------------- Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
            {/* Readonly doctor info */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1.5">Doctor Name</label>
                <input
                  type="text"
                  value={isPending ? 'Loading...' : doctorName}
                  readOnly
                  className="input input-sm w-full bg-slate-50 border border-slate-200 rounded-xl text-slate-600 text-sm cursor-not-allowed"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1.5">Your Email</label>
                <input
                  type="email"
                  value={isPending ? 'Loading...' : userEmail}
                  readOnly
                  className="input input-sm w-full bg-slate-50 border border-slate-200 rounded-xl text-slate-600 text-sm cursor-not-allowed"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1.5">Patient Name</label>
              <input
                {...register("pname")}
                type="text"
                defaultValue={pname}
                placeholder="Enter your full name"
                className="input input-sm w-full border bg-white text-black border-slate-200 rounded-xl focus:border-sky-400 focus:ring-2 focus:ring-sky-100 text-sm"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1.5">Gender</label>
              <select
                {...register("gender", { required: true })}
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="select select-sm w-full border border-slate-200 rounded-xl focus:border-sky-400 text-sm bg-white text-black"
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1.5">Phone Number</label>
              <input
                type="tel"
                {...register("phone", { required: true })}
                placeholder="+880 17xx-xxxxxx"
                defaultValue={phone}
                className="input input-sm w-full border border-slate-200 rounded-xl focus:border-sky-400 focus:ring-2 focus:ring-sky-100 text-sm bg-white text-black"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1.5">Appointment Date</label>
                <input
                  {...register("date", { required: true })}
                  type="date"
                  readOnly
                  defaultValue={date}
                  className="input input-sm w-full bg-slate-50 border border-slate-200 rounded-xl text-slate-600 text-sm cursor-not-allowed"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1.5">Appointment Time</label>

                <input
                  type="text"
                  value={time}
                  readOnly
                  className="input input-sm w-full bg-slate-50 border border-slate-200 rounded-xl text-slate-600 text-sm cursor-not-allowed"
                />

              </div>
            </div>

            <button type='submit' className="btn w-full bg-sky-500 hover:bg-sky-600 text-white rounded-xl border-0 font-semibold shadow-md shadow-sky-100 mt-2">
              Confirm Edit
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </button>
          </form>


        </div>
      </div>}


    </div>
  );
}
