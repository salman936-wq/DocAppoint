import { getAllDoctors } from "../data/doctorData";
import DoctorCard from "./DoctorCard";

const TopDoctors = async () => {

  const doctors = await getAllDoctors();
  const randomDoctors = doctors.sort(() => Math.random() - 0.5).slice(0, 3).map(doctor => doctor);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-sky-500 text-sm font-semibold uppercase tracking-widest">Our Specialists</span>
          <h2 className="text-4xl font-extrabold text-slate-800 mt-2 mb-4">Top Rated Doctors</h2>
          <p className="text-slate-500 max-w-md mx-auto">Board-certified specialists with years of experience, dedicated to providing you with the best care.</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {
            randomDoctors.map(doctor => {
              return <DoctorCard key={doctor.id} name={doctor.name} specialty={doctor.specialty} experience={doctor.experience} hospital={doctor.hospital} rating={doctor.rating} image={doctor.image} reviews={doctor.reviews} id={doctor._id}></DoctorCard>
            })
          }

        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="btn btn-outline rounded-xl px-10 text-sky-500 border-sky-300 hover:bg-sky-500 hover:border-sky-500 hover:text-white transition-all">
            View All Doctors
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopDoctors;