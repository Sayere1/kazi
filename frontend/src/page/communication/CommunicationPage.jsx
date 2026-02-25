//communicatepage

import { useState } from "react";
import { MdInfo } from "react-icons/md";

import AvatarStack from "../../components/communication/comoverview/AvatarStack";
import IncomingMessages from "../../components/communication/comoverview/IncomingMessages";
import OutgoingMessages from "../../components/communication/comoverview/OutgoingMessages";
import ViewThread from "../../components/communication/comoverview/ViewThread";
import TypingIndicator from "../../components/communication/comoverview/TypingIndicator";
import MessageInput from "../../components/communication/comoverview/MessageInput";
import RightPanel from "../../components/communication/comoverview/RightPanel";

import { useChannelStore } from "../../store/message/useChannelStore";
import { useMessageStore } from "../../store/message/useMessageStore";


import DriveModal from "../../modal/communication/DriveModal";
import DropboxModal from "../../modal/communication/DropboxModal";



const CommunicationPage = () => {

  const activeChannel = useChannelStore((s) => s.activeChannel);

  const messages = useMessageStore((s) => s.messages[activeChannel] || []);

  const [activeThread, setActiveThread] = useState(null);

  const handleReply = (messageId) => {
    const parent = messages.find((m) => m.id === messageId);
    if (parent) setActiveThread(parent);
  };

  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark text-[#111418]
     dark:text-white font-display">

      {/* MAIN LAYOUT */}
      <main className="flex flex-1 overflow-hidden">

        {/* CHAT AREA */}
        <section className="flex-1 flex flex-col bg-white dark:bg-background-dark min-w-0">

          {/* CHANNEL HEADER */}
          <div className="px-6 py-4 border-b border-[#f0f2f4] dark:border-gray-800 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold flex items-center gap-2">
                #{activeChannel}
              </h2>
              <p className="text-xs text-[#617589]">Channel discussion and updates</p>
            </div>

            <div className="flex items-center gap-4">
              <AvatarStack />
              <div className="h-6 w-px bg-gray-200 dark:bg-gray-800" />
              <button className="text-gray-500 hover:text-primary">
                <MdInfo size={22} />
              </button>
            </div>
          </div>

          {/* MESSAGES FEED */}
          <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-6 no-scrollbar">

            {messages.map((msg) =>
              msg.type === "incoming" ? (
                <IncomingMessages
                  key={msg.id}
                  id={msg.id}
                  name={msg.sender}
                  time={msg.time}
                  text={msg.text}
                  img={msg.avatar}
                  onReply={handleReply}
                  hasThread={msg.threadCount > 0}
                  threadCount={msg.threadCount}
                />
              ) : (
                <OutgoingMessages
                  key={msg.id}
                  id={msg.id}
                  time={msg.time}
                  text={msg.text}
                  onReply={handleReply}
                  hasThread={msg.threadCount > 0}
                  threadCount={msg.threadCount}
                />
              )
            )}

            {/* THREAD VIEW */}
            {activeThread && (
              <ViewThread parent={activeThread} />
            )}

            {/* TYPING INDICATOR */}
            <TypingIndicator />
          </div>

          {/* MESSAGE INPUT */}
          <MessageInput />
        </section>

        <>
  <DriveModal />
  <DropboxModal />
</>


        {/* RIGHT PANEL */}
        <RightPanel />
      </main>
    </div>
  );
};

export default CommunicationPage;
