"use client";
"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const [username, setUsername] = useState(session.data.user.name || " ");
  const session = useSession();
  const status = session?.status;
  const userImage = session?.data?.user?.image;

  if (status === "loading") {
    return ".....loading";
  }

  if (status === "unauthenticated") {
    return redirect("/login");
  }

  const handleProfileUpdate = async () => {
    let response = await fetch("/api/profile", {
      method: "POST",
      headers: {
        contentType: "application/json",
      },
      body: JSON.stringify({ namae: username }),
    });

    if (response.ok) {
      response = await response.json();
      toast.success("profile updated successfully");
    } else {
      toast.error("Failed to update profile");
    }
  };

  return (
    <div>
      <section className="mt-8">
        <h1 className="text-center text-primary text-4xl mb-4">Profile</h1>
        <div className="max-w-md mx-auto">
          <div className="flex gap-5 items-center">
            <div className="p-2 rounded-lg relative">
              <Image
                src={userImage}
                className="w-full h-full mt-4"
                height={250}
                width={320}
              />
              <button className="px-[1rem] mt-2">Edit Avatar</button>
            </div>
            <form className="grow" onSubmit={handleProfileUpdate}>
              <input type="text" placeholder="First and last name" />
              <input
                type="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <button type="submit">Save</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
