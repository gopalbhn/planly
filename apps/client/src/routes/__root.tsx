import { Toaster } from "@/components/ui/sonner";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
    component:RootLayout
})


function RootLayout(){
    return(
        <>
        <Toaster />
        <Outlet />
        </>
    )
}