import { Link } from "@tanstack/react-router"
import { Button } from "./ui/button"
import { useEffect, useState } from "react"

const NavBar = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleSrcoll = () => {
            setScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleSrcoll)

        return () => {
            window.removeEventListener('scroll', handleSrcoll)
        }
    }, [])
    return (
        <div className={` fixed left-1/2 -translate-x-1/2  z-20 h-15 flex items-center duration-500   ${scrolled ? "w-[70%] rounded-xl shadow-sm backdrop-blur-2xl top-5 px-2" : "w-full top-0 px-10"}`}>


            <div className=" flex flex-1 items-center  px-3 ">
                <p>Logo</p>
            </div>
            <div className="flex-1 flex gap-2 justify-center items-center">
                {
                    ["Home", "Services", "Pricing"].map(item => (
                        <Link to={item} className=" mx-4  text-sm font-medium hover:text-primary group relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-1/2 after:bg-primary after:transition-all after:duration-500">{item}</Link>
                    ))
                }
            </div>
            <div className="flex flex-1 justify-end items-center ">
                <Button variant={"default"}>Login</Button>
            </div>
        </div>

    )
}

export default NavBar