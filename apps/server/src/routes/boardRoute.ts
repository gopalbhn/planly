import {Hono } from "hono"

const router = new Hono();

import {createBoard,getAllBoards,getBoardById,updateBoard,deleteBoard} from "../controller/BoardController.js"
import authenticateUser from "../middleware/authenticteUser.js";


router.use('*',authenticateUser);

router.get('/',getAllBoards);
router.get("/:id",getBoardById);
router.post("/",createBoard);

router.put("/:id",updateBoard);
router.delete("/:id",deleteBoard);


export default router


