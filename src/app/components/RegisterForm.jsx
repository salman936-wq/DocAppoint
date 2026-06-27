'use client'
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form"

const RegisterForm = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm()

  const onSubmit = async(data) => {
    const {name, email, password, photo} = data;
    
    const { data:res, error } = await authClient.signUp.email({
    name: name, // required
    email: email, // required
    password: password, // required
    image: photo,
    callbackURL: "/",
});

if(res){
  alert('Register success')
  redirect('/')
}
if(error){
  return alert(error.message)
}

  } 
  const password = watch("password", "");

  const passwordRules = {
    minLength: password.length >= 6,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
  };

  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="text-sm font-semibold text-slate-600 block mb-1.5">Full Name</label>
        <input
          type="text"
          {...register("name", { required: true })}
          placeholder="Your full name"
          className="input w-full border border-slate-200 rounded-xl focus:border-sky-400 focus:ring-2 focus:ring-sky-100 bg-white text-slate-700"
        />
        {errors.name && <span className="text-red-700/50 text-[12px] mt-2 ml-1">Name is required</span>}
      </div>

      <div>
        <label className="text-sm font-semibold text-slate-600 block mb-1.5">Email Address</label>
        <input
          type="email"
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
          placeholder="https://example.com/photo.jpg"
          className="input w-full border border-slate-200 rounded-xl focus:border-sky-400 focus:ring-2 focus:ring-sky-100 bg-white text-slate-700"
        />
      </div>

      <div>
        <label className="text-sm font-semibold text-slate-600 block mb-1.5">Password</label>
        <input
          {...register("password", { required: true })}
          type="password"
          placeholder="Create a strong password"
          className="input w-full border required border-slate-200 rounded-xl focus:border-sky-400 focus:ring-2 focus:ring-sky-100 bg-white text-slate-700"
        />
        {errors.password && <span className="text-red-700/50 text-[12px] mt-2 ml-1">Password required</span>}
        {/* Validation hints */}
        <div className="mt-2 grid grid-cols-3 gap-1.5">

          <div className={`flex items-center gap-1 text-xs ${passwordRules.minLength ? 'text-green-700' : 'text-slate-400'}`}>
            <div className="w-3 h-3 rounded-full border border-slate-300 flex items-center justify-center">
              <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            6+ characters
          </div>

          <div className={`flex items-center gap-1 text-xs ${passwordRules.uppercase ? 'text-green-700' : 'text-slate-400'}`}>
            <div className="w-3 h-3 rounded-full border border-slate-300 flex items-center justify-center">
              <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            Uppercase
          </div>
          <div className={`flex items-center gap-1 text-xs ${passwordRules.lowercase ? 'text-green-700' : 'text-slate-400'}`}>
            <div className="w-3 h-3 rounded-full border border-slate-300 flex items-center justify-center">
              <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            Lowercase
          </div>
        </div>
      </div>

      <button type="submit" className="btn w-full bg-sky-500 hover:bg-sky-600 text-white rounded-xl border-0 font-semibold shadow-md shadow-sky-200 hover:shadow-sky-300 mt-2">
        Create Account
      </button>
      
    </form>
  );
};

export default RegisterForm;