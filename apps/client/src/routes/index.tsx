import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/navbar";
import { createFileRoute,Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
    component: RouteComponent,
})


function RouteComponent(){
    return(
        <main>
            <NavBar />
        <div className="h-[150vh] w-screen">
        <HeroSection />
        </div>
        </main>
    )

}