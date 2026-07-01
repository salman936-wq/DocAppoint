import { auth } from "@/lib/auth";
import AppointmentDetails from "../components/AppointmentDetails";
import { getBookingData } from "../data/doctorData";
import { headers } from "next/headers";

export default async function DashboardPage() {

const session = await auth.api.getSession({
    headers: await headers(),
  });
const {id, image, name, email} = session?.user;
console.log(email);

const bookingData = await getBookingData(id);


  return (
      session ? <AppointmentDetails bookingData={bookingData} image={image} name={name} email={email}/> : <div className="flex h-screen justify-center mt-[30%]"><span className="loading loading-bars loading-xs"></span></div>
  );

}
