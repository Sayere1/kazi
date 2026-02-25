const MemberItem = ({ name, role, img, status }) => {
  const statusColor =
    status === "online"
      ? "bg-green-500"
      : status === "away"
      ? "bg-gray-400"
      : "bg-gray-500";

  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <div
          className="size-8 rounded-full bg-cover"
          style={{ backgroundImage: `url("${img}")` }}
        />
        <div
          className={`absolute bottom-0 right-0 size-2.5 border-2 border-white dark:border-gray-900 rounded-full ${statusColor}`}
        />
      </div>

      <div>
        <p className="text-xs font-bold text-gray-800 dark:text-gray-200">
          {name}
        </p>
        <p className="text-[10px] text-gray-500">{role}</p>
      </div>
    </div>
  );
};

export default MemberItem;
