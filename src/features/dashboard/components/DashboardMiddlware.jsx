"use client";
import React from 'react'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { checkProfile } from "@/services/profile";
import useAccountStore from "@/stores/useAccountStore";
import BackToLogin from "./BackToLogin";
import Spinner from "@/components/Spinner";
import NotFound from '@/components/NotFound';
export default function DashboardMiddlware ({children}){

 const router = useRouter();
  const { logout, token,Part } = useAccountStore();
  const [isLoading, setIsLoading] = useState(true);

  const autoLogoutIfTokenExpire = async (currentToken) => {
    const res = await checkProfile(currentToken);
    if (res.status === 401) {
      toast.error("Your token has expired, please login again");
      logout();
    }
  };
  useEffect(() => {
    const currentToken = useAccountStore.getState().token;
    if (!currentToken) {
      router.push("/login");
    } else {
      autoLogoutIfTokenExpire(currentToken);
    }
    setIsLoading(false);
  }, [token,Part]);

  if (isLoading) {
    return (
      <div className=" h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (!useAccountStore.getState().token) {
    return <BackToLogin />;
  }
  if(Part!=1){
    return <NotFound/>;
  }
     
  return <>{children}</>;
}

