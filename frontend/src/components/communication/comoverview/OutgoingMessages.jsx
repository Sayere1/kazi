import { MdReply } from "react-icons/md";

const OutgoingMessages = ({
  id,
  time,
  text,
  onReply,
  hasThread = true,
  threadCount = 0,
}) => {
  return (
    <div className="flex items-end gap-3 justify-end group">
      {/* Message Content */}
      <div className="flex flex-col gap-1 items-end max-w-[85%]">
        <div className="flex items-center gap-2">
          <p className="text-[11px] text-[#617589]">{time}</p>
          <p className="text-sm font-bold">You</p>
        </div>

        <div className="p-3 bg-primary text-white rounded-lg rounded-tr-none">
          <p className="text-sm leading-relaxed">{text}</p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity mt-1">
          <button
            onClick={() => onReply?.(id)}
            className="flex items-center gap-1 text-black text-xs font-bold hover:underline"
          >
            <MdReply size={14} />
            Reply
          </button>

          {hasThread && (
            <span className="text-xs text-white/70">
              {threadCount} replies
            </span>
          )}
        </div>
      </div>

      {/* Avatar */}
      <div
         className="size-10 rounded-full bg-cover border border-gray-200 dark:border-gray-700"
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD54f61jAdZkaR6wA_VM5pKclGi51jYU1XAxZAeNwxrWfx89IvBzWUGqkgVECFeeGo17TZzQkoYr0jvnYLw-b9rC4rD6H65OCcK_BFv61kj9N1mcZZND0TFE1sOnuiy5JCOLsfTYVZlCAl0utqnqVm0mzxL2aN2MlHVq0-7gxoLJyAKQeWIes-Yed5HIgkLCMxbZ84ee3Uf6XXJZJynIWut0Ow-HEtomSX4fIS6pvpNLbMxdFhks5ZIqySoFzGc1Mwg9daZVveqH8k")',
        }}
      />
    </div>
  );
};

export default OutgoingMessages;
