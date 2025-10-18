import React from 'react'
import ReviewForm from './ReviewForm'
import { Mail, MapPin, Navigation, Phone } from 'lucide-react'

const ReviewSection = () => {
  return (
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-20">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    
    {/* Review Form */}
    <ReviewForm />

    {/* Contact Info */}
    <div className="mt-5 md:mt-0">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">ဆက်သွယ်ရန်လိပ်စာများ</h2>
      <p className="text-sm md:text-base leading-7 mt-4">
        အကယ်၍ အကူအညီလိုအပ်ပါက အောက်ပါ လိပ်စာများအတိုင်း ဆက်သွယ်နိုင်ပါသည်။
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
        <div className="flex items-center bg-white/50 gap-3 px-4 py-3 border border-stone-300 rounded-md shadow-sm">
          <div className="bg-amber-300 w-12 h-12 rounded-full flex items-center justify-center">
            <Phone className="text-amber-600" />
          </div>
          <div>
            <p className="font-medium">Phone</p>
            <p className="text-xs">09-677513378</p>
          </div>
        </div>

        <div className="flex items-center bg-white/50 gap-3 px-4 py-3 border border-stone-300 rounded-md shadow-sm">
          <div className="bg-green-300 w-12 h-12 rounded-full flex items-center justify-center">
            <Mail className="text-green-700" />
          </div>
          <div>
            <p className="font-medium">Email</p>
            <p className="text-xs">aungsannoo962@gmail.com</p>
          </div>
        </div>

        <div className="flex items-center bg-white/50 gap-3 px-4 py-3 border border-stone-300 rounded-md shadow-sm">
          <div className="bg-blue-400 w-12 h-12 rounded-full flex items-center justify-center">
            <MapPin className="text-white" />
          </div>
          <div>
            <p className="font-medium">Admin Team</p>
            <p className="text-xs">အခန်း(၃၁၂) ကွန်ပျူတာတက္ကသိုလ် (ဘားအံ)</p>
          </div>
        </div>

        <div className="flex items-center bg-white/50 gap-3 px-4 py-3 border border-stone-300 rounded-md shadow-sm">
          <div className="bg-purple-400 w-12 h-12 rounded-full flex items-center justify-center">
            <Navigation className="text-white" />
          </div>
          <div>
            <p className="font-medium">ကျောင်းသားရေးရာ</p>
            <p className="text-xs">အခန်း(၁၀၂) ကွန်ပျူတာတက္ကသိုလ် (ဘားအံ)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default ReviewSection