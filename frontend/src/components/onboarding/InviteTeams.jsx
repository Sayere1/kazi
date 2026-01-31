import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOnboardingStore } from "../../store/useOnboardingStore";
import userImage from "../../assets/images/image1.png";
import Logo from "../../assets/images/kazilogo.png";

import {
  FaRocket,
  FaUserPlus,
  FaAt,
  FaTimes,
  FaMagic,
  FaAtom,
} from "react-icons/fa";


export default function InviteTeam() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const teammates = useOnboardingStore((s) => s.teammates);
  const addTeammate = useOnboardingStore((s) => s.addTeammate);
  const removeTeammate = useOnboardingStore((s) => s.removeTeammate);

  const handleAdd = () => {
    if (!email.trim()) return;
    addTeammate(email.trim());
    setEmail("");
  };

  const handleFinish = () => {
    navigate("/");
  };

  const handleSkip = () => {
    navigate("/");
  };

  return (
    <div className=" font-display text-[#111418]
     dark:text-white min-h-screen">
      <div className="relative flex min-h-screen flex-col overflow-x-hidden">

        {/* Top Navigation */}
        <header className="flex items-center justify-between px-10 py-3 z-10">
          <div className="flex items-center">
            <div className="size-6">
              <img src={Logo} className='w-5 h-5'/>
            </div>
            <h2 className="text-lg font-bold ">aziHub</h2>
          </div>

          <div className="flex flex-1 justify-end gap-8">
            <div
              className="bg-center bg-no-repeat bg-cover rounded-full size-10"
              style={{
                backgroundImage:`url(${userImage})`
              }}
            ></div>
          </div>
        </header>

        {/* Main Content */}
        <main className="relative flex flex-1 flex-col items-center justify-center p-4">

          {/* Background Celebration Icons */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden 
          flex justify-center items-center opacity-10 dark:opacity-5">
            <div className="w-full h-full max-w-4xl grid grid-cols-6 gap-20 rotate-12">

            </div>
          </div>

          {/* Content Card */}
          <div className="z-10 w-full max-w-160 bg-white dark:bg-[#111418] 
          rounded-xl shadow-xl border border-[#dbe0e6] dark:border-gray-800 p-8">

            {/* Progress */}

            {/* Heading */}
            <div className="flex flex-col gap-2 mb-8 items-center text-center sm:text-left">
              <h1 className="text-3xl font-black tracking-[-0.033em]">
                Invite your team
              </h1>
              <p className="text-[#617589] dark:text-gray-400">
                KaziHub work best as a team. Add a teammates and start collaborating.
              </p>
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-6">
              <label className="flex flex-col">
                <span className="text-base font-medium pb-2">Team Member Email</span>

                <div className="flex w-full items-stretch rounded-lg shadow-sm">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex w-full rounded-l-lg border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-[#1a242d]
                     h-14 p-3.75 text-base placeholder:text-[#617589] focus:border-primary focus:outline-none"
                    placeholder="Enter email address..."
                  />

                  <button
                    onClick={handleAdd}
                    className="flex items-center justify-center px-6 rounded-r-lg 
                    bg-primary text-white hover:bg-primary/90 transition-colors"
                  >
                    <FaUserPlus />
                  </button>
                </div>
              </label>

              {/* Invite List */}
              <div className="flex flex-col border border-[#dbe0e6] dark:border-gray-800 
              rounded-lg overflow-hidden divide-y divide-[#dbe0e6] dark:divide-gray-800">

                {teammates.map((email) => (
                  <div
                    key={email}
                    className="flex items-center justify-between px-4 py-3 bg-white dark:bg-[#111418]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 h-10 w-10 rounded-full flex items-center justify-center text-primary">
                        <FaAt />
                      </div>

                      <div>
                        <p className="font-medium">{email}</p>
                        <p className="text-[#617589] text-xs">Team Member</p>
                      </div>
                    </div>

                    <button
                      onClick={() => removeTeammate(email)}
                      className="text-[#617589] hover:text-red-500 transition-colors"
                    >
                      <FaTimes className="text-xl" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4 pt-4">
                <button
                  onClick={handleFinish}
                  className="flex items-center justify-center h-14 px-5 rounded-xl bg-primary text-white 
                  text-lg font-bold shadow-lg shadow-primary/20 hover:brightness-110 transition-all"
                >
                  <span>Get Started</span>
                  <FaRocket className="ml-2" />
                </button>

                <button
                  onClick={handleSkip}
                  className="h-10 px-4 rounded-xl text-[#617589] dark:text-gray-400 text-sm 
                  font-medium hover:text-[#111418] dark:hover:text-white transition-colors"
                >
                  Skip
                </button>
              </div>
            </div>
          </div>

          {/* Welcome Tag */}
          <div className="mt-8 flex items-center gap-2 text-[#617589] text-sm animate-pulse">
            <FaMagic className="text-primary" />
            <span>Welcome to KaziHub. the magic starts here.</span>
          </div>
        </main>

        <footer className="p-6 text-center text-[#617589] dark:text-gray-500 text-xs">
          © 2026 KaziHub Project Management System. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

