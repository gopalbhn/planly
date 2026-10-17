 const backendUrl = `${import.meta.env.VITE_BACKEND_URL}/api`
 console.log(import.meta.env.BACKEND_URL)
 console.log("vite bakcend url",backendUrl)
const api ={
    emailLogin:{
        url:`${backendUrl}/auth/sign-in/magic-link`,
        method:"POST"
    },
    googleLogin:{
        url:`${backendUrl}/auth/sign-in/social`,
        method:"POST"
    }
}
 

export default api