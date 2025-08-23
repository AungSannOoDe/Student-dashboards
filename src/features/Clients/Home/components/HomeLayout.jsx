"use client";
import Spinner from "@/components/Spinner";
import useAccountStore from "@/stores/useAccountStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import HomePage from "../pages/HomePage";
import { checkProfile } from "@/services/voters";
import { toast } from "sonner";
import NotFound from "@/components/NotFound";
import IndexPage from "../pages/IndexPage";

export default function HomeLayout({ children }) {
  const router = useRouter();
  const { logout, token,Part} = useAccountStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      router.push("/");
      return;
    }
    const verifyToken = async () => {
      try {
        const res = await checkProfile(token);
        if (res.status === 401) {
          toast.error("Your session has expired, please login again");
          logout();
          router.push("/");
        }
      } catch (error) {
        console.error("Token verification failed:", error);
        logout();
        router.push("/notfound");
      } finally {
        setIsLoading(false);
      }
    };
    verifyToken();
    const interval = setInterval(verifyToken, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [token,Part]);
  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }
  if (!token) {
    return <IndexPage />;
  }
  if(Part!=2){
    return <NotFound/>;
  }
  return <>{children}</>;
}