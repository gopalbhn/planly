import { createFileRoute } from "@tanstack/react-router";


export const Route = createFileRoute("/about")({
    component:AboutCompoent
})

function AboutCompoent(){
    return(
        <div className="bg-red-300 h-screen w-screen flex items-center text-white">About Page</div>
   
    )
}