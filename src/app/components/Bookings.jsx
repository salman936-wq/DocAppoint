import AppointmentCard from "@/app/components/AppointmentCard";

const Bookings = ({bookingData}) => {



  return (
    <div>
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-slate-800">My Appointments</h1>
              <p className="text-slate-500 mt-1">Manage and track your upcoming appointments</p>
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <p className="text-3xl font-bold text-slate-800">{bookingData.length}</p>
                <p className="text-sm text-slate-500 mt-0.5">Total Bookings</p>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <p className="text-3xl font-bold text-green-600">{bookingData.length}</p>
                <p className="text-sm text-slate-500 mt-0.5">Confirmed</p>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <p className="text-3xl font-bold text-amber-500">0</p>
                <p className="text-sm text-slate-500 mt-0.5">Pending</p>
              </div>
            </div>

            <div className="w-full grid grid-cols-2 gap-4">
              {
                bookingData.map((info, index) => {
                 return <AppointmentCard key={index + 1} _id={info._id} doctorName={info.doctorName} specialty={info.specialty} doctorImage={info.image} date={info.date} time={info.time} status="confirmed" doctorId={info.doctorId} image={info.image} userId={info.userId} userEmail={info.userEmail} fee={info.fee} gender={info.gender} phone={info.phone} pname={info.pname} availability={info.availability}/>
                })
              }
            </div>
          </div>
  );
};

export default Bookings;