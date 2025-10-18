import React from 'react'
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {  ClientChangeName, profileApiUrl } from "../../../services/profile";
import { useSWRConfig } from "swr";
import { useRouter } from "next/navigation";
import useAccountStore from "@/stores/useAccountStore";
const useChangeName = () => {
     const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors },
        reset,
      } = useForm();

      const { mutate } = useSWRConfig();
      const router = useRouter();
      const { setToken, setAccount } = useAccountStore();

      const handleName = async (data) => {
        try {
          const res = await ClientChangeName(data);
          const json = await res.json();
          if (!res.ok) {
            throw new Error(json.message || "Name Change failed");
          }
          toast.success("Name Changed Successfully");
          setAccount(json?.user);
          router.push("/clients/profile/changeName");
          reset();
        } catch (error) {
          toast.error(error.message);

          console.error("Error:", error);
        }
      };
      const handleCancel = () => {
        router.push("/clients/profile");
      };
      return {
        handleName,
        handleSubmit,
        register,
        isSubmitting,
        reset,
        errors,
        handleCancel,
      };
}

export default useChangeName