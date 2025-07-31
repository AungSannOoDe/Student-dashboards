"use client";
import Spinner from "@/components/Spinner";
import useAccountStore from "@/stores/useAccountStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function HomeLayout({children}){
    const router=useRouter();
    const{logout,token}=useAccountStore();
    const [isLoading,setIsLoading]=useState(true);
    console.log(token);
    useEffect(()=>{
 const currentToken =useAccountStore.getState().token;
 if(!currentToken){
    router.push("/")
 }
 setIsLoading(false)
    },[token])
    if (isLoading) {
        return (
          <div className=" h-screen flex items-center justify-center">
            <Spinner />
          </div>
        );
      }
    if(!useAccountStore.getState().token){
        return "Hello";
    }
    return<>{children}</>;
}