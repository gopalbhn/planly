import { Hono } from "hono" 
import {createProject,getAllProjects,getProjectById,updateProject,deleteProject} from "../controller/ProjectController.js"
import authenticateUser from "../middleware/authenticteUser.js";
const projectRoutes = new Hono()

projectRoutes.use('*',authenticateUser);

projectRoutes.get("/",getAllProjects);
projectRoutes.get("/:id",getProjectById);
projectRoutes.post("/",createProject);
projectRoutes.put("/:id",updateProject);
projectRoutes.delete("/:id",deleteProject);

export default projectRoutes