import { create } from "zustand";
import { nanoid } from "nanoid";

import userImage1 from "../../assets/images/image1.png";
import userImage2 from "../../assets/images/image2.png";

export const useMessageStore = create((set, get) => ({
  messages: {
    "eco-trans-q4": [
      {
        id: nanoid(),
        channelId: "eco-trans-q4",
        sender: "Omarion Fabrizo",
        senderId: "omarion",
        avatar: userImage2,
        text: "I've updated the strategies for Q4 features.",
        time: "10:24 AM",
        type: "incoming",
      },
    ],
  },

  getMessages: (channelId) => get().messages[channelId] || [],

  sendMessage: (channelId, text) => {
    const newMsg = {
      id: nanoid(),
      channelId,
      sender: "You",
      senderId: "you",
      avatar: userImage1,
      text,
      type: "outgoing",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    set((state) => ({
      messages: {
        ...state.messages,
        [channelId]: [...(state.messages[channelId] || []), newMsg],
      },
    }));
  },

  threadId: null, // or message.id for replies

getThread: (channelId, parentId) => {
  const msgs = get().messages[channelId] || [];
  return msgs.filter((m) => m.threadId === parentId);
},


sendReply: (channelId, parentId, text) => {
  const newMsg = {
    id: nanoid(),
    channelId,
    sender: "You",
    senderId: "you",
    avatar: userImage1,
    text,
    type: "outgoing",
    threadId: parentId,
    time: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  };

  set((state) => ({
    messages: {
      ...state.messages,
      [channelId]: [...state.messages[channelId], newMsg],
    },
  }));
},


}));
