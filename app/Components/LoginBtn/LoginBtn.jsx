'use client'
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";

export default function LoginBtn(){
    return <LoginLink>
        <button className="bg-black text-white px-2 rounded">LogIn</button>
    </LoginLink>
}