import { config } from "dotenv"
import app from "./app"
config({
    path:"../../.env"
})
Bun.serve({
    port:process.env.PORT,
    fetch:app.fetch
})

console.log("Server Is running on port "+process.env.PORT)