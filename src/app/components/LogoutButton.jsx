"use client"
import { authClient } from "@/lib/auth-client"
import { redirect } from "next/navigation";
const LogoutButton = () => {
const handelLogout = async ()=> {
  await authClient.signOut({
  fetchOptions: {
    onSuccess: () => {
      redirect('/login')
    },
  },
});
}
  return (
    <button onClick={handelLogout} className="btn btn-ghost btn-sm text-slate-500 hover:text-red-500 hover:bg-red-50 hover:border-transparent rounded-lg font-medium transition-all">Logout</button>
  );
};

export default LogoutButton;