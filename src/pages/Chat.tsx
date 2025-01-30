import { ChatLayout } from "@/components/chat/ChatLayout";
import { ChatSidebar } from "@/components/chat/ChatSidebar";

const Chat = () => {
  return (
    <ChatLayout>
      <ChatSidebar />
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b border-neutral-light">
          <h1 className="text-xl font-semibold text-secondary-dark">Messages</h1>
        </div>
        <div className="flex-1 p-4">
          {/* TODO: Add chat messages */}
        </div>
      </div>
    </ChatLayout>
  );
};

export default Chat;