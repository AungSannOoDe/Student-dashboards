import React from 'react'
import ChangePasswordForm from './ChangePasswordForm'

const ProfileChangePasswordSectin = () => {
  return (
   <section className=" w-full pl-6">
    <h1 className="text-3xl font-bold mb-3">Change  Password</h1>
    <p className="mb-10 text-stone-500">
      Pick a new password for your account.{" "}
    </p>
    <ChangePasswordForm />
  </section>
  )
}

export default ProfileChangePasswordSectin