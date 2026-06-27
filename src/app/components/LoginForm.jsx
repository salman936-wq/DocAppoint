'use client'
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form"

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    const {email, password} = data;
    const { data:res, error } = await authClient.signIn.email({
    email: email, // required
    password: password, // required
    rememberMe: true,
    callbackURL: "/",
});

if(res){
  alert('Login success')
  redirect('/')
}
if(error){
  return alert(error.message)
}
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
        <div className="flex items-center justify-between mb-1.5">
          <label className="text-sm font-semibold text-slate-600">Password</label>
          <a className="text-xs text-sky-500 hover:text-sky-600 cursor-pointer font-medium">Forgot password?</a>
        </div>
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Enter your password"
          className="input w-full border border-slate-200 rounded-xl focus:border-sky-400 focus:ring-2 focus:ring-sky-100 bg-white text-slate-700"
        />
        {errors.password && <span className="text-red-700/50 text-[12px] mt-2 ml-1">Password required</span>}
      </div>

      <button type="submit" className="btn w-full bg-sky-500 hover:bg-sky-600 text-white rounded-xl border-0 font-semibold shadow-md shadow-sky-200 hover:shadow-sky-300 mt-2">
        Login
      </button>
    </form>
  );
};

export default LoginForm;