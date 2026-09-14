
import { Hono } from "hono"
import authenticateUser from "../middleware/authenticteUser";

const router = new Hono();

router.get("*",authenticateUser);

router.get("/invite",inviteUser)
router.post("/decline",declineInvite)
router.post("/accept",acceptRequest);