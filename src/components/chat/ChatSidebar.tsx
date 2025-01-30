import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MessageCircle, User } from "lucide-react";

export const ChatSidebar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-80 border-r border-neutral-light bg-white/50 backdrop-blur-sm p-4">
      <div className="flex items-center space-x-2 mb-6">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral" />
          <Input
            type="text"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Button
          variant="ghost"
          className="w-full justify-start space-x-2 text-neutral-dark hover:text-primary hover:bg-primary-light/50"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Messages</span>
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start space-x-2 text-neutral-dark hover:text-primary hover:bg-primary-light/50"
        >
          <User className="w-4 h-4" />
          <span>Profile</span>
        </Button>
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-medium text-neutral-dark mb-2">Recent Chats</h3>
        <div className="space-y-2">
          {/* TODO: Add recent chats list */}
        </div>
      </div>
    </div>
  );
};