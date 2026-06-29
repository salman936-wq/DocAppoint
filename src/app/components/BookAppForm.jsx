import { useForm, SubmitHandler } from "react-hook-form"
import { authClient } from "@/lib/auth-client";
const BookAppForm = ({ doctorId, doctorName, image, specialty, availability, fee }) => {

    
    const { register, handleSubmit, formState: { errors } } = useForm()
    const slots = availability.flatMap((range) => {
        const [start, end] = range.split(" - ");

        let arr = [];
        let time = new Date(`2000 ${start}`);
        let endTime = new Date(`2000 ${end}`);

        while (time < endTime) {
            arr.push(
                time.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                })
            );
            time.setHours(time.getHours() + 1);
        }

        return arr;
    });


    const { data: session, isPending } = authClient.useSession();
    const userEmail = session?.user?.email ?? "";
    const userId = session?.user?.id ?? "";

    // date, gender, phone, pname, time
    // user id and email
    // doctor id name and photo with specialty


    const onSubmit = async (data) => {
        const bookAppointmentDetails = {
            doctorId,
            doctorName,
            image,
            specialty,
            userId,
            userEmail,
            fee,
            availability,
            date: data.date,
            gender: data.gender,
            phone: data.phone,
            pname: data.pname,
            time: data.time
        };

        const res = await fetch("http://localhost:5500/bookings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bookAppointmentDetails)
        });
        const result = await res.json();
        console.log(result);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
            {/* Readonly doctor info */}
            <div className="grid grid-cols-2 gap-3">
                <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1.5">Doctor Name</label>
                    <input
                        type="text"
                        value={isPending ? 'Loading...' : doctorName}
                        readOnly
                        className="input input-sm w-full bg-slate-50 border border-slate-200 rounded-xl text-slate-600 text-sm cursor-not-allowed"
                    />
                </div>
                <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1.5">Your Email</label>
                    <input
                        type="email"
                        value={isPending ? 'Loading...' : userEmail}
                        readOnly
                        className="input input-sm w-full bg-slate-50 border border-slate-200 rounded-xl text-slate-600 text-sm cursor-not-allowed"
                    />
                </div>
            </div>

            <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1.5">Patient Name</label>
                <input
                    {...register("pname")}
                    type="text"
                    placeholder="Enter your full name"
                    className="input input-sm w-full border bg-white text-black border-slate-200 rounded-xl focus:border-sky-400 focus:ring-2 focus:ring-sky-100 text-sm"
                />
            </div>

            <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1.5">Gender</label>
                <select {...register("gender", { required: true })} className="select select-sm w-full border border-slate-200 rounded-xl focus:border-sky-400 text-sm bg-white text-black">
                    <option value="">Select gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                    <option>Prefer not to say</option>
                </select>
            </div>

            <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1.5">Phone Number</label>
                <input
                    type="tel"
                    {...register("phone", { required: true })}
                    placeholder="+880 17xx-xxxxxx"
                    className="input input-sm w-full border border-slate-200 rounded-xl focus:border-sky-400 focus:ring-2 focus:ring-sky-100 text-sm bg-white text-black"
                />
            </div>

            <div className="grid grid-cols-2 gap-3">
                <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1.5">Appointment Date</label>
                    <input
                        {...register("date", { required: true })}
                        type="date"
                        className="input input-sm w-full border border-slate-200 rounded-xl focus:border-sky-400 focus:ring-2 bg-white text-black focus:ring-sky-100 text-sm text-slate-600"
                    />
                </div>
                <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1.5">Appointment Time</label>
                    <select {...register("time", { required: true })} className="select select-sm w-full border border-slate-200 rounded-xl focus:border-sky-400 text-sm text-slate-600 bg-white text-black">
                        <option value="">Select time</option>
                        {slots.map((time, index) => {
                            return <option key={index + 1}>{time}</option>
                        })}
                    </select>
                </div>
            </div>

            <button type='submit' className="btn w-full bg-sky-500 hover:bg-sky-600 text-white rounded-xl border-0 font-semibold shadow-md shadow-sky-100 mt-2">
                Confirm Appointment
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            </button>
        </form>
    );
};

export default BookAppForm;