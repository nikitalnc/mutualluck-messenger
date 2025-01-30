import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

export const RegisterForm = () => {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }
    setLoading(true);

    // TODO: Implement actual registration logic
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Welcome!",
        description: "Your account has been created successfully.",
      });
      navigate("/chat");
    }, 1500);
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <div className="space-y-2">
        <Input
          type="text"
          placeholder="Choose a nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-neutral-light focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          required
        />
      </div>
      <div className="space-y-2">
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-neutral-light focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          required
        />
      </div>
      <div className="space-y-2">
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-neutral-light focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          required
        />
      </div>
      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-2 rounded-lg transition-all duration-200 ease-in-out transform hover:scale-[1.02] active:scale-[0.98]"
      >
        {loading ? "Creating account..." : "Register"}
      </Button>
      <p className="text-center text-sm text-neutral">
        Already have an account?{" "}
        <a
          href="/login"
          className="text-primary hover:text-primary-dark transition-colors"
        >
          Login
        </a>
      </p>
    </motion.form>
  );
};