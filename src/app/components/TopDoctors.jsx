import DoctorCard from "./DoctorCard";

const TopDoctors = () => {
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
          <DoctorCard
            name="Dr. Ayesha Rahman"
            specialty="Cardiologist"
            experience="10 Years"
            hospital="Labaid Hospital"
            rating="★★★★★"
            image="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=300&fit=crop&crop=top"
          />
          <DoctorCard
            name="Dr. Farhan Hossain"
            specialty="Neurologist"
            experience="8 Years"
            hospital="Square Hospital"
            rating="★★★★★"
            image="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop&crop=top"
          />
          <DoctorCard
            name="Dr. Priya Sharma"
            specialty="Dental Surgeon"
            experience="12 Years"
            hospital="Popular Hospital"
            rating="★★★★★"
            image="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop&crop=top"
          />
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