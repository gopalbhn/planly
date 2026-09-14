import {Hono} from "hono"
import {cors} from "hono/cors"
import {auth } from "@planly/auth"
import projectRouter from "./routes/ProjectRoute"
import boardRouter from "./routes/boardRoute"
import taskRouter from "./routes/taskRoute"
const app = new Hono()

app.use("/api/*",cors({
    origin:["http://localhost:5173"],
    allowMethods:["GET","POST","DELETE","PUT"],
    allowHeaders:["Content-Type","Authorization"],
    credentials:true,
}))

app.use("*",cors({
    origin:["http://localhost:5173"],
    allowMethods:["GET","POST","DELETE","PUT"],
    allowHeaders:["Content-Type","Authorization"],
    credentials:true,
}))

app.on(["GET","POST"],"/api/*",async (c,next)=>{
    return auth.handler(c.req.raw)
})

app.route("api/v1/project",projectRouter)
app.route("api/v1/board",boardRouter)
app.route("api/v1/task",taskRouter)

export default app;