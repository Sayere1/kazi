import { FiTrendingUp } from "react-icons/fi";

const CareerMilestone = () => {
  return (
    <div className="bg-primary p-6 rounded-xl shadow-lg relative overflow-hidden">
      <div className="relative z-10">
        <h4 className="text-white text-lg font-bold mb-2">Career Milestone!</h4>

        <p className="text-white/80 text-sm mb-4">
          You're only 3 courses away from reaching "Principal Designer" status.
        </p>

        <button className="bg-white text-primary px-4 py-2 rounded-lg text-sm font-bold shadow-sm
         hover:bg-gray-100 transition">
          View Roadmap
        </button>
      </div>

      <FiTrendingUp className="absolute -bottom-4 -right-4 text-white/10 text-[140px] select-none" />
    </div>
  );
};

export default CareerMilestone;
