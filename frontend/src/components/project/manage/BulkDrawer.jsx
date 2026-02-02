import { MdDriveFileMove, MdRule, MdArchive, MdClose } from "react-icons/md";
import { useProjectStore } from "../../../store/useProjectStore";

const BulkDrawer = () => {
  const selected = useProjectStore((s) => s.selected);
  const clearSelection = useProjectStore((s) => s.clearSelection);

  if (selected.size === 0) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-[#111418] text-white
     px-6 py-4 rounded-xl shadow-2xl flex items-center gap-8 border border-slate-700 z-100">
      <div className="flex items-center gap-3">
        <span className="size-6 bg-primary rounded-full flex items-center justify-center text-xs font-black">
          {selected.size}
        </span>
        <span className="text-sm font-bold">Projects Selected</span>
      </div>

      <div className="h-8 w-px bg-slate-700"></div>

      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 text-xs font-bold hover:text-primary">
          <MdDriveFileMove className="text-lg" />
          Transfer Dept
        </button>

        <button className="flex items-center gap-2 text-xs font-bold hover:text-primary">
          <MdRule className="text-lg" />
          Set Status
        </button>

        <button className="flex items-center gap-2 text-xs font-bold hover:text-primary">
          <MdArchive className="text-lg" />
          Archive
        </button>

        <button className="flex items-center justify-center rounded-lg h-9 px-4 bg-white
         text-[#111418] text-xs font-black hover:bg-slate-100 ml-4">
          Execute Actions
        </button>
      </div>

      <button
        onClick={clearSelection}
        className="absolute -top-2 -right-2 bg-slate-600 size-6 rounded-full flex items-center 
        justify-center border-2 border-[#111418] hover:bg-slate-500"
      >
        <MdClose className="text-sm" />
      </button>
    </div>
  );
};

export default BulkDrawer;
