import { auth } from "@planly/auth"
import type {Context,Next} from "hono"
async function  authenticateUser(c:Context,next:Next){
    const session  = await auth.api.getSession({
        headers:c.req.raw.headers
    })

    if(!session){
        return c.json({error:"Unauthorized"},{status:401})
    }
    c.set("user",session.user)
    c.set("session",session)

    next();
}

export default authenticateUser