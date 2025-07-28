"use client"
import { useState } from 'react';
// import { useNavigate } from 'next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { useLibrary } from '@/contexts/LibraryContext';
// import { useToast } from '@/hooks/use-toast';
import {toast} from "sonner"
import { BookOpen, User, Lock } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter()
  
//   const { toast } = useToast();
//   const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const success = true
    
    if (success) {
      toast.success("loggin successfull");
      router.push('/dashboard');
    } else {
      toast.error("logged in failed");
    }
    
    setIsLoading(false);
  };

  const handleDemoLogin = (userType: 'admin' | 'student') => {
    if (userType === 'admin') {
      setEmail('admin@library.edu');
    } else {
      setEmail('john.smith@university.edu');
    }
    setPassword('password');
  };

  return (
    <div className="min-h-screen flex items-center justify-center  from-library-primary via-library-primary-light to-primary p-4">
      <div className="w-full max-w-md">
        

        <Card className="backdrop-blur-sm bg-white/95 border-0 shadow-2xl">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-library-primary text-3xl font-bold">Welcome Back</CardTitle>
            <CardDescription>
              Sign in to access your library account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-library-primary font-medium">
                  Email Address
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-12"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-library-primary font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 h-12"
                    required
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 bg-library-primary  dark:text-white text-black hover:bg-library-primary-light cursor-pointer hover:bg-blue-50" 
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>

           
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;