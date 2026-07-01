'use client'
import { useForm } from "react-hook-form"
import { updateUserData } from "../data/doctorData";

export default function EditProfileModal({modalOpen, onClose, session, isPending}) {
  if (!modalOpen) return null;

  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  
    const onSubmit = async(data) => {
      const {name, email, photo} = data;
      const {id} = session?.user;
      const UpdateDatas = {
        name,
        email,
        photo
      }

      updateUserData(id, UpdateDatas)

      if(updateUserData) {
        alert("User updated successfully")
        onClose()
        window.location.reload();
      }
    }

    

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-sky-500 to-sky-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">Edit Profile</h2>
              <p className="text-sky-100 text-sm mt-0.5">Fill details below</p>
            </div>
            <button onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Form */}
        {
          isPending ?<> <div className="flex items-center justify-center">Loading...</div> </>:
<>
<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-6">
      <div>
        <label className="text-sm font-semibold text-slate-600 block mb-1.5">Full Name</label>
        <input
          type="text"
          {...register("name", { required: true })}
          defaultValue={session?.user.name}
          placeholder="Your full name"
          className="input w-full border border-slate-200 rounded-xl focus:border-sky-400 focus:ring-2 focus:ring-sky-100 bg-white text-slate-700"
        />
        {errors.name && <span className="text-red-700/50 text-[12px] mt-2 ml-1">Name is required</span>}
      </div>

      <div>
        <label className="text-sm font-semibold text-slate-600 block mb-1.5">Email Address</label>
        <input
          type="email"
          defaultValue={session?.user.email}
          {...register("email", { required: true })}
          placeholder="you@example.com"
          className="input w-full border border-slate-200 rounded-xl focus:border-sky-400 focus:ring-2 focus:ring-sky-100 bg-white text-slate-700"
        />
        {errors.email && <span className="text-red-700/50 text-[12px] mt-2 ml-1">Email is required</span>}
      </div>

      <div>
        <label className="text-sm font-semibold text-slate-600 block mb-1.5">Photo URL</label>
        <input
          type="url"
          {...register("photo")}
          defaultValue={session?.user.image}
          placeholder="https://example.com/photo.jpg"
          className="input w-full border border-slate-200 rounded-xl focus:border-sky-400 focus:ring-2 focus:ring-sky-100 bg-white text-slate-700"
        />
      </div>

      <button type="submit" className="btn w-full bg-sky-500 hover:bg-sky-600 text-white rounded-xl border-0 font-semibold shadow-md shadow-sky-200 hover:shadow-sky-300 mt-2">
        Update Profile
      </button>
      
    </form>
    </>
        }


        
      </div>
    </div>
  );
}
