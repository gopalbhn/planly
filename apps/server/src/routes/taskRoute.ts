import { Hono } from "hono";
import { getAllTasks, getTaskById, createTask, updateTask, deleteTask } from "../controller/TaskController.js";
import authenticateUser from "../middleware/authenticteUser.js";
const router = new Hono();

router.use("*",authenticateUser);

router.get('/', getAllTasks);
router.get("/:id", getTaskById);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
