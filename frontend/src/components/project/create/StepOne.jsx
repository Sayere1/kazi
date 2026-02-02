import {
  MdExpandMore,
  MdFolder,
  MdShowChart,
  MdCode,
  MdInventory2,
} from "react-icons/md";

import { useProjectStore } from "../../../store/useProjectStore";

const StepOne = () => {
  const store = useProjectStore();
  const { createForm } = store;

  return (
    <div >

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">

        {/* Main Content */}
        <div className="p-8">
          <div className="max-w-140 mx-auto">

            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-[#111418] dark:text-white text-3xl font-bold mb-2">
                General Information
              </h1>
              <p className="text-[#617589] dark:text-gray-400 text-base">
                Start by giving your project a name and assigning it to a client.
              </p>
            </div>

            {/* Form */}
            <div className="space-y-6">

              {/* Project Name */}
              <div className="flex flex-col gap-2">
                <label className="text-[#111418] dark:text-white text-sm font-semibold">
                  Project Name
                </label>
                <input
                  value={createForm.name}
                  onChange={(e) => store.setCreateField("name", e.target.value)}
                  placeholder="e.g., Q4 Staff Review"
                  className="w-full rounded-lg border border-[#dbe0e6] dark:border-white/10 bg-white
                   dark:bg-white/5 h-12 px-4 text-[#111418] dark:text-white focus:ring-2 focus:ring-primary
                    focus:border-primary placeholder:text-[#617589]"
                />
              </div>

              {/* Description */}
              <div className="flex flex-col gap-2">
                <label className="text-[#111418] dark:text-white text-sm font-semibold">
                  Description
                </label>
                <textarea
                  value={createForm.description}
                  onChange={(e) => store.setCreateField("description", e.target.value)}
                  placeholder="Briefly describe the project scope and deliverables..."
                  className="w-full rounded-lg border border-[#dbe0e6] dark:border-white/10 bg-white
                   dark:bg-white/5 min-h-25 p-4 text-[#111418] dark:text-white focus:ring-2
                    focus:ring-primary focus:border-primary placeholder:text-[#617589]"
                />
              </div>

              {/* Client */}
              <div className="flex flex-col gap-2">
                <label className="text-[#111418] dark:text-white text-sm font-semibold">
                  Client
                </label>

                <div className="relative">
                  <select
                    value={createForm.client || ""}
                    onChange={(e) => store.setCreateField("client", e.target.value)}
                    className="w-full appearance-none rounded-lg border border-[#dbe0e6] dark:border-white/10
                     bg-white dark:bg-white/5 h-12 px-4 text-[#111418] dark:text-white focus:ring-2
                      focus:ring-primary focus:border-primary"
                  >
                    <option value="" disabled>Select a client</option>
                    <option>Acme Corporation</option>
                    <option>Global Industries</option>
                    <option>TechStart Solutions</option>
                  </select>

                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#617589]">
                    <MdExpandMore />
                  </div>
                </div>
              </div>

              {/* Brand Color + Icon */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#f0f2f4]
               dark:border-white/5">

                {/* Brand Color */}
                <div className="flex flex-col gap-3">
                  <label className="text-[#111418] dark:text-white text-sm font-semibold">
                    Brand Color
                  </label>

                  <div className="flex gap-2">
                    {["#137fec", "#f43f5e", "#10b981", "#f59e0b", "#8b5cf6"].map((color) => (
                      <button
                        key={color}
                        onClick={() => store.setCreateField("color", color)}
                        className={`size-8 rounded-full border-4 border-white shadow-sm hover:scale-110 
                          transition-transform`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                {/* Project Icon */}
                <div className="flex flex-col gap-3">
                  <label className="text-[#111418] dark:text-white text-sm font-semibold">
                    Project Icon
                  </label>

                  <div className="flex gap-2">
                    {[
                      { icon: <MdFolder />, value: "folder" },
                      { icon: <MdShowChart />, value: "chart" },
                      { icon: <MdCode />, value: "code" },
                      { icon: <MdInventory2 />, value: "inventory" },
                    ].map((item) => (
                      <button
                        key={item.value}
                        onClick={() => store.setCreateField("icon", item.value)}
                        className="size-10 rounded-lg bg-white dark:bg-white/10 border border-[#dbe0e6] dark:border-white/20 flex items-center justify-center text-[#617589] hover:text-primary transition-colors"
                      >
                        {item.icon}
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="p-8 border-t border-[#f0f2f4] dark:border-white/5 flex justify-end gap-3 
      bg-[#fcfcfd] dark:bg-white/5">
        <button className="px-6 py-2.5 rounded-lg text-[#111418] dark:text-white font-bold text-sm 
        hover:bg-[#f0f2f4] dark:hover:bg-white/5 transition-colors">
          Save Draft
        </button>
      </footer>
    </div>
  );
};

export default StepOne;
