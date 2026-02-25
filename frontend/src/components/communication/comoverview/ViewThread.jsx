import { useMessageStore } from "../../../store/message/useMessageStore";
import IncomingMessages from "./IncomingMessages";
import OutgoingMessages from "./OutgoingMessages";

const ViewThread = ({ parent }) => {
  const getThread = useMessageStore((s) => s.getThread);
  const replies = getThread(parent.channelId, parent.id);

  return (
    <div className="ml-12 mt-2 border-l border-gray-300 dark:border-gray-700 pl-4 flex flex-col gap-3">
      {replies.map((msg) =>
        msg.type === "incoming" ? (
          <IncomingMessages key={msg.id} {...msg} />
        ) : (
          <OutgoingMessages key={msg.id} {...msg} />
        )
      )}
    </div>
  );
};

export default ViewThread;
