import { clerkMiddleware,createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
const protectedRoutes=createRouteMatcher(["/gestao(.*)","/api/gestao(.*)"]);
export default clerkMiddleware(async(auth,request)=>{if(protectedRoutes(request)){const {userId}=await auth();if(!userId)return NextResponse.redirect(new URL("/sign-in",request.url))}});
export const config={matcher:["/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)","/(api)(.*)"]};
