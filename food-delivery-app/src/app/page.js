"use client";

import About from "@/components/Layout/About";
import Contact from "@/components/Layout/Contact";
import Footer from "@/components/Layout/Footer";
import Hero from "@/components/Layout/Hero";
import HomeMenu from "@/components/Layout/HomeMenu";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const session = useSession();

  console.log(session);
  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/login");
    }
  }, [session.status]);
  return (
    <>
      <Hero />
      <HomeMenu />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
