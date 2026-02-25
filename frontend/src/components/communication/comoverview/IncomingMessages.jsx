import { MdReply } from "react-icons/md";

const IncomingMessages = ({
  id,
  name,
  time,
  text,
  img,
  onReply,
  hasThread = false,
  threadCount = 0,
}) => {
  return (
    <div className="flex gap-3 group">
      {/* Avatar */}
      <div
        className="size-10 rounded-full bg-cover shrink-0"
        style={{ backgroundImage: `url("${img}")` }}
      />

      {/* Message Content */}
      <div className="flex flex-col gap-1 max-w-[85%]">
        <div className="flex items-center gap-3">
          <p className="text-sm font-bold">{name}</p>
          <p className="text-[11px] text-[#617589]">{time}</p>
        </div>

        <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg rounded-tl-none">
          <p className="text-sm leading-relaxed dark:text-gray-300">{text}</p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity mt-1">
          <button
            onClick={() => onReply?.(id)}
            className="flex items-center gap-1 text-primary text-xs font-bold hover:underline"
          >
            <MdReply size={14}/>
            Reply
          </button>

          {hasThread && (
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {threadCount} replies
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default IncomingMessages;


