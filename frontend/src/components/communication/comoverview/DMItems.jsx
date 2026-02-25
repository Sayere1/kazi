const DMItems = ({ name, img, status }) => {
  const statusColor =
    status === "online"
      ? "bg-green-500"
      : status === "away"
      ? "bg-gray-400"
      : "bg-gray-500";

  return (
    <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#f0f2f4] dark:hover:bg-gray-800" href="#">
      <div className="relative">
        <div
          className="size-6 rounded-full bg-cover"
          style={{ backgroundImage: `url("${img}")` }}
        />
        <div className={`absolute bottom-0 right-0 size-2 border border-white rounded-full ${statusColor}`} />
      </div>
      <span className="text-sm font-medium text-[#111418] dark:text-gray-300">
        {name}
      </span>
    </a>
  );
};

export default DMItems;