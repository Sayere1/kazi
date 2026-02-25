import { useState } from "react";
import { FaRobot } from "react-icons/fa";

const KazitoAi = ({ collapsed }) => {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <div
      className="absolute bottom-6 right-4 z-40"
      style={{
        right: collapsed ? "0.75rem" : "1rem",
      }}
    >
      {/* Avatar + Hover Message */}
      <div
        className="relative flex items-center gap-3 cursor-pointer"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setOpen(true)}
      >
        {/* Hover Message */}
        {hover && !open && (
          <div className="absolute right-14 bg-white dark:bg-slate-800 text-slate-700 dark:text-white px-3 py-2 rounded-lg shadow-md text-sm font-medium whitespace-nowrap border border-slate-200 dark:border-slate-700">
            Hi, I am Kazito. Ask me anything
          </div>
        )}

        {/* AI Avatar */}
        <div className="bg-center bg-cover rounded-full size-12 border-2 border-primary flex items-center justify-center bg-white dark:bg-slate-900 shadow-md">
          <FaRobot size={30} className="text-primary" />
        </div>
      </div>

      {/* Chat Box */}
      {open && (
        <div className="mt-3 w-72 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl p-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-sm font-bold text-navy dark:text-white">
              Kazito AI
            </h2>
            <button
              className="text-slate-500 hover:text-red-500"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>

          {/* Chat Area */}
          <div className="h-40 overflow-y-auto text-sm text-slate-700 dark:text-slate-300 mb-3">
            <p className="text-slate-500 dark:text-slate-400">
              How can I help you today?
            </p>
          </div>

          {/* Input */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-white"
            />
            <button className="px-3 py-2 bg-primary text-white rounded-lg text-sm">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default KazitoAi;
