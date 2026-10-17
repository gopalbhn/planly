import {Hono} from "hono"
import {cors} from "hono/cors"
import {auth } from "@planly/auth"
import projectRouter from "./routes/ProjectRoute"
import boardRouter from "./routes/boardRoute"
import taskRouter from "./routes/taskRoute"
const app = new Hono()

app.use("/api/*",cors({
    origin:["http://localhost:5173"],
    allowMethods:["GET","POST","DELETE","PUT","OPTIONS"],
    allowHeaders:["Content-Type","Authorization"],
    credentials:true,
}))
app.on(["GET","POST"],"/api/auth/*",async (c,next)=>{
    return auth.handler(c.req.raw)
})
app.get('/health',(c)=> c.text("Server is healthy"))
app.route("api/v1/projects",projectRouter)
app.route("api/v1/boards",boardRouter)
app.route("api/v1/tasks",taskRouter)

export default app;