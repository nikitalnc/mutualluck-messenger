import { AuthLayout } from "@/components/auth/AuthLayout";
import { LoginForm } from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Enter your credentials to continue"
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;