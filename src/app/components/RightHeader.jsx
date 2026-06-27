import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

const RightHeader = async () => {

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  

  return (
    <div className="navbar-end gap-2">

      {
        session?.user ?
          <>
            <div className="flex items-center gap-2">
              <Link href='/dashboard'>
                <div className="avatar cursor-pointer">

                  <div className="w-9 rounded-full ring-2 ring-sky-400 ring-offset-1">
                    <img src={session?.user?.image} alt="User avatar" />
                  </div>

                </div>
              </Link>

              <LogoutButton/>

            </div>
          </>
          :
          <>
            <Link href='/login'>
              <button
                className="btn btn-ghost btn-sm text-slate-600 hover:text-sky-500 hover:bg-sky-50 rounded-lg font-medium border border-slate-200 hover:border-sky-200 transition-all"
              >
                Login
              </button>
            </Link>

            <Link href='/register'>
              <button className="btn btn-sm bg-sky-500 hover:bg-sky-600 text-white rounded-lg font-medium border-0 shadow-md shadow-sky-200 hover:shadow-sky-300 transition-all">
                Register
              </button>
            </Link>
          </>
      }






    </div>
  );
};

export default RightHeader;