import { useEffect, useState } from "react";
import { ChatLayout } from "@/components/chat/ChatLayout";
import { ChatSidebar } from "@/components/chat/ChatSidebar";
import { Message, getMessagesBetweenUsers } from "@/utils/db";
import { useQuery } from "@tanstack/react-query";

const Chat = () => {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const currentUserId = "current-user-id"; // Replace with actual user ID from auth

  const { data: messages, isLoading } = useQuery({
    queryKey: ['messages', currentUserId, selectedUserId],
    queryFn: () => 
      selectedUserId 
        ? getMessagesBetweenUsers(currentUserId, selectedUserId)
        : Promise.resolve([]),
    enabled: !!selectedUserId,
  });

  return (
    <ChatLayout>
      <ChatSidebar onUserSelect={setSelectedUserId} />
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b border-neutral-light">
          <h1 className="text-xl font-semibold text-secondary-dark">Messages</h1>
        </div>
        <div className="flex-1 p-4">
          {isLoading ? (
            <div>Loading messages...</div>
          ) : (
            <div className="space-y-4">
              {messages?.map((message: Message) => (
                <div
                  key={message.id}
                  className={`p-3 rounded-lg max-w-[70%] ${
                    message.sender_id === currentUserId
                      ? "ml-auto bg-blue-500 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  {message.content}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </ChatLayout>
  );
};

export default Chat;