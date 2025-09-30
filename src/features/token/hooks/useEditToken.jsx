"use client";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";
import useSWR, { useSWRConfig } from "swr";
import { toast } from "sonner";
import { AdminTokenApiUrl, fetchToken,  updateToken } from "@/services/token";

const useEditToken = () => {
    const router = useRouter();
    const params = useParams();
    const id = params?.id;

    const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
    } = useForm();

    const { mutate } = useSWRConfig();

    const { data, isLoading, error } = useSWR(
      id ? `${AdminTokenApiUrl}/${id}` : null,
      fetchToken
    );

    const update = async (formData) => {
      try {
        const res = await updateToken(
          {
            token_name: formData.name,
          },
          id
        );
        const json = await res.json();

        if (!res.ok) {
          throw new Error(json.message);
        }

        mutate(`${tokenApiUrl}/${id}`);
        toast.success("Token updated successfully");

        if (formData.back_to_customer_list) {
          router.push("/dashboard/token");
        }
      } catch (err) {
        toast.error(err.message || "Failed to update customer");
        console.error(err);
      }
    };

    return {
      update,
      register,
      handleSubmit,
      errors,
      isSubmitting,
      isLoading,
      data,
      error,
      router,
    };
}

export default useEditToken