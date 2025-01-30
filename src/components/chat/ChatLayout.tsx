import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ChatLayoutProps {
  children: ReactNode;
}

export const ChatLayout = ({ children }: ChatLayoutProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-screen bg-neutral-light flex"
    >
      <div className="flex-1 flex flex-col bg-white/80 backdrop-blur-lg shadow-lg m-4 rounded-2xl overflow-hidden">
        {children}
      </div>
    </motion.div>
  );
};