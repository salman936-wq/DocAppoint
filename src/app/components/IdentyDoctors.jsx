"use client";
import { useState } from "react";
import BookingModal from "@/app/components/BookingModal";

// Doctor: id, name, photo, specialty
// customer: id, email,

// new: parent name, gender, phone number, apnm date, apnm time

const IdentyDoctors = ({ _id, name, specialty, image, rating, reviews, experience, availability, description, hospital, location, fee }) => {


    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <div className="max-w-5xl mx-auto px-4">
                {/* Breadcrumb */}
                <div className="text-sm text-slate-500 mb-6 flex items-center gap-2">
                    <a className="hover:text-sky-500 cursor-pointer">Home</a>
                    <span>/</span>
                    <a className="hover:text-sky-500 cursor-pointer">Doctors</a>
                    <span>/</span>
                    <span className="text-slate-700 font-medium">{name}</span>

                </div>

                <div className="bg-white rounded-3xl shadow-md border border-slate-100 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        {/* Left — Doctor Image */}
                        <div className="relative">
                            <img
                                src={image}
                                alt={name}
                                className="w-full h-full object-cover min-h-[480px]"
                            />
                            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-slate-900/60 to-transparent" />
                            <div className="absolute top-4 left-4">
                                <span className="bg-white/90 backdrop-blur-sm text-green-600 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    Available Today
                                </span>
                            </div>
                        </div>

                        {/* Right — Details */}
                        <div className="p-8 lg:p-10">
                            <div className="mb-6">
                                <span className="text-xs font-semibold text-sky-600 bg-sky-50 px-3 py-1 rounded-full uppercase tracking-wide">{specialty}</span>
                                <h1 className="text-3xl font-extrabold text-slate-800 mt-3">{name}</h1>
                                <span className="text-[14px] text-gray-700">{description}</span>
                                <div className="flex items-center gap-1.5 mt-2">
                                    <span className="text-amber-400 text-sm">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <span key={star}>
                                                {rating >= star ? "★" : rating >= star - 0.5 ? "★" : "☆"}
                                            </span>
                                        ))}
                                    </span>
                                    <span className="text-sm text-slate-500">({reviews})</span>
                                </div>
                            </div>

                            <div className="space-y-3 mb-6">
                                <div className="flex items-center gap-3 text-sm text-slate-600">
                                    <div className="w-9 h-9 rounded-xl bg-sky-50 flex items-center justify-center shrink-0">
                                        <svg className="w-4 h-4 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400">Experience</p>
                                        <p className="font-semibold text-slate-700">{experience}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-slate-600">
                                    <div className="w-9 h-9 rounded-xl bg-sky-50 flex items-center justify-center shrink-0">
                                        <svg className="w-4 h-4 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400">Hospital</p>
                                        <p className="font-semibold text-slate-700">{hospital}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-slate-600">
                                    <div className="w-9 h-9 rounded-xl bg-sky-50 flex items-center justify-center shrink-0">
                                        <svg className="w-4 h-4 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400">Location</p>
                                        <p className="font-semibold text-slate-700">{location}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-slate-600">
                                    <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400">Consultation Fee</p>
                                        <p className="font-semibold text-green-600 text-base">৳ {fee} per visit</p>
                                    </div>
                                </div>
                            </div>

                            {/* Availability */}
                            <div className="mb-8">
                                <h3 className="font-bold text-slate-700 mb-3 text-sm uppercase tracking-wide">Available Slots</h3>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="flex items-center gap-2 bg-sky-50 text-sky-700 rounded-xl px-3 py-2.5 text-sm font-medium">
                                        <svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                                        </svg>
                                        {availability[0]}
                                    </div>
                                    <div className="flex items-center gap-2 bg-purple-50 text-purple-700 rounded-xl px-3 py-2.5 text-sm font-medium">
                                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                        </svg>
                                        {availability[1]}
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => setModalOpen(true)}
                                className="btn w-full bg-sky-500 hover:bg-sky-600 text-white rounded-xl border-0 font-bold text-base shadow-lg shadow-sky-200 hover:shadow-sky-300 hover:-translate-y-0.5 transition-all"
                            >
                                Book Appointment
                                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} id={_id} name={name} image={image} specialty={specialty} availability={availability} fee={fee} />
        </div>
    );
};

export default IdentyDoctors;