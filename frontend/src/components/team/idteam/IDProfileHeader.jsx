import { FaEdit, FaCalendarAlt, FaHistory } from "react-icons/fa";
import userImage from "../../../assets/images/image1.png";

const IDProfileHeader = () => (
  <section className="bg-white dark:bg-[#1a222c] rounded-xl border border-[#e5e7eb] dark:border-[#2d3748] p-6 shadow-sm">
    <div className="flex flex-col @[520px]:flex-row justify-between items-start @[520px]:items-center gap-6">

      <div className="flex gap-6 items-center">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-24 w-24 border-4 border-background-light dark:border-background-dark shadow-md"
          style={{
            backgroundImage:`url(${userImage})`
          }}
        />

        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h1 className="text-[#111418] dark:text-white text-2xl font-bold tracking-tight">
              Tracy Nyono
            </h1>
            <span className="px-2 py-0.5 rounded bg-primary/20 text-primary text-xs font-bold uppercase">
              Senior Admin
            </span>
          </div>

          <p className="text-[#617589] dark:text-[#a0aec0] text-base mt-1">
            Senior Project Administrator • Regional Lead
          </p>

          <div className="flex items-center gap-4 mt-3 text-sm text-[#617589] dark:text-[#a0aec0]">
            <span className="flex items-center gap-1">
              <FaCalendarAlt className="text-sm" /> Joined Jan 2026
            </span>
            <span className="flex items-center gap-1">
              <FaHistory className="text-sm" /> Last login: 2 hours ago
            </span>
          </div>
        </div>
      </div>

      <button className="flex items-center gap-2 px-4 py-2 bg-background-light dark:bg-background-dark/50 text-[#111418] dark:text-white rounded-lg font-bold text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
        <FaEdit />
        <span>Edit Profile</span>
      </button>
    </div>
  </section>
);

export default IDProfileHeader;
