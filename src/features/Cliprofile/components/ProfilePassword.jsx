import React from 'react'
import PasswordForm from './PasswordForm'

const ProfilePassword = () => {
  return (
  <section className="w-full pl-6">
    <h1 className="text-3xl font-bold mb-3">စကားဝှက်ပြောင်းရန်</h1>
    <p className="mb-10 text-stone-500">
      သင့်အကောင့်အတွက် စကားဝှက်အသစ် တစ်ခုရွေးချယ်ထည့်ပါ။
    </p>
    <PasswordForm />
  </section>

  )
}

export default ProfilePassword