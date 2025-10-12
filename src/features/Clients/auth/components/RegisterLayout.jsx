"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useAccountStore from "@/stores/useAccountStore";
import Spinner from "@/components/Spinner";

export default function RegisterLayout({ children }) {
  const router = useRouter();
  const { token, SpecifyId } = useAccountStore();
const [isChecking, setIsChecking] = useState(true);
 console.log(SpecifyId);
  useEffect(() => {
    const isEmptyObject = SpecifyId && 
                         typeof SpecifyId === 'object' && 
                         !Array.isArray(SpecifyId) && 
                         Object.keys(SpecifyId).length === 0;

    if (isEmptyObject) {
      console.log("SpecifyId is empty, redirecting to home");
      router.push("/");
    } else {
      setIsChecking(false);
      console.log("SpecifyId is not empty, staying on page");
    router.push("/clients/register");
    }
  }, [ SpecifyId,router]);
  return (
    <div>
      {children}
    </div>
  );
}