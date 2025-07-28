import { ReactNode } from "react"


export default function AuthLayout({children}:{children:ReactNode}){
    return <div >
        
        {/* <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Sign Up Form */}
            {/* {children} */}
          {/* </div> */} 
          {children}
           {/* <AuthContent/> */}
    </div>
}