const DoctorCard = ({ name, specialty, experience, hospital, rating, image }) => {
    return (
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-slate-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden h-56">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <span className="bg-white/90 backdrop-blur-sm text-green-600 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            Available
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="mb-3">
          <h3 className="font-bold text-slate-800 text-lg">{name}</h3>
          <span className="inline-block mt-1 text-xs font-semibold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full">
            {specialty}
          </span>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {experience} Experience
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            {hospital}
          </div>
        </div>

        {/* Stars */}
        <div className="flex items-center gap-1 mb-4">
          <span className="text-amber-400 text-sm">★★★★★</span>
          <span className="text-xs text-slate-500 ml-1">(128 reviews)</span>
        </div>

        <div className="mt-auto">
          <button className="btn w-full bg-sky-500 hover:bg-sky-600 text-white rounded-xl border-0 font-semibold shadow-md shadow-sky-100 hover:shadow-sky-200 transition-all">
            View Details
          </button>
        </div>
      </div>
    </div>
    );
};

export default DoctorCard;