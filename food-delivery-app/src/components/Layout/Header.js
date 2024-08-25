"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  const session = useSession();
  console.log(session);
  const handleLogOut = async () => {
    await signOut();
  };
  return (
    <header className="flex items-center justify-between">
      <Link className="text-primary font-semibold text-2xl" href="">
        ST PIZZA
      </Link>

      <nav className="flex items-center gap-4 text-gray-500 font-semibold">
        <Link href={""}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Contact</Link>
      </nav>

      <nav className="flex items-center gap-3 text-gray-500 font-semibold">
        {session.status === "authenticated" ? (
          <>
            <Link className="text-grey-300 mr-2" href={"/profile"}>
              {session?.data?.user?.name}
            </Link>
            <div
              onClick={handleLogOut}
              className="bg-primary rounded-full text-white px-8 py-2"
            >
              Logout
            </div>
          </>
        ) : (
          <>
            <Link
              href={"/login"}
              className="bg-primary rounded-full text-white px-8 py-2"
            >
              Login
            </Link>

            <Link
              href={"/register"}
              className="bg-primary rounded-full text-white px-8 py-2"
            >
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
