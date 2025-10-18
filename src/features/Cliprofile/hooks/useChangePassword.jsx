import { changePassword, ClientChangePassword } from '@/services/profile';
import useAccountStore from '@/stores/useAccountStore';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const useChangePassword = () => {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors },
        reset,
      } = useForm();

      const { logout } = useAccountStore();
      const router = useRouter();
      const handleChangePassword = async (data) => {
        try {
          const res = await ClientChangePassword(data);
          const json = await res.json();
          if (!res.ok) {
            throw new Error(json.message);
          }
          toast.success(json.message);
          logout();
          router.push("/");
        } catch (error) {
          toast.error(error.message);
        }
      };

      return {
        handleChangePassword,
        handleSubmit,
        register,
        isSubmitting,
        reset,
        errors,
      };
}

export default useChangePassword