import AddTaskButton from "./AddTaskButton";
import BoardFilters from "./BoardFilters";

const BoardToolbar = () => {
  return (
    <div className="w-full flex justify-center mt-4">
      <div className="
        px-6 py-3 
        flex flex-wrap items-center justify-between gap-4
        bg-white dark:bg-[#1a242f]
        border border-gray-200 dark:border-gray-800
        rounded-full shadow-md
        max-w-4xl w-full
      ">
        <BoardFilters />
        <AddTaskButton />
      </div>
    </div>
  );
};

export default BoardToolbar;


{/* import AddTaskButton from "./AddTaskButton";
import ProjectFilters from "./ProjectFilters";

const Toolbar = () => {
  return (
    <div className="px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a242f]">
      <ProjectFilters />
      <AddTaskButton />
    </div>
  );
};

export default Toolbar;

*/}
