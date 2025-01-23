'use client'
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";

export default function Logout(){
    return <LogoutLink>
         <button className="bg-black text-white px-2 rounded">LogOut</button>
    </LogoutLink>
}