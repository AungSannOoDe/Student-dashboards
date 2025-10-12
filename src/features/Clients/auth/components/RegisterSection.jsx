"use client";

import useRegister from "../hooks/useRegister";

const RegisterSection = () => {
  const { isSubmitting, errors, onSubmit, register, reset, password, setError, handleSubmit } = useRegister();
  
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-stone-900 dark:to-stone-800">
      {/* Background Shapes - Responsive */}
      <div className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-blue-400/30 dark:bg-blue-600/20 rounded-r-full rounded-b-full absolute -top-20 -right-20 md:-top-30 md:-right-30 lg:-top-40 lg:-right-40"></div>
      
      <div className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] bg-blue-400/40 dark:bg-blue-500/30 rounded-full absolute top-[60px] sm:top-[100px] left-[20px] sm:left-[100px]"></div>

      {/* Main Content */}
      <div className="flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 py-8">
        <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl z-40">
          <div className="bg-white/90 dark:bg-stone-900/90 backdrop-blur-sm px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 rounded-2xl shadow-2xl border border-white/20">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 text-stone-800 dark:text-white">
              Student Register
            </h1>
            
            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit(onSubmit)}>
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm sm:text-base font-semibold mb-2 text-stone-700 dark:text-stone-300">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name"
                  {...register("name", {
                    required: "User name is required",
                    minLength: {
                      value: 3,
                      message: "Name must be at least 3 characters",
                    }
                  })} 
                  placeholder="Enter your name" 
                  className="w-full p-3 sm:p-4 border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-800 text-stone-900 dark:text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
                {errors.name && (
                  <span className='text-red-500 text-xs sm:text-sm mt-1 block'>
                    {errors.name.message}
                  </span>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm sm:text-base font-semibold mb-2 text-stone-700 dark:text-stone-300">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@gmail\.com$/i,
                      message: "Must be a Gmail address",
                    }
                  })} 
                  placeholder="Enter your email" 
                  className="w-full p-3 sm:p-4 border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-800 text-stone-900 dark:text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
                {errors.email && (
                  <span className='text-red-500 text-xs sm:text-sm mt-1 block'>
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm sm:text-base font-semibold mb-2 text-stone-700 dark:text-stone-300">
                  Password
                </label>
                <input 
                  type="password" 
                  id="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/,
                      message: "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character",
                    }
                  })} 
                  placeholder="Enter your password" 
                  className="w-full p-3 sm:p-4 border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-800 text-stone-900 dark:text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
                {errors.password && (
                  <span className='text-red-500 text-xs sm:text-sm mt-1 block'>
                    {errors.password.message}
                  </span>
                )}
              </div>

              {/* Confirm Password Field */}
              <div>
                <label htmlFor="password_confirmation" className="block text-sm sm:text-base font-semibold mb-2 text-stone-700 dark:text-stone-300">
                  Confirmation Password
                </label>
                <input 
                  type="password" 
                  id="password_confirmation"
                  {...register("password_confirmation", {
                    required: "Confirmation password is required",
                    validate: (value) => value === password || "Passwords do not match"
                  })} 
                  placeholder="Confirm your password" 
                  className="w-full p-3 sm:p-4 border border-stone-300 dark:border-stone-600 rounded-lg bg-white dark:bg-stone-800 text-stone-900 dark:text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
                {errors.password_confirmation && (
                  <span className='text-red-500 text-xs sm:text-sm mt-1 block'>
                    {errors.password_confirmation.message}
                  </span>
                )}
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start pt-2">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 sm:w-5 sm:h-5 border border-stone-300 rounded bg-stone-50 focus:ring-3 focus:ring-blue-300 dark:bg-stone-700 dark:border-stone-600 dark:focus:ring-blue-600 dark:ring-offset-stone-800"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-stone-600 dark:text-stone-400 text-xs sm:text-sm"
                  >
                    I accept the{" "}
                    <a
                      className="font-medium text-blue-600 hover:underline dark:text-blue-400 transition-colors duration-200"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-3 sm:py-4 px-4 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed mt-4"
              >
                {isSubmitting ? "Registering..." : "Register"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Background Shape - Responsive */}
      <div className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-blue-500/30 dark:bg-blue-600/20 rounded-b-full rounded-t-full rounded-l-full absolute -bottom-20 -left-20 md:-bottom-30 md:-left-30 lg:-bottom-40 lg:-left-40"></div>
    </section>
  );
};

export default RegisterSection;