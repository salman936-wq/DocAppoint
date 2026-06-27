import DoctorCard from "../components/DoctorCard";

const page = () => {
  return (
        <section className="py-12 bg-white">
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
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

    </section>
  );
};

export default page;