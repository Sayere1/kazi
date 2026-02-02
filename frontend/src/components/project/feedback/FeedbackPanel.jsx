import {
  MdAttachment,
  MdSend,
  MdOpenInNew,
  MdPlayCircle,
} from "react-icons/md";

import userImage from "../../../assets/images/image1.png";
import userImage3 from "../../../assets/images/image3.png";
import ecoGuide from "../../../assets/images/image10.png";

import FeedbackMessage from "./FeedbackMessage";


const FeedbackPanel = () => (
  <section className="w-full lg:w-100 shrink-0 bg-white dark:bg-white/5 rounded-2xl shadow-lg border
   border-[#f0f2f4] dark:border-white/10 flex flex-col overflow-hidden max-h-200">

    {/* Header */}
    <div className="p-6 border-b border-[#f0f2f4] dark:border-white/10 bg-primary/5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-[#617589] dark:text-gray-400">
          Now Reviewing
        </h2>

        <button className="text-primary text-xs font-bold flex items-center gap-1">
          Full Screen <MdOpenInNew className="text-xs" />
        </button>
      </div>

      {/* Preview */}
      <div className="bg-gray-200 dark:bg-white/10 rounded-lg aspect-video mb-4 overflow-hidden relative group">
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 
        group-hover:opacity-100 transition-opacity">
          <MdPlayCircle className="text-white text-4xl" />
        </div>

        <img
          className="w-full h-full object-cover"
          src={ecoGuide}
          alt="Preview"
        />
      </div>

      <div className="flex justify-between items-end">
        <div>
          <h3 className="text-[#111418] dark:text-white font-bold text-lg">
            Eco Guidelines v2
          </h3>
          <p className="text-[#617589] dark:text-gray-400 text-xs">
            Ready for review since Oct 14
          </p>
        </div>

        <button className="bg-primary text-white text-sm font-bold px-4 py-2 rounded-lg 
        shadow-md hover:bg-primary/90">
          Approve
        </button>
      </div>
    </div>

    {/* Feedback Thread */}
    <div className="flex-1 overflow-y-auto p-6 space-y-6">

      {/* Message 1 */}
      <FeedbackMessage
        avatar={userImage3}
        name="Ali Omar (Sustainable Team)"
        text="Hi team, we've updated the primary blue based on our last sync. Let us know if this 
        aligns better with the vision."
        time="10:45 AM"
      />

      {/* Message 2 */}
      <FeedbackMessage
        avatar={userImage}
        name="You (Admin)"
        text="Thanks, Alex. The blue looks much more professional now. Checking with the CMO for final
         word on typography."
        time="11:20 AM"
        isClient
      />
    </div>

    {/* Input Area */}
    <div className="p-6 border-t border-[#f0f2f4] dark:border-white/10 bg-white dark:bg-background-dark">
      <div className="relative">
        <textarea
          className="w-full rounded-xl border border-[#dbe0e6] dark:border-white/10 bg-white
           dark:bg-white/5 p-3 text-sm focus:ring-2 focus:ring-primary min-h-25 resize-none pr-12"
          placeholder="Give feedback or ask a question..."
        ></textarea>

        <button className="absolute bottom-3 right-3 text-primary hover:text-primary/80">
          <MdSend />
        </button>
      </div>

      <div className="flex items-center justify-between mt-3">
        <button className="flex items-center gap-1 text-[#617589] dark:text-gray-400 text-xs">
          <MdAttachment className="text-sm" />
          Attach file
        </button>

        <span className="text-[10px] text-[#617589]">
          Enter to send, Shift + Enter for new line
        </span>
      </div>
    </div>
  </section>
);
export default FeedbackPanel