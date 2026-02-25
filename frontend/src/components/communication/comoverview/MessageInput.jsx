import { useRef, useState } from "react";
import {
  MdFormatBold,
  MdFormatItalic,
  MdLink,
  MdAlternateEmail,
  MdMood,
  MdSend,
} from "react-icons/md";
import { useMessageStore } from "../../../store/message/useMessageStore";
import { useChannelStore } from "../../../store/message/useChannelStore";
import { useTypingStore } from "../../../store/message/useTypingStore";
import { useMemberStore } from "../../../store/message/useMemberStore";
import { useComposerStore } from "../../../store/message/useComposerStore";


const MessageInput = () => {
  const [value, setValue] = useState("");
  const textareaRef = useRef(null);

  const sendMessage = useMessageStore((s) => s.sendMessage);
  const activeChannel = useChannelStore((s) => s.activeChannel);

  const setTyping = useTypingStore((s) => s.setTyping);
  const me = useMemberStore((s) => s.members.find((m) => m.id === "you"));

  //const toggleFormat = useComposerStore((s) => s.toggleFormat);
  const openDrive = useComposerStore((s) => s.openDrive);
  const openDropbox = useComposerStore((s) => s.openDropbox);
  const formatting = useComposerStore((s) => s.formatting);

  const handleSend = () => {
    if (!value.trim()) return;
    sendMessage(activeChannel, value);
    setValue("");
  };


const insertAtCursor = (text) => {
  const textarea = textareaRef.current;
  if (!textarea) return;

  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;

  const before = value.substring(0, start);
  const after = value.substring(end);

  const newValue = before + text + after;
  setValue(newValue);

  // Move cursor to end of inserted text
  const cursorPos = start + text.length;
  setTimeout(() => {
    textarea.setSelectionRange(cursorPos, cursorPos);
    textarea.focus();
  }, 0);
};


const applyFormatting = (key) => {
  const textarea = textareaRef.current;
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const selected = value.substring(start, end);

  let formatted = "";

  if (key === "bold") formatted = `**${selected || "bold"}**`;
  if (key === "italic") formatted = `*${selected || "italic"}*`;
  if (key === "link") formatted = `[${selected || "text"}](url)`;
  if (key === "mention") formatted = `@${selected || "username"}`;
  if (key === "emoji") formatted = `😊`;

  insertAtCursor(formatted);
};



  return (
    <div className="p-4 border-t border-[#f0f2f4] dark:border-gray-800 bg-white dark:bg-background-dark">
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden bg-white
       dark:bg-gray-900 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary 
       transition-all">

        {/* Toolbar */}
        <div className="flex items-center gap-1 px-3 py-2 border-b border-gray-100 dark:border-gray-800">
          <ToolbarButton
            icon={<MdFormatBold size={20} />}
            active={formatting.bold}
            onClick={() => applyFormatting("bold")}
          />
          <ToolbarButton
            icon={<MdFormatItalic size={20} />}
            active={formatting.italic}
            onClick={() => applyFormatting("italic")}
          />
          <ToolbarButton
            icon={<MdLink size={20} />}
            active={formatting.link}
            onClick={() => applyFormatting("link")}
          />

          <div className="w-px h-4 bg-gray-200 dark:bg-gray-800 mx-1" />

          <ToolbarButton
            icon={<MdAlternateEmail size={20} />}
            active={formatting.mention}
            onClick={() => applyFormatting("mention")}
          />
          <ToolbarButton
            icon={<MdMood size={20} />}
            active={formatting.emoji}
            onClick={() => applyFormatting("emoji")}
          />
        </div>

        {/* Textarea */}
        <div className="flex flex-col">
          <textarea
            value={value}
             ref={textareaRef}
            className="w-full bg-transparent text-sm p-4 resize-none min-h-20 focus:ring-0 focus:outline-none"
            placeholder={`Message #${activeChannel}`}
            onChange={(e) => {
              setValue(e.target.value);
              setTyping(activeChannel, me.id, true);

              clearTimeout(window._typingTimeout);
              window._typingTimeout = setTimeout(() => {
                setTyping(activeChannel, me.id, false);
              }, 1200);
            }}
          />

          {/* Footer */}
          <div className="flex items-center justify-between px-3 py-3 bg-gray-50/50 dark:bg-gray-800/50">
            <div className="flex items-center gap-2">
              <DriveButton label="Drive" onClick={openDrive} />
              <DriveButton label="Dropbox" onClick={openDropbox} />
            </div>

            <button
              onClick={handleSend}
              className="size-10 bg-primary text-white rounded-lg flex items-center justify-center 
              hover:opacity-90 shadow-sm"
            >
              <MdSend size={22} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ToolbarButton = ({ icon, active, onClick }) => (
  <button
    onClick={onClick}
    className={`p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800 ${
      active ? "text-primary" : "text-gray-400"
    }`}
  >
    {icon}
  </button>
);

const DriveButton = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700
     bg-white dark:bg-gray-800 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50"
  >
    {label}
  </button>
);

export default MessageInput;



