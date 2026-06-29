import IdentyDoctors from "@/app/components/IdentyDoctors";
import { getPersonalDoctorDataFromPathPage } from "@/app/data/doctorData";

export default async function DoctorDetailsPage({params}) {

const {id} = await params;
const { _id, name, specialty, image, rating, reviews, experience, availability, description, hospital, location, fee} = await getPersonalDoctorDataFromPathPage(id);


  return (
      <IdentyDoctors _id={_id} name={name} specialty={specialty} image={image} rating={rating} reviews={reviews} experience={experience} availability={availability} description={description} hospital={hospital} location={location} fee={fee}></IdentyDoctors>
  );
}
