
"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, ArrowRight} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const Login = () => {

   const [showPassword, setShowPassword] = useState(false);
   // const [showConfirmPassword, setShowConfirmPassword] = useState(false);
   const router = useRouter()
   const [formData, setFormData] = useState({
       name: "",
       email: "",
       password: "",
       confirmPassword: "",
       acceptTerms: false
     });
   
    const handleSubmit = async(e:React.FormEvent) => {
    e.preventDefault()
    // const name = formData.name
    // const email = formData.email
    const password = formData.password
    const email = formData.email
    

    if(!password || !email ){
        toast.error("password should be same")
        return
    }
     
    
    const response= {
        status : 200
    }
    // send the backend request and get back response

   
    if(response.status == 200){
        toast.success("you're signed up")
        router.push('/signin')
    }
   };

   const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };


 return  (
    <div className="max-w-full">
       <div className="min-h-screen transition-colors duration-500 " suppressContentEditableWarning>
        
        
        <div className="max-w-full h-screen   flex justify-center items-center">
          {/* Left side - Sign Up Form */}
          <div className="w-full flex items-center justify-center ">
            <Card className="w-full max-w-md mx-auto  border-slate-200  shadow-xl hover:shadow-2xl transition-all duration-300 animate-scale-in">
                        <CardHeader className="space-y-1 text-center">
                           <CardTitle className="text-4xl font-bold text-slate-900 dark:text-slate-100 max-sm:text-2xl">
                              Welcome back 
                              <CardDescription className="text-lg">
                                    Please Log in....
                              </CardDescription> 
                           </CardTitle>
                           
                        </CardHeader>
                        <CardContent>
                           <form onSubmit={handleSubmit} className="space-y-4">
                           
                              <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                              <Label htmlFor="email" className="text-slate-700 dark:text-slate-300">Email</Label>
                              <Input
                                 id="email"
                                 type="email"
                                 placeholder="you@example.com"
                                 value={formData.email}
                                 onChange={(e) => handleInputChange("email", e.target.value)}
                                 className="bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-200"
                                 required
                              />
                              </div>
                              
                              <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                              <Label htmlFor="password" className="text-slate-700 dark:text-slate-300">Password</Label>
                              <div className="relative">
                                 <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={(e) => handleInputChange("password", e.target.value)}
                                    className="bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-200 pr-10"
                                    required
                                 />
                                 <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors duration-200"
                                 >
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                 </button>
                              </div>
                              </div>
                              <Button
                              type="submit"
                              disabled={formData.acceptTerms}
                              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-2.5 rounded-lg transition-all duration-200 hover:scale-105 animate-fade-in group disabled:opacity-50"
                              style={{ animationDelay: '0.7s' }}
                              >
                              Log in
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                              </Button>
                           </form>

                           <div className="mt-6 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
                              <p className="text-slate-600 dark:text-slate-400">
                              I don&apos;t have an account {" "}
                              <Link
                                 href="/register"
                                 className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-200"
                              >
                                 Register
                              </Link>
                              </p>
                           </div>
                        </CardContent>
                     </Card>
          </div>
        </div>
      </div>
     </div>
 )
};

export default Login;