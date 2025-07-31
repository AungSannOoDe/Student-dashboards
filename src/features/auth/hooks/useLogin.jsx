"use client";
import { useRouter } from "next/navigation";
import { login } from "../../../services/auth";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import useAccountStore from "@/stores/useAccountStore";
const useLogin = () => {
  const route = useRouter();
  const { setToken, setAccount } = useAccountStore();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting,errors },
  } = useForm();
  const handleLogin = async (data) => {
    try {
      const res = await login(data);
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.message || "Login failed");
      }
      setToken(json?.token);
      setAccount(json?.user);
      toast.success("Login Successfully");
      route.push("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      toast.error(error.message);
    }
  };

  return {
    handleLogin,
    handleSubmit,
    register,
    errors,
    isSubmitting,
  };
};

export default useLogin;