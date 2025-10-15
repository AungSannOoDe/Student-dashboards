import React from 'react'

const PrivacySection = () => {
  return (
    <section className='max-w-7xl mx-auto mt-20 sm:mt-8 lg:mt-10 px-4 sm:px-6 lg:px-8 '>
      {/* Policy Section */}
      <div className="mb-8 sm:mb-12 lg:mb-16">
        <p className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 sm:mb-8 text-center sm:text-left'>
          Policy
        </p>
        <ul className="list-disc ml-4 sm:ml-6 lg:ml-12 space-y-3 sm:space-y-4 text-gray-700">
          <li className="text-sm sm:text-base lg:text-lg leading-6 sm:leading-7">
            အသုံးပြုသူသည် website သို့ ဝင်ရောက်သည်နှင့် တပြိုင်နက် ပင်မစာမျက်နှာကို တွေ့မြင်ရပါမည်။
          </li>
          <li className="text-sm sm:text-base lg:text-lg leading-6 sm:leading-7">
            အသုံးပြုသူသည် အချက်အလက်စာမျက်နှာကိုကြည့်ရှုနိုင်ပါသည်။
          </li>
          <li className="text-sm sm:text-base lg:text-lg leading-6 sm:leading-7">
            အသုံးပြုသူသည် ကျောင်းတွင်းလှုပ်ရှားမှုမှတ်တမ်:မျာ:ကိုကြည့်ရှုနိုင်ပါသည်။
          </li>
          <li className="text-sm sm:text-base lg:text-lg leading-6 sm:leading-7">
            အသုံးပြုသူသည် administrator ဖြစ်နေပါက Admin page သို့ ၀င်ရောက်ရမည်ဖြစ်ပါသည်။
          </li>
          <li className="text-sm sm:text-base lg:text-lg leading-6 sm:leading-7">
            အသုံးပြုသူသည် အကောင့်ဖွင့်ရန်လိုအပ်ပါက ပထမဆုံး admin team မှပေးထားသော token ကို ရိုက်နှိပ်ပီးမှသာအကောင့်သစ်ကိုဖွင့်နိုင်ပါသည်။
          </li>
          <li className="text-sm sm:text-base lg:text-lg leading-6 sm:leading-7">
            အသုံးပြုသူသည် အကောင့်ရှိပီးသားဖြစ်ပါက အကောင့်၀င်ရန်စာမျက်နှာသို့သွားရောက်၍အကောင့်ကို၀င်ရောက်ပြီးမဲပေးနိုင်ပါသည်။
          </li>
          <li className="text-sm sm:text-base lg:text-lg leading-6 sm:leading-7">
            အကောင့်သစ်ကိုဖွင့်ပြီးပါက ဆန္ဒမဲပေးနိုင်ပါသည်။
          </li>
          <li className="text-sm sm:text-base lg:text-lg leading-6 sm:leading-7">
            အသုံးပြုသူသည် BookMarked ဟုခေါ်သောခလုတ်ကိုနှိပ်၍ယာယီအနေဖြင့်မဲပေးနိုင်ပါသည်။
          </li>
          <li className="text-sm sm:text-base lg:text-lg leading-6 sm:leading-7">
            အကယ်၍ယာယီခလုတ်တွင်ပထမတစ်ခါနှိပ်ပြီးပါက ကျောင်းသားတစ်ဦးကိုသာ ယာယီမဲပေးနိုင်ပါသည်။
          </li>
          <li className="text-sm sm:text-base lg:text-lg leading-6 sm:leading-7">
            ထိုနောက်မဲပေးမည်ဆိုသောခလုတ်ကိုနှိပ်၍မဲပေးနိုင်ပါသည်။
          </li>
          <li className="text-sm sm:text-base lg:text-lg leading-6 sm:leading-7">
            ကျောင်းသားတစ်ဦးချင်း၏ကိုယ်ရေးအချက်အလက်ကို၀င်ရောက်ကြည့်ရှု၍လည်း‌မဲပေးနိုင်ပါသည်။
          </li>
          <li className="text-sm sm:text-base lg:text-lg leading-6 sm:leading-7">
            Logout ကိုနှိပ်မည်ဆိုပါက ပင်မစာမျက်နှာသို့ရောက်ရှိသွားမည်ဖြစ်ပါသည်။
          </li>
        </ul>
      </div>

      {/* Privacy Section */}
      <div className="mt-8 sm:mt-10 lg:mt-12">
        <p className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 sm:mb-8 text-center sm:text-left'>
          Privacy
        </p>
        <ul className="list-disc ml-4 sm:ml-6 lg:ml-12 space-y-3 sm:space-y-4 text-gray-700">
          <li className="text-sm sm:text-base lg:text-lg leading-6 sm:leading-7">
            အသုံးပြုသူ၏ကိုယ်ရေးကိုယ်တာအချက်အလက်ကို admin အသင်းမှ ၀င်ရောက်ပြင်ဆင်ခြင်းမရှိပါ။
          </li>
          <li className="text-sm sm:text-base lg:text-lg leading-6 sm:leading-7">
            ဆန္ဒမဲပေးရာတွင် မည်သူ့ကိုမဲပေးခဲ့သည်ကိုအသုံးပြုသူသာသိ၍ ကျွန်တော်တို့ admin အသင်းမှမည်သူကိုမဲပေးခဲ့သည်ကို သိမည်မဟုတ်သောကြောင့်လွတ်လပ်စွာမဲပေးနိုင်ပါသည်။
          </li>
          <li className="text-sm sm:text-base lg:text-lg leading-6 sm:leading-7">
            ကျွန်တော်တို့ website သည်ကိုယ်ပိုင် User Interface design ကို ကိုယ်ပိုင် creation လုပ်ခဲ့သည်ဖြစ်၍ ကျွန်တော်တို့၏ website တွင်ပါ၀င်သောအချက်အလက်များကိုယူသုံးခြင်း မပြုရပါ။
          </li>
        </ul>
      </div>
    </section>
  )
}

export default PrivacySection