
import FeatureCard from "@/components/FeatureCard";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/navbar";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
    component: RouteComponent,
})


function RouteComponent(){
    return(
        <main>
            <NavBar />
        <div className="h-[150vh] w-screen space-y-10">
        <HeroSection />
        <div className="w-full h-full mx-auto px-10">
        <h1 className="pb-5 text-2xl font-bold text-center">Features</h1>
        <FeatureCard />

        </div>
        </div>
        </main>
    )

}