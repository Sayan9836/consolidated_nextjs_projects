"use client";

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const register = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [creatingUser, setCreatingUser] = useState(false);

  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setCreatingUser(true);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      let res = await response.json();
      if (res.status === "error") {
        toast.error(res.message);
      } else {
        setCreatingUser(false);
        toast.success("Registration successfull");
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Register</h1>
      <form className="block max-w-xs mx-auto" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="email..."
          onChange={handleChange}
          required
          disabled={creatingUser}
        />
        <input
          type="password"
          name="password"
          placeholder="password.."
          onChange={handleChange}
          required
          disabled={creatingUser}
        />
        <button disabled={creatingUser} type="submit">
          Register
        </button>
        <div className="my-4 text-gray-500 text-center">
          or login with provider
        </div>
        <button
          type="button"
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="flex items-center gap-4 text-cente justify-center"
        >
          <Image src={"/google.png"} alt="google-icon" width={24} height={24} />
          <span>Login with google</span>
        </button>
        <div className="text-center my-4 text-gray-500 border-t pt-4">
          Existing account?{" "}
          <Link href={"/login"} className="underline">
            Login here &raquo;
          </Link>
        </div>
      </form>
    </section>
  );
};

export default register;
