"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [loginProgress, setLoginProgess] = useState(false);

  const router = useRouter();
  const session = useSession();
  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/");
    }
  }, [session.status]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginProgess(true);
    const res = await signIn("credentials", {
      username: formData.email,
      password: formData.password,
      redirect: false,
    });

    console.log(res);

    if (!res.ok) {
      toast.error("username or password is Incorrect");
    } else {
      router.push("/");
      router.refresh();
    }
    setTimeout(() => {
      setLoginProgess(false);
    }, 1000);
  };

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Login</h1>
      <form className="block max-w-xs mx-auto" onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="email..."
          onChange={handleChange}
          required
          disabled={loginProgress}
        />
        <input
          type="password"
          name="password"
          placeholder="password.."
          onChange={handleChange}
          required
          disabled={loginProgress}
        />
        <button disabled={loginProgress} type="submit">
          Login
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
          New User?{" "}
          <Link className="underline" href={"/register"}>
            register here &raquo;
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Login;
