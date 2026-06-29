import { auth } from "@/lib/auth";
import AppointmentDetails from "../components/AppointmentDetails";
import { getBookingData } from "../data/doctorData";
import { headers } from "next/headers";

export default async function DashboardPage() {

const session = await auth.api.getSession({
    headers: await headers(),
  });
const id = session?.user.id;

const bookingData = await getBookingData(id);


  return (
      session ? <AppointmentDetails bookingData={bookingData}/> : <div className="flex h-screen justify-center mt-[30%]"><span className="loading loading-bars loading-xs"></span></div>
  );

}
