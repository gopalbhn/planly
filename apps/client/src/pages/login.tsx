import Image from "@/assets/login-image.png"
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/Logo";
import {  Mail, MoveRight } from "lucide-react";
import { useState } from "react";
import axios from "axios"
import api from "@/api";
import { toast } from "sonner";
const Login = () =>{
    const [email,setEmail] = useState<string>("");

    async function handleEmailClick(){
        console.log("clicked")
    if (!email.trim()) {
    toast.error("Please enter your email");
    return;
  }
       console.log(api.emailLogin)
       const res = await axios.post(`${api.emailLogin.url}`,{
        email
       })

       if(!res.status){
         toast.error("Unable to login")
       }
         toast.success("Check your email for the login link");
    console.log(res.data);
    }

    async function handleGoogleLogin(){

    }

    return(
        <div className="h-screen w-screen grid grid-cols-1 md:grid-cols-2">
            <div className="h-full w-full flex items-center justify-center bg-primary/5">
                <div className=" w-full max-w-md p-6 md:p-9 shadow-xl shadow-gray-200/50 rounded-lg space-y-5 bg-white">
                   <div className="mb-8 flex flex-col items-center ">

                    <Logo />
                    <p className="text-2xl font-bold tracking-tight text-grya-900">Welcome Back!!</p>
                        <p className="mt-1 text-gray-500 text-sm"> Sign in to Continue</p>
               
                   </div>
                    <div className="mt-2 space-y-2">
                    <p className="text-xs ">Email</p>
                    <div className="relative">
                        <Mail size={16} className="absolute top-2.5 left-2 text-gray-800"/>
                    <input type="text" placeholder="Enter Your Email" className="pl-8 py-2 w-full border rounded-md text-sm" value={email} onChange={(e)=>{
                        setEmail(e.target.value)
                    }} />
                    </div>
                    </div>
                    <div className="w-full h-fit space-y-3 mt-5">

                    <Button className="group w-full" onClick={handleEmailClick} >Continue
                        <span><MoveRight className=" w-full group-hover:translate-x-2 transition-transform duration-400 " /></span>
                    </Button>
                          <div className="relative flex items-center py-1">
        <div className="flex-grow border-t border-gray-200" />
        <span className="mx-4 text-xs font-medium uppercase tracking-wider text-gray-400">
          or continue with
        </span>
        <div className="flex-grow border-t border-gray-200" />
      </div>

                    <Button variant={"outline"} onClick={handleGoogleLogin} className="w-full hover:bg-primary hover:text-white border border-primary-light"> <GoogleIcon />Login With Google</Button>
                    </div>
                    <p className="mt-8 text-center text-xs leading-relaxed text-gray-500">
                        By Continuing, you agree to our {"  "}
                        <a className="font-medium text-gray-600 hover:text-primary hover:underline">Terms of service {" "}</a>
                        and {" "}
                              <a href="/privacy" className="font-medium text-gray-600 hover:text-primary hover:underline">
        Privacy Policy
      </a>.

                    </p>
                </div>

            </div>
            <div className="h-full w-full overflow-hidden hidden md:block">
                <img src={Image} className="h-full w-full object-cover" />
            </div>
        </div>
    )
}

const GoogleIcon = () =>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
  <path fill="#4285F4" d="M47.5 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h13.18c-.58 2.96-2.26 5.48-4.76 7.18v6h7.73c4.52-4.16 7.35-10.3 7.35-17.65z"/>
  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.15 15.9-5.8l-7.73-6c-2.15 1.44-4.9 2.3-8.17 2.3-6.27 0-11.58-4.23-13.48-9.92H2.54v6.19C6.5 42.06 14.61 48 24 48z"/>
  <path fill="#FBBC05" d="M10.52 28.58A14.4 14.4 0 0 1 9.77 24c0-1.59.27-3.13.75-4.58v-6.19H2.54A23.94 23.94 0 0 0 0 24c0 3.87.93 7.53 2.54 10.77z"/>
  <path fill="#EA4335" d="M24 9.5c3.54 0 6.72 1.22 9.22 3.6l6.9-6.9C35.92 2.34 30.48 0 24 0 14.61 0 6.5 5.94 2.54 13.23l7.98 6.19C12.42 13.73 17.73 9.5 24 9.5z"/>
</svg>
    )
}

export default Login