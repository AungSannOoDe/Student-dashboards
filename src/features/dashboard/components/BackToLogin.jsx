"use client";

import { Spinner } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const BackToLogin = () => {
const router = useRouter();
useEffect(() => {
    router.push("/login");
  }, []);
  return (
    <div className=" h-screen flex items-center justify-center">
      <Spinner />
    </div>
  );
}

export default BackToLogin