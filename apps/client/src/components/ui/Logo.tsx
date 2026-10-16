import { Lottie } from "lottie-react"
import LogoAnimation from "@/assets/plannly.json"
const Logo = () =>{
    return(
        <Lottie
        src={LogoAnimation}
        loop
        autoplay
        style={{width:150,height:50}}

        />
    )
}


export default Logo