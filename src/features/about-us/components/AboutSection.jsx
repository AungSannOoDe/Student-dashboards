import React from 'react'

const AboutSection = () => {
  return (
    <section className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16'>
        <div className="leading-relaxed sm:leading-loose lg:leading-10">
            <p className='text-justify text-sm sm:text-base md:text-lg lg:text-xl text-stone-700'>
              ကျွန်တော်တို့ကျောင်းတွင်မောင်မယ်သစ်လွင်အသစ်များကိုကြိုဆိုရန် King Queen
               selectionများ မဲပေးရန်ကျောင်းတွင်မည်သို့သော activities များကိုလုပ်ဆောင်သည်ဆိုသော 
               အချက်များကိုအခြေခံ၍ website ကိုရေးထားခြင်းဖြစ်ပါသည်။ ၄င်း website ကို စတုထ္ထနှစ် senior တန်းမှကျောင်းသားကျောင်းသူများကစုပေါင်း၍ရေးသားဖော်ဆောင်ခဲ့ခြင်းဖြစ်ပါသည်။ 
              Website ရေးသားရန်အတွက် အခွင့်အလမ်းပေးပါသော ကွန်ပျူတာတက္ကသိုလ်(ဘားအံ) ပါမောက္ခချုပ်၊ ဒုတိယပါမောက္ခချုပ် နှင့် Software Team မှာ ဆရာ ဆရာမများ အားကျေးဇူးတင်ရှိပါသည်။
               ၊websiteဖြစ်မြောက်ရေးအတွက်လမ်းညွှန်ဦးဆောင်မှုပေးခဲ့သော  Faculty of Information Science ဌာန
              မှ ဒေါ်နန်းနုနုကြည်(စတုထ္ထနှစ်seniorသင်တန်းမှူ:)၊ website ရေးသားရန်အတွက်အကြံဉာဏ်အကူအညီပေးပါသောဒေါက်တာ‌ဖြူဖြူထွန်း၊ 
                 ၊websiteအတွက်လိုအပ်ချက်သောအချက်အလက်များကိုပေးသောကျောင်းသားရေးရာဌာနမှတာဝန်ရှိသူ
                 များနှင့် စီမံရေးရာဌာနမှတာဝန်ရှိသူများအားကျေးဇူးအထူးတင်ရှိပါသည်။
            </p>
        </div>

        {/* Additional responsive thank you section */}
        <div className="mt-8 sm:mt-12 lg:mt-16 p-4 sm:p-6 lg:p-8 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-800 mb-4 sm:mb-6 text-center">
                Special Thanks
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center">
                    <h4 className="font-medium text-blue-700 text-sm sm:text-base mb-2">University Leadership</h4>
                    <p className="text-blue-600 text-xs sm:text-sm">ပါမောက္ခချုပ် နှင့် ဒုတိယပါမောက္ခချုပ်များ</p>
                </div>
                <div className="text-center">
                    <h4 className="font-medium text-blue-700 text-sm sm:text-base mb-2">Faculty Guidance</h4>
                    <p className="text-blue-600 text-xs sm:text-sm">ဒေါ်နန်းနုနုကြည် နှင့် ဒေါက်တာဖြူဖြူထွန်း</p>
                </div>
                <div className="text-center">
                    <h4 className="font-medium text-blue-700 text-sm sm:text-base mb-2">Support Departments</h4>
                    <p className="text-blue-600 text-xs sm:text-sm">ကျောင်းသားရေးရာ နှင့် စီမံရေးရာဌာနများ</p>
                </div>
            </div>
        </div>

        {/* Development Team Section */}
        <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
            <p className="text-stone-600 text-sm sm:text-base md:text-lg font-medium">
                Developed by <span className="text-blue-600 font-semibold">Fourth Year Senior Students</span>
            </p>
            <p className="text-stone-500 text-xs sm:text-sm mt-2">
               University of Computer Studies (Hpa-an)
            </p>
        </div>
    </section>
  )
}

export default AboutSection