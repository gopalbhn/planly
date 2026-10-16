 const backendUrl = `${import.meta.env.VITE_BACKEND_URL}/api/v1`
 console.log("vite bakcend url",backendUrl)
const api ={
    register:{
        url:`${backendUrl}/auth/`
    }
}