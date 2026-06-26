export default function AppointmentCard({
  doctorName,
  specialty,
  doctorImage,
  date,
  time,
  status,
  onUpdate,
  onDelete,
}) {
  const statusConfig = {
    confirmed: { label: "Confirmed", class: "bg-green-100 text-green-700" },
    pending: { label: "Pending", class: "bg-amber-100 text-amber-700" },
    cancelled: { label: "Cancelled", class: "bg-red-100 text-red-600" },
  };

  const current = statusConfig[status] || statusConfig.pending;

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden">
      <div className="flex items-start gap-4 p-5">
        {/* Doctor image */}
        <div className="flex-shrink-0">
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
          onClick={onUpdate}
          className="btn btn-sm flex-1 bg-sky-500 hover:bg-sky-600 text-white border-0 rounded-lg font-medium shadow-sm"
        >
          <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          Update
        </button>
        <button
          onClick={onDelete}
          className="btn btn-sm flex-1 bg-white hover:bg-red-50 text-red-500 border border-red-200 hover:border-red-300 rounded-lg font-medium transition-all"
        >
          <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Delete
        </button>
      </div>
    </div>
  );
}
