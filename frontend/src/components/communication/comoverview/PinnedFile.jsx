const PinnedFile = ({ icon, name, sharedBy, time }) => {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="size-9 rounded bg-primary/10 text-primary flex items-center justify-center shrink-0">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-xs font-bold text-gray-800 dark:text-gray-200 truncate">
          {name}
        </p>
        <p className="text-[10px] text-gray-500">
          Shared by {sharedBy} • {time}
        </p>
      </div>
    </div>
  );
};

export default PinnedFile;
