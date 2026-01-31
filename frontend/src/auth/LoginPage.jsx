import React from 'react'
import { MdMail, MdLock, MdVisibilityOff, MdChat, MdSchedule } from "react-icons/md";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import GoogleApp from "../assets/images/google_app.png";
import Logo from "../assets/images/kazilogo.png";


const LoginPage = () => {

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen 
    flex items-center justify-center p-4 md:p-8 transition-colors duration-300">
      <div className="w-full max-w-6xl bg-white dark:bg-slate-900 rounded-3xl 
      shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-175">

        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
          <div className="flex items-center mb-12">
            <div className="w-8 h-8 flex items-center justify-center">
              <div className="w-2 h-2 bg-white"></div>
              <img src={Logo} className='w-5 h-5'/>
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-white">aziHub</span>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Log in to your Account</h1>
            <p className="text-slate-500 dark:text-slate-400">Welcome back!</p>
          </div>

          {/* SOCIAL BUTTONS */}
          <div className="flex gap-4 mb-8">
            <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 border
             border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50
              dark:hover:bg-slate-800 transition-all font-medium text-slate-700 dark:text-slate-200">
              <FaGoogle size={18} color="#4285F4" />

              Google
            </button>

            <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 border
             border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 
             transition-all font-medium text-slate-700 dark:text-slate-200">
              <FaFacebook size={18} color="#1877F2" />
              Facebook
            </button>
          </div>

          {/* DIVIDER */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white dark:bg-slate-900 text-slate-400 uppercase 
              tracking-wider text-xs font-medium">
                or continue with email
              </span>
            </div>
          </div>

          {/* FORM */}
          <form className="space-y-5">
            <div className="relative">
              <MdMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800/50 border
                 border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary 
                 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white"
              />
            </div>

            <div className="relative">
              <MdLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-12 pr-12 py-3.5 bg-slate-50 dark:bg-slate-800/50 border
                 border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary 
                 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white"
              />
              <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400
               hover:text-slate-600 dark:hover:text-slate-200">
                <MdVisibilityOff />
              </button>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-5 h-5 rounded border-slate-300
                 dark:border-slate-700 text-primary focus:ring-primary transition-all" />
                <span className="text-slate-600 dark:text-slate-400 group-hover:text-slate-900
                 dark:group-hover:text-white transition-colors">
                  Remember me
                </span>
              </label>
              <a href="#" className="text-primary font-semibold hover:underline">Forgot Password?</a>
            </div>

            <button type="submit" className="w-full bg-primary hover:bg-blue-700 text-white 
            font-bold py-4 rounded-xl shadow-lg shadow-blue-500/20 transform active:scale-[0.98] transition-all">
              Log in
            </button>
          </form>

          <p className="mt-8 text-center text-slate-500 dark:text-slate-400 text-sm">
            Don't have an account? <a href="#" className="text-primary font-bold hover:underline">
              Create an account</a>
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex w-1/2 bg-primary relative items-center justify-center p-12 overflow-hidden">
          <div className="absolute w-150 h-150 illustration-circle rounded-full"></div>
          <div className="absolute w-100 h-100 border border-white/10 rounded-full"></div>

          <div className="relative z-10 w-full max-w-md text-center">
            <div className="mb-12 relative flex items-center justify-center">
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl p-4 w-72 transform translate-x-12">
                <div className="flex gap-1 mb-4">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                </div>

                <div className="space-y-3">
                  <div className="h-3 bg-slate-100 dark:bg-slate-700 rounded w-2/3"></div>

                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                      <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded flex-1"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating icons */}
              <div className="absolute left-0 space-y-4">
                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center 
                transform hover:scale-110 transition-transform cursor-pointer">
                  <img
                    alt="Google App"
                    className="w-6 h-6"
                    src={GoogleApp}
                  />
                </div>

                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center 
                translate-x-6 transform hover:scale-110 transition-transform cursor-pointer">
                  <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
                    <MdChat className="text-primary text-sm" />
                  </div>
                </div>

                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center
                 transform hover:scale-110 transition-transform cursor-pointer">
                  <div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center">
                    <MdSchedule className="text-white text-sm" />
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Connected across projects.</h2>
            <p className="text-white/80 font-medium">built for effective management control.</p>

            <div className="flex justify-center gap-2 mt-12">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <div className="w-2 h-2 rounded-full bg-white/40"></div>
              <div className="w-2 h-2 rounded-full bg-white/40"></div>
            </div>
          </div>

          {/* Demo Credentials */}
          <div className="absolute bottom-6 right-6 z-20 glass-card p-4 rounded-lg shadow-lg max-w-xs text-xs">
            <div className="font-bold text-white mb-2 uppercase tracking-wide opacity-80 text-[10px]">
              Demo Credentials</div>

            <div className="space-y-3">
              <div>
                <div className="font-semibold text-white">Super Admin</div>
                <div className="text-white/80 flex justify-between gap-4">
                  <span>superadmin@dotwork.com</span>
                  <span className="font-mono bg-white/20 px-1 rounded text-[10px] leading-relaxed">admin123</span>
                </div>
              </div>

              <div className="border-t border-white/20"></div>

              <div>
                <div className="font-semibold text-white">Admin</div>
                <div className="text-white/80 flex justify-between gap-4">
                  <span>admin@dotwork.com</span>
                  <span className="font-mono bg-white/20 px-1 rounded text-[10px] leading-relaxed">pass123</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage
