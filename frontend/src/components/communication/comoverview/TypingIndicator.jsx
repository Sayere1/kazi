import { useTypingStore } from "../../../store/message/useTypingStore";
import { useChannelStore } from "../../../store/message/useChannelStore";
import { useMemberStore } from "../../../store/message/useMemberStore";

const TypingIndicator = () => {
  const activeChannel = useChannelStore((s) => s.activeChannel);

  // Select the entire typing object ONCE
  const typingMap = useTypingStore((s) => s.typing);

  // Derive the channel-specific array OUTSIDE the selector
  const typing = typingMap[activeChannel] || [];

  const members = useMemberStore((s) => s.members);

  if (typing.length === 0) return null;

  const names = typing
    .map((id) => members.find((m) => m.id === id)?.name)
    .filter(Boolean);

  return (
    <div className="px-6 pb-2 text-xs text-gray-500 dark:text-gray-400 animate-pulse">
      {names.join(", ")} typing…
    </div>
  );
};

export default TypingIndicator;
